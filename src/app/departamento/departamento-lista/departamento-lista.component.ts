import { Component, OnInit } from '@angular/core';

import { Departamento } from 'src/app/model/departamento';
import { DepartamentoService } from './../../services/departamento.service';
import { UteisShared } from 'src/app/shared/uteis.shared';

import { ConfirmationService } from 'primeng/api';
import { ObjectUtils } from 'primeng/components/utils/objectutils';


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
    private departamentoService: DepartamentoService,
    private confirmationService: ConfirmationService,
    private objectUtils: ObjectUtils) { }

  ngOnInit() {

    /* chamo o metodo ao carregar a pagina*/
    this.getDepartamentos();

    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'nome', header: 'Departamento' }
    ];

  }

   /* Metodo Para Resolver a Questão  dos campos com vinculações a outros objetos*/
   resolveFieldData(data, field) {
    return this.objectUtils.resolveFieldData(data, field);
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
    return this.departamentoSelecionado == null ? null : this.departamentoSelecionado.id;

  }

  /* Excluir*/
  excluir() {
    this.confirmationService.confirm({
      message: 'Desejas realmente excluir este registro?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',

      accept: () => {
        this.departamentoService.excluir(this.departamentoSelecionado.id).subscribe(x => {
          this.getDepartamentos(); // atualiza a lista apos a exluisão
          this.botoesDesabilitado = true;
          this.global.getMessage(this.global.info, 'Department Deleted Successfully', '');
        }, error => {
          this.global.getMessage(this.global.error, 'Error deleting data!', '');
        });
      },

      reject: () => { }
    });

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
