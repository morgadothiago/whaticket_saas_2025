export interface BusinessType {
  id: number;
  codigo: string;
  nome: string;
  cnpj: string;
  status: "ATIVO" | "INATIVO"; // Assumindo que o status pode ser apenas "ATIVO" ou "INATIVO"
  sessionId: number;
  online: boolean;
  qrCode: string;
  planoId: number;
  ativo_em: string; // Data no formato ISO 8601
  ativo_ate: string; // Data no formato ISO 8601
  updatedAt: string; // Data no formato ISO 8601
  createdAt: string; // Data no formato ISO 8601
}