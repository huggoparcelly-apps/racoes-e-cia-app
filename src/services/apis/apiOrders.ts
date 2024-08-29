
import { Order } from "@/app/types/Order";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const BASE_URL = `${API_URL}/orders`;

export const createNewOrder = async (order: Order, token: string | null) => {
  
  try {
    const { data } = await axios.post(BASE_URL, order, {
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

    // throw new Error(
    //   "Falha ao cadastrar o pedido. Por favor, tente novamente mais tarde."
    // );
  }
}