import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Departamento } from './../model/departamento';


@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private url = environment.urlBase + 'departamentos/';

  private departamentos: Departamento[];

  constructor(
    private http: HttpClient) { }

  /* listagem de Departamentos*/
  getDepartamentos(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(this.url);

  }

  /* Salvar*/
  salvar(obj: Departamento): Observable<Departamento> {
    return this.http.post<Departamento>(this.url, obj, environment.httpOptions);
  }

  /* listaPorNome */
  getDepartamentoByNome(nome: string): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(this.url + 'lista/' + nome);

  }

  /* Buscar Por ID */
  getFindById(id: number) {
    return this.http.get<Departamento>(this.url + id);

  }

  /* Update */
  update(obj: Departamento): Observable<Departamento> {
    return this.http.put<Departamento>(this.url + obj.id, obj, environment.httpOptions);
  }

  /* Excluir */
  excluir(id: number): Observable<{}>{
    return this.http.delete(this.url + id);
  }
}
