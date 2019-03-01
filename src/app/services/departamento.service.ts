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

  private departamento: Departamento;

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
}
