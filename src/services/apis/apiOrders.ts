
import { Order } from "@/app/types/Order";
import axios from "axios";
import { getStripeConfig } from "../stripe/stripeConfig";

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

    throw new Error(
      "Falha ao criar um pedido. Por favor, tente novamente mais tarde."
    );
  }
}

export const getAllOrders = async (token: string | null) => {
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
      "Falha ao buscar pedidos. Por favor, tente novamente mais tarde."
    );
  }
};

export const getAllAdminOrders = async (token: string | null) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/admin`, {
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
      "Falha ao buscar pedidos. Por favor, tente novamente mais tarde."
    );
  }
};

export const getOrderById = async (token: string | null, orderId: number) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${orderId}`, {
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
      "Falha ao buscar pedidos. Por favor, tente novamente mais tarde."
    );
  }
};

export const createStripeOrder = async (order: Order, token: string | null) => {
  try {

    const { data } = await axios.post(`${API_URL}/api/checkout_sessions`, order, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    
    // Redireciona o usuário para o Stripe Checkout
    const stripe = await getStripeConfig();

    const { error } = await stripe!.redirectToCheckout({
      sessionId: data.id,
    });
    
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error(`Erro de rede: ${error.message}`);
      console.error(`Status: ${error.response?.statusText}`);
      console.error(`Dados de erro: ${JSON.stringify(error.response?.data)}`);
    } else {
      console.error(`Erro inesperado: ${error.message}`);
    }

    throw new Error(
      "Falha ao criar um pedido. Por favor, tente novamente mais tarde."
    );
  }
}