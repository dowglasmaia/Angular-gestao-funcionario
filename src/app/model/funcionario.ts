import { Endereco } from './endereco';

export class Funcionario {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    dataAdmissao: string;
    dataDemissao: string;
    cargo?: string;
    salario: number;
    logradouro: string;
    numero: string;
    cep: string;
    bairro: string;
    complemento: string;
    endereco?: Endereco;


}
