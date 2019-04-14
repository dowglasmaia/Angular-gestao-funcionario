import { CidadeService } from './../services/cidade.service';
import { Cidade } from './../model/cidade';
import { Router, ActivatedRoute } from '@angular/router';
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

  filtroCidades: Cidade[];

  constructor(
    private funcionarioService: FuncionarioService,
    private global: UteisShared,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private cargoService: CargoService,
    private estadoService: EstadoService,
    private cidadeService: CidadeService) { }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      'id': [null],
      'nome': [null, [Validators.required]],
      'email': [null, [Validators.required]],
      'telefone': [null, [Validators.required]],
      'dataAdmissao': [null, [Validators.required]],
      'dataDemissao':[null],
      'salario': [null, [Validators.required]],
      'logradouro':[null, [Validators.required]],
      'numero': [null, [Validators.required]],
      'bairro': [null, [Validators.required]],
      'cep': [null, [Validators.required]],
      'complemento': [null],
      'cidade': [null, [Validators.required]],
      'estado':[null, [Validators.required]],
      'cargo':[null, [Validators.required]],

    });

    this.funcionario = new Funcionario();

    if (this.router.url !== '/funcionario/novo') {
      /* pegando o cargo selecionado e mostrando o mesmo na Tela */
      let id = this.route.snapshot.paramMap.get('id');
      this.funcionarioService.getFindById(parseInt(id, 0)).subscribe(obj => {
        this.funcionario = obj;

        /* Vinculando o FormGroup com o Objeto Selecioando*/
        this.formGroup.patchValue(this.funcionario);
        console.log(this.formGroup);
      }, error => {
        this.global.getMessage(this.global.error, 'Error ao Selecionar Cargo', '');
      });
    }
  }


  salvar() {
    this.funcionarioService.salvar(this.funcionario).subscribe(obj => {

      this.global.getMessage(this.global.success, 'Confirmação!', 'Registro Salvo com Sucesso!');

      this.router.navigate(['/funcionario/lista']);
    }, error => {
      this.global.getMessage(this.global.error, 'Ocorreu um Error', error);
    });
  }


  /* Update*/
  update() {
    this.funcionarioService.update(this.funcionario).subscribe(obj => {
      this.funcionario = obj as Funcionario;
      this.global.getMessage(this.global.success, 'Confirmação!', 'Registro Atualizado com Sucesso!');
      this.router.navigate(['/funcionario/lista']);
    }, error => {
      this.global.getMessage(this.global.error, 'Ocorreu um Error', error);
    });
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

  /* Buscar Estado por nome*/
  getCidadesPorNome(event) {
    this.cidadeService.getCidadesPorNome(event.query).subscribe(obj => {
      this.filtroCidades = obj;
    }, error => {
      this.global.getMessage(this.global.error, 'Ocorreu um Error', error);
    })
  }

  /* Fazendo a Submissão dos Dados do Formulario*/
  onSubmit(value) {
    this.funcionario = value as Funcionario;
    if (this.funcionario.id == null) {
      this.salvar();
    } else {
      this.update();
    }
  }





}
