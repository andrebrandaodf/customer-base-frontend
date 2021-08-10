import { Address } from './address.model';
export interface Client {
  id?: number;
  name: string;
  cpf: string;
  address: Address;
  phone: string;
  email: string;
}
