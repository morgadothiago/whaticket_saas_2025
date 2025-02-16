import axios, { type AxiosError, type AxiosInstance, type AxiosResponse } from 'axios';
import type { SigninTypes } from '../types/SigninTypes';


interface IErrorResponse {
  message: string;
  status: number;
}


class ApiService {
  private api: AxiosInstance;
  static instance: ApiService;

  constructor() {
    this.api = axios.create({
      baseURL: "https://whatsapp-atendimento.onrender.com/",
    });
    console.log(process.env.API_HOST)
  }

  async login(email: string, senha: string) {
    const response = await this.api.post('auth/login', { email, senha })
      .then(this.getResponse<SigninTypes>)
      .catch(this.getError);

    return response;
  }

  private async getResponse<T>(response: AxiosResponse<T>) {
    return response.data;
  }

  private async getError(error: AxiosError<any>): Promise<IErrorResponse> {
    if (error.status === 401) {

      console.error(error.status)

      return {
        message: 'Credenciais inválidas',
        status: error.status,
      };
    }
    if (error.status === 422) {

      return {
        message: error.response?.data?.message,
        status: error.status,
      };

    }
    if (error.status === 404) {
      return {
        message: error.response?.data?.message,
        status: error.status,
      };
    }
    return {
      message: 'Error interno do servidor',
      status: error.status || 500,
    };
  }
  static getInstance() {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }
}
export default ApiService.getInstance();