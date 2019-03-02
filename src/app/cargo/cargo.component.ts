import { Cargo } from './../model/cargo';
import { UteisShared } from 'src/app/shared/uteis.shared';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Departamento } from 'src/app/model/departamento';
import { DepartamentoService } from './../services/departamento.service';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  filtroDepartamento: Departamento[];

  cargo = new Cargo();

  formGroup: FormGroup;

  constructor(
    private departamentoServeice: DepartamentoService,
    private router: Router,
    private global: UteisShared,
    private frmBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    /* incluir os Dados do Formulario*/
    this.formGroup = this.frmBuilder.group({
      'id': new FormControl(''),
      'nome': new FormControl('', Validators.required),
      'departamento.nome': new FormControl('', Validators.required)
    });

    this.cargo = new Cargo();

  }

  /* Buscar Cargo */
  getDepartamentos(event) {
    this.departamentoServeice.getDepartamentoByNome(event.query).subscribe(obj => {
      this.filtroDepartamento = obj;
    }, error => {
      this.global.getMessage(this.global.error, 'Ocorreu um Error', error);
    })
  }

}
