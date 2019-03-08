import { Cidade } from './cidade';

export class Endereco {
    id: number;
    logradouro: string;
    numero: string;
    bairro: string;
    cep: string;
    complemento?: string;
    cidade: Cidade;
}
