import { Injectable } from '@angular/core';
import { Adm } from 'src/app/model/adm';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmService {

  constructor(private http : HttpClient) { }


  inserirAdm(adm?: Adm):Observable <boolean>{

    if(!adm) return of(false);
    return this.http.post<boolean>(`${environment.urlApi}/adm`, adm)
  }

  buscarAdms(): Observable<Adm[]> {
    return this.http.get<Adm[]>(`${environment.urlApi}/adm`);
  }

  buscarAdmId(id? : number): Observable <number | undefined>{

    if(!id) return of (undefined);
    return this.http.get< number > (`${environment.urlApi}/adm/${id}`);

  }

  buscarAdmNome(nome? : string): Observable <number | undefined>{

    if(!nome) return of (undefined);
    return this.http.get< number > (`${environment.urlApi}/adm/nome/${nome}`);

  }

  atualizarAdm(adm?:Adm, id?: number) : Observable<boolean>{
    if(!adm) return of(false);
    return this.http.put<boolean>(`${environment.urlApi}/adm/${id}`, adm);
  }

  removerAdm(id?: number) : Observable<boolean | undefined>{
    if(!id) return of(undefined);
    return this.http.delete<boolean>(`${environment.urlApi}/adm/${id}`)
  }
}
