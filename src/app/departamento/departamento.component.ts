import { UteisShared } from 'src/app/shared/uteis.shared';
import { DepartamentoService } from './../services/departamento.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { Departamento } from 'src/app/model/departamento';
import { Router } from '@angular/router';


@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  formGroup: FormGroup;

  departamento: Departamento;

  constructor(
    private departamentoServcie: DepartamentoService,
    private global: UteisShared,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    /* incluir os Dados do Formulario*/
    this.formGroup = this.formBuilder.group({
      'id': new FormControl(''),
      'nome' : new FormControl('', Validators.required)
    }) /* /end */

  }


  salvar() {
    this.departamentoServcie.salvar(this.departamento).subscribe(obj => {
      this.departamento = obj;
      this.global.getMessage(this.global.success, 'Confirmação!', 'Registro Salvo com Sucesso!');
      this.router.navigate(['/departamento/lista']);
    }, error => {
      this.global.getMessage(this.global.error, 'Ocorreu um Error', error);
    });
  }

  /* Fazendo a Submissão dos Dados do Formulario*/
  onSubmit(value){
    this.departamento = value as Departamento;
    this.salvar();
  }
}
