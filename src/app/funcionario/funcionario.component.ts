import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { FuncionarioService } from './../services/funcionario.service';
import { UteisShared } from '../shared/uteis.shared';
import { Estado } from '../model/estatdo';
import { CargoService } from './../services/cargo.service';
import { Cargo } from './../model/cargo';

import { EstadoService } from './../services/estado.service';
import { Funcionario } from '../model/funcionario.dto';


@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  formGroup: FormGroup;

  funcionario: Funcionario;

  filtroCargos: Cargo[];

  filtroEstados: Estado[];

  constructor(
    private funcionarioService: FuncionarioService,
    private global: UteisShared,
    private router: Router,
    private formBuilder: FormBuilder,
    private cargoService: CargoService,
    private estadoService: EstadoService) { }

  ngOnInit() {

    this.funcionario = new Funcionario();

    this.formGroup = this.formBuilder.group({
      'id': [null],
      'nome': [null],
      'email':[null],
      'telefone': [null],
      'dataAdmissao': [null],
      'dataDemissao': [null],
      'salario': [null],
      'cargo': [null],
      'logradouro': [null],
      'numero': [null],
      'bairro': [null],
      'cep':[null],
      'complemento':[null],
      'cidade': [null],
      'estado':[null],

    });

 


  }


  salvar() {
    this.funcionarioService.salvar(this.funcionario).subscribe(obj => {

      this.global.getMessage(this.global.success, 'Confirmação!', 'Registro Salvo com Sucesso!');
      
      this.router.navigate(['/funcionario/lista']);
    }, error => {
      this.global.getMessage(this.global.error, 'Ocorreu um Error', error);
    });
  }

  /* Fazendo a Submissão dos Dados do Formulario*/
  onSubmit(value) {
    this.funcionario = value as Funcionario;
    this.salvar();
  }

  /* Buscar Cargos por nome*/
  getCargos(event) {
    this.cargoService.getCargosPorNome(event.query).subscribe(obj => {
      this.filtroCargos = obj;
    }, error => {
      this.global.getMessage(this.global.error, 'Ocorreu um Error', error);
    })
  }

  /* Buscar Estado por nome*/
  getEstados(event) {
    this.estadoService.getEstadosPorNome(event.query).subscribe(obj => {
      this.filtroEstados = obj;
    }, error => {
      this.global.getMessage(this.global.error, 'Ocorreu um Error', error);
    })
  }

}
