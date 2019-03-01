import { UteisShared } from './shared/uteis.shared';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gestao-funcionario-primeNG';

  /* necessario Instanciar  a varivel global  para mostra  as mensagens */
  constructor(private global: UteisShared){}
}
