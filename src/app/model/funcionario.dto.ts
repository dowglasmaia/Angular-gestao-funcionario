import { Cidade } from './cidade';
import { Cargo } from './cargo';
import { Estado } from './estatdo';

export class Funcionario {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    dataAdmissao: Date;
    dataDemissao: Date;
    salario: number;
    logradouro: string;
    numero: string;
    bairro: string;
    cep: string;
    complemento: string;
    cidade: Cidade;
    cargo: Cargo;
    estado: Estado;

}
