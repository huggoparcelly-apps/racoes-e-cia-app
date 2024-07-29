import { Product } from '@/app/types/Product';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/products';

export const getAllProducts = async () => {

  try {
    const { data } = await axios.get(BASE_URL, {
      headers: {

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

    throw new Error('Falha ao buscar produtos. Por favor, tente novamente mais tarde.');

  }
}

export const getProductById = async (id: number) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${id}`, {
      headers: {

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

    throw new Error('Falha ao buscar o produto. Por favor, tente novamente mais tarde.');

  }
}