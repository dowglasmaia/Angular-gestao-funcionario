import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { Departamento } from 'src/app/model/departamento';
import { DepartamentoService } from './../services/departamento.service';
import { CargoService } from 'src/app/services/cargo.service';
import { Cargo } from './../model/cargo';
import { UteisShared } from 'src/app/shared/uteis.shared';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  filtroDepartamento: Departamento[];

  cargo: Cargo;

  formGroup: FormGroup;

  constructor(
    private departamentoServeice: DepartamentoService,

    private router: Router,
    private route: ActivatedRoute,
    private global: UteisShared,
    private frmBuilder: FormBuilder,
    private cargoService: CargoService,

  ) { }

  ngOnInit() {
    /* incluir os Dados do Formulario*/
    this.formGroup = this.frmBuilder.group({
      'id': [null],
      'nome': ['', [Validators.required]],
      'departamento': ['', [Validators.required]],
    });

    this.cargo = new Cargo();

    if (this.router.url !== '/cargo/novo') {
      /* pegando o cargo selecionado e mostrando o mesmo na Tela */
      let id = this.route.snapshot.paramMap.get('id');
      this.cargoService.getCargoPorID(parseInt(id, 0)).subscribe(obj => {
        this.cargo = obj; /* cargo recebe os Dados escritos */

        /* Vinculando o FormGroup com o Objeto Selecioando*/
        this.formGroup.patchValue(this.cargo);
      }, error => {
        this.global.getMessage(this.global.error, 'Error ao Selecionar Cargo', '');
      });
    }
  }

  /* Buscar Departamentos por nome*/
  getDepartamentos(event) {
    this.departamentoServeice.getDepartamentoByNome(event.query).subscribe(obj => {
      this.filtroDepartamento = obj;
    }, error => {
      this.global.getMessage(this.global.error, 'Ocorreu um Error', error);
    })
  }

  /* Salvar*/
  salvar() {
    this.cargoService.salvar(this.cargo).subscribe(obj => {
      this.cargo = obj;
      this.global.getMessage(this.global.success, 'Confirmação!', 'Registro Salvo com Sucesso!');
      this.router.navigate(['/cargo/lista']);
    }, error => {
      this.global.getMessage(this.global.error, 'Ocorreu um Error', error);
    });
  }

  /* Salvar*/
  update() {
    this.cargoService.update(this.cargo).subscribe(obj => {
      this.cargo = obj as Cargo;
      this.global.getMessage(this.global.success, 'Confirmação!', 'Registro Atualizado com Sucesso!');
      this.router.navigate(['/cargo/lista']);
    }, error => {
      this.global.getMessage(this.global.error, 'Ocorreu um Error', error);
    });
  }

  /* Fazendo a Submissão dos Dados do Formulario*/
  onSubmit(value) {
    this.cargo = value as Cargo;
    if (this.cargo.id == null) {
      this.salvar();
    } else {
      this.update();
    }

  }

}
