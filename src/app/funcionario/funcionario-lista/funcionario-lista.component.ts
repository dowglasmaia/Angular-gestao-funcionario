import { FuncionarioService } from './../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/model/funcionario.dto';
import { UteisShared } from 'src/app/shared/uteis.shared';
import { ConfirmationService } from 'primeng/api';
import { ObjectUtils } from 'primeng/components/utils/objectutils';

@Component({
  selector: 'app-funcionario-lista',
  templateUrl: './funcionario-lista.component.html',
  styleUrls: ['./funcionario-lista.component.css']
})
export class FuncionarioListaComponent implements OnInit {

  cols: any[];

  funcionarios: Funcionario[];

  funcionarioSelecionado: Funcionario;

  botoesDesabilitado: boolean = true;

  constructor(
    private global: UteisShared,
    private funcionarioService: FuncionarioService,
    private objectUtils: ObjectUtils,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {

    /* chamo o metodo ao carregar a pagina*/
    this.getFuncionarios();

    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'nome', header: 'Funcionario' },
      { field: 'email', header: 'e-Mail' },
      { field: 'telefone', header: 'Telefone' },
      { field: 'dataAdmissao', header: 'Data de Entrada' },
      { field: 'dataDemissao', header: 'Data de Saída' },      
      { field: 'salario', header: 'Salario' },
      { field: 'logradouro', header: 'Logradouro' },
      { field: 'cep', header: 'Cep' },
      { field: 'cargo.nome', header: 'Cargo' },
      { field: 'cidade.nome', header: 'Cidade' },
      { field: 'estado.nome', header: 'UF' },


    ];
  }
  /* Metodo Para Resolver a Questão  dos campos com vinculações a outros objetos*/
  resolveFieldData(data, field) {
    return this.objectUtils.resolveFieldData(data, field);
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
      return this.funcionarioSelecionado == null ? null : this.funcionarioSelecionado.id;
      console.log(this.funcionarioSelecionado);

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
      this.funcionarioService.excluir(this.funcionarioSelecionado.id).subscribe(x => {
        this.getFuncionarios(); // atualiza a lista apos a exluisão
        this.botoesDesabilitado = true;
        this.global.getMessage(this.global.info, 'Funcionario Excluido com Sucesso!', '');
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