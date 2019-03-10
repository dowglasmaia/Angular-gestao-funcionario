import { Component, OnInit } from '@angular/core';

import { UteisShared } from 'src/app/shared/uteis.shared';
import { CargoService } from 'src/app/services/cargo.service';
import { Cargo } from './../../model/cargo';

import { ConfirmationService } from 'primeng/api';
import { ObjectUtils } from 'primeng/components/utils/objectutils';


@Component({
  selector: 'app-cargo-lista',
  templateUrl: './cargo-lista.component.html',
  styleUrls: ['./cargo-lista.component.css']
})
export class CargoListaComponent implements OnInit {


  cols: any[];

  cargos: Cargo[];

  cargoSelecionado: Cargo;

  botoesDesabilitado: boolean = true;

  constructor(
    private global: UteisShared,
    private cargoService: CargoService,
    private confirmationService: ConfirmationService,
    private objectUtils: ObjectUtils) { }

  ngOnInit() {

    /* chamo o metodo ao carregar a pagina*/
    this.getCargos();

    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'nome', header: 'Cargo' },
      { field: 'departamento.nome', header: 'Departamento' }

    ];

  }

  /* Metodo Para Resolver a Questão  dos campos com vinculações a outros objetos*/
  resolveFieldData(data, field) {
    return this.objectUtils.resolveFieldData(data, field);
  }


  /* buscar Todos*/
  getCargos() {
    this.cargoService.getCargos().subscribe(
      lista => {
        this.cargos = lista;
      }, error => {
        this.global.getMessage(this.global.error, 'Error ao Carregar Dados', error)
      });
  }

  /* buscar por id*/
  getCargoID() {
    return this.cargoSelecionado == null ? null : this.cargoSelecionado.id;
   
  }

  /* Excluir*/
  excluir() {
    this.confirmationService.confirm({
      message: 'Desejas realmente excluir este registro?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',

      accept: () => {
        this.cargoService.excluir(this.cargoSelecionado.id).subscribe(x => {
          this.getCargos(); // atualiza a lista apos a exluisão
          this.botoesDesabilitado = true;
          this.global.getMessage(this.global.info, 'Job post successfully deleted!', '');
        }, error => {
          this.global.getMessage(this.global.error, 'Error deleting data!', '');
        });
      },
      reject: () => {

      }
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
