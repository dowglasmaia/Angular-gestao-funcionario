import { Departamento } from './departamento';

export class Cargo {
    id: number;
    nome: string;
    departamento?: Departamento;
}
