
import { UteisShared } from 'src/app/shared/uteis.shared';
import { DepartamentoService } from './../services/departamento.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { Departamento } from 'src/app/model/departamento';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  formGroup: FormGroup;

  departamento: Departamento;

  constructor(
    private departamentoService: DepartamentoService,
    private global: UteisShared,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    /* incluir os Dados do Formulario*/
    this.formGroup = this.formBuilder.group({
      'id': [null],
      'nome': ['', [Validators.required]],
    }); /* /end */

    this.departamento = new Departamento();

    if (this.router.url !== '/departamento/novo') {
      /* pegando o departamento selecionado e mostrando o mesmo na Tela */
      let id = this.route.snapshot.paramMap.get('id');
      this.departamentoService.getFindById(parseInt(id, 0)).subscribe(obj => {
        this.departamento = obj; /* departamento recebe os Dados escritos */

        /* Vinculando o FormGroup com o Objeto Selecioando*/
        this.formGroup.patchValue(this.departamento);
      }, error => {
        this.global.getMessage(this.global.error, 'Error ao Selecionar Cargo', '');
      });
    }

  }


  salvar() {
    this.departamentoService.salvar(this.departamento).subscribe(obj => {
      this.departamento = obj;
      this.global.getMessage(this.global.success, 'Confirmação!', 'Registro Salvo com Sucesso!');
      this.router.navigate(['/departamento/lista']);
    }, error => {
      this.global.getMessage(this.global.error, 'Ocorreu um Error', error);
    });
  }

  /* Update*/
  update() {
    this.departamentoService.update(this.departamento).subscribe(obj => {
      this.departamento = obj as Departamento;
      this.global.getMessage(this.global.success, 'Confirmação!', 'Registro Atualizado com Sucesso!');
      this.router.navigate(['/departamento/lista']);
    }, error => {
      this.global.getMessage(this.global.error, 'Ocorreu um Error', error);
    });
  }

  /* Fazendo a Submissão dos Dados do Formulario*/
  onSubmit(value) {
    this.departamento = value as Departamento;
    if (this.departamento.id == null) {
      this.salvar();
    } else {
      this.update();
    }
  }


}
