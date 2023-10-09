import { Injectable } from '@angular/core';
import { environment } from '../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../entities/aluno';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  baseUrl = environment.baseUrl
  constructor(private http: HttpClient) { }

  findAll(): Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.baseUrl)
  }
}
