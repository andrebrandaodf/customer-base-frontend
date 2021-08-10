import { Address } from './address.model';
export interface Client {
  id?: number;
  nome: string;
  cpf: string;
  address: Address;
  telefone: string;
  email: string;
}