import { HttpHeaders } from '@angular/common/http';

export const environment = {
  production: true,
  urlBase: 'http://localhost:8080/',

  /* headers - Definindo o Tipo de Conteudo que é Passo no corpo da requisição 
     requer o inport no APP Module do HttpClientModule
  */
  httpOptions: {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
};
