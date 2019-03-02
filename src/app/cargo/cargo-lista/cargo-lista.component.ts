import { Cargo } from './../../model/cargo';
import { Component, OnInit } from '@angular/core';
import { UteisShared } from 'src/app/shared/uteis.shared';
import { CargoService } from 'src/app/services/cargo.service';

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
    private cargoService: CargoService) { }

  ngOnInit() {

    /* chamo o metodo ao carregar a pagina*/
    this.getCargos();

    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'nome', header: 'Cargo' },
      { field: 'departamento.nome', header: 'Departamento' }


    ];

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
