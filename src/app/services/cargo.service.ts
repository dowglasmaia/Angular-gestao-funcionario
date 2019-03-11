import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cargo } from '../model/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private url = environment.urlBase + 'cargos/';

  constructor(private http: HttpClient) { }

  /* lstar Todos*/
  getCargos(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(this.url);
  }

  /* lstar Cargo por Nome*/
  getCargosPorNome(nome: string): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(this.url + 'lista/' + nome);
  }

  /* Buscar Por ID*/
  getCargoPorID(id: number){
    return this.http.get<Cargo>(this.url + id);
  }

  /* Salvar */
  salvar(obj: Cargo): Observable<Cargo> {
    return this.http.post<Cargo>(this.url, obj, environment.httpOptions);
  }

   /* Update */
   update(obj: Cargo): Observable<any> {
    return this.http.put(this.url + obj.id, obj, environment.httpOptions);
  }
  

  excluir(id: number): Observable<{}>{
    return this.http.delete(this.url + id);
  }
}

