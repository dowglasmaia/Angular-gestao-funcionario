import { Funcionario } from '../model/funcionario.dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private url = environment.urlBase + 'funcionarios/';

  constructor(private http: HttpClient) { }

  /* lstar Todos*/
  getFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.url);
  }

  /* Salvar */
  salvar(obj: Funcionario) {
    return this.http.post(this.url, obj,
      {
      observe: 'response',
      responseType: 'text',
    });
  }

  
}