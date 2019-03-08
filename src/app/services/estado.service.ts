import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Estado } from '../model/estatdo';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private url = environment.urlBase + 'estados/';

  constructor(private http: HttpClient) { }

  /* lstar Todos*/
  getEstados(): Observable<Estado[]> {
    return this.http.get<Estado[]>(this.url);
  }

  /* Salvar */
  salvar(obj: Estado): Observable<Estado> {
    return this.http.post<Estado>(this.url, obj, environment.httpOptions);
  }


   /* listaPorNome */
   getEstadosPorNome(nome: string): Observable<Estado[]> {
    return this.http.get<Estado[]>(this.url + 'lista/' + nome);

  }
}

