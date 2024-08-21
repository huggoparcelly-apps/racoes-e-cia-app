import { Token } from "@/app/types/Token";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const BASE_URL = `${API_URL}/verifyToken`;

export const verifyToken = async (token: Token | null) => {
  try {
    const { data } = await axios.post(BASE_URL, token, {
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error(`Erro de rede: ${error.message}`);
      console.error(`Status: ${error.response?.statusText}`);
      console.error(`Dados de erro: ${JSON.stringify(error.response?.data)}`);
    } else {
      console.error(`Erro inesperado: ${error.message}`);
    }

    throw new Error(
      "Falha ao tentar login. Credenciais inválidas"
    );
  }
}