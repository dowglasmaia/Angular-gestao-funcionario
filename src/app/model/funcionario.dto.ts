import { Estado } from './estatdo';
import { Cargo } from './cargo';
import { Cidade } from './cidade';

export class Funcionario {
    id: number;
    nome: string; 
    email:string;
    telefone:string;  
    dataAdmissao: Date;
    dataDemissao: Date;
    salario: number;
    logradouro: string;
    numero: string;
    bairro: string;
    cep: string;
    complemento?: string;
    cidade?: Cidade;
    cargo?: Cargo;
    estado?: Estado;

}
