import { Injectable } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http : HttpClient) { }

  inserirProduto(produto?: Produto):Observable <boolean>{

    if(!produto) return of(false);
    return this.http.post<boolean>(`${environment.urlApi}/produto`, produto)
  }

  buscarProduto(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${environment.urlApi}/produto`);
  }

  buscarProdutoId(id? : number): Observable <number | undefined>{

    if(!id) return of (undefined);
    return this.http.get< number > (`${environment.urlApi}/produto/${id}`);

  }

  buscarProdutoNome(nome? : string): Observable <number | undefined>{

    if(!nome) return of (undefined);
    return this.http.get< number > (`${environment.urlApi}/produto/nome/${nome}`);

  }

  atualizarProduto(produto?:Produto, id?: number) : Observable<boolean>{
    if(!produto) return of(false);
    return this.http.put<boolean>(`${environment.urlApi}/produto/${id}`, produto);
  }

  removerProduto(id?: number) : Observable<boolean | undefined>{
    if(!id) return of(undefined);
    return this.http.delete<boolean>(`${environment.urlApi}/produto/${id}`)
  }

}
