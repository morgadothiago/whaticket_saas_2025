export interface User {

  id: number;
  nome: string;  // Changed from fullName to nome
  sobrenome: string;  // Added sobrenome
  email: string;
  senha: string;  // Changed from password to senha and made it optional
  telefone: string;  // Added telefone
  cpf: string;  // Added cpf
  dataNascimento: string;
  role: string;
  token: string;
}
