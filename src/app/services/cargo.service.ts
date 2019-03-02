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

  /* Salvar */
  salvar(obj: Cargo): Observable<Cargo> {
    return this.http.post<Cargo>(this.url, obj, environment.httpOptions);
  }
}
