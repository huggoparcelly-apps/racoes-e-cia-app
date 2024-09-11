import { Product } from "@/app/types/Product";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;
const BASE_URL = `${API_URL}/products`;

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get(BASE_URL, {
      headers: {},
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
      "Falha ao buscar produtos. Por favor, tente novamente mais tarde."
    );
  }
};

export const getProductById = async (id: number) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${id}`, {
      headers: {},
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
      "Falha ao buscar o produto. Por favor, tente novamente mais tarde."
    );
  }
};

export const createNewProduct = async (product: Product) => {
  try {
    const { data } = await axios.post(BASE_URL, product, {
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

    // throw new Error(
    //   "Falha ao cadastrar o produto. Por favor, tente novamente mais tarde."
    // );
  }

}
