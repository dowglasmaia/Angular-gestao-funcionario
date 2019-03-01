import { Component, OnInit } from '@angular/core';

import { Departamento } from 'src/app/model/departamento';
import { DepartamentoService } from './../../services/departamento.service';
import { UteisShared } from 'src/app/shared/uteis.shared';


@Component({
  selector: 'app-departamento-lista',
  templateUrl: './departamento-lista.component.html',
  styleUrls: ['./departamento-lista.component.css'],

})
export class DepartamentoListaComponent implements OnInit {


  cols: any[];

  departamentos: Departamento[];

  departamentoSelecionado: Departamento;

  botoesDesabilitado: boolean = true;

  constructor(
    private global: UteisShared,
    private departamentoService: DepartamentoService) { }

  ngOnInit() {

    /* chamo o metodo ao carregar a pagina*/
    this.getDepartamentos();

    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'nome', header: 'Departamento' }


    ];

  }

  /* buscar Todos*/
  getDepartamentos() {
    this.departamentoService.getDepartamentos().subscribe(
      lista => {
        this.departamentos = lista;
      }, error => {
        this.global.getMessage(this.global.error, 'Error ao Carregar Dados', error)
      });
  }

  /* buscar por id*/
  getDepartamentoID() {

  }

  /* Excluir*/
  excluir() {

  }

  /* ao selecionar um item - habilita os butões */
  onRowSelect(event) {
    this.botoesDesabilitado = false;
  }

  /* ao remover seleção do item -  desabilita os butões*/
  onRowUnselect(event) {
    this.botoesDesabilitado = true;
  }

}
