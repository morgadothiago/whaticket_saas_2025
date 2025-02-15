import type { BusinessType } from "./BussinessType";

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export interface User {

  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  telefone: string | null; // Telefone pode ser uma string ou null
  cpf: string;
  dataNascimento: string | null; // Data no formato ISO 8601 ou null
  role: Role; // Assumindo que o role pode ser apenas "USER" ou "ADMIN"
  empresaId: number;
  createdAt: string; // Data no formato ISO 8601
  updatedAt: string; // Data no formato ISO 8601
  Empresa: BusinessType; // Relacionamento com a

}
