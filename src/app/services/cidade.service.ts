import { Cidade } from './../model/cidade';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  private url = environment.urlBase + 'cidades/';

  private urlUf = environment.urlBase;

  constructor(private http: HttpClient) { }

  /* lstar Todos*/
  getCidades(): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.url);
  }

  /* Salvar */
  salvar(obj: Cidade): Observable<Cidade> {
    return this.http.post<Cidade>(this.url, obj, environment.httpOptions);
  }


  //Metodo q retorna a lista de cidades com base no id do Estado passado como argumento.
  findAll(estado_id: number): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.urlUf + '/estados/' + estado_id + '/cidades');
  }

   /* listaPorNome */
   getCidadesPorNome(nome: string): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.url + 'lista/' + nome);

  }
}

