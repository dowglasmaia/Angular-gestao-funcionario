import { FuncionarioService } from './../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/model/funcionario';
import { UteisShared } from 'src/app/shared/uteis.shared';

@Component({
  selector: 'app-funcionario-lista',
  templateUrl: './funcionario-lista.component.html',
  styleUrls: ['./funcionario-lista.component.css']
})
export class FuncionarioListaComponent implements OnInit {


  cols: any[];

  funcionarios: Funcionario[];

  departamentoSelecionado: Funcionario;

  botoesDesabilitado: boolean = true;

  constructor(
    private global: UteisShared,
    private funcionarioService: FuncionarioService) { }

  ngOnInit() {

    /* chamo o metodo ao carregar a pagina*/
    this.getFuncionarios();

    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'nome', header: 'Funcionario' },
      { field: 'email', header: 'e-Mail' },
      { field: 'telefone', header: 'Telefone' },
      { field: 'dataEntrada', header: 'Data de Entrada' },
      { field: 'dataSaida', header: 'Data de Saída' },
      { field: 'cargo', header: 'Cargo' },
      { field: 'salario', header: 'Salario' },
        

    ];
  }

  /* buscar Todos*/
  getFuncionarios() {
    this.funcionarioService.getFuncionarios().subscribe(
      lista => {
        this.funcionarios = lista;
      }, error => {
        this.global.getMessage(this.global.error, 'Error ao Carregar Dados', error)
      });
  }

  /* buscar por id*/
  getFuncionarioID() {

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