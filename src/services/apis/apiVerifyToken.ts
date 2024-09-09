import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const BASE_URL = `${API_URL}/verifyToken`;

export const verifyToken = async (token : string ) => {
  
  try {
    const { data } = await axios.get(BASE_URL, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
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