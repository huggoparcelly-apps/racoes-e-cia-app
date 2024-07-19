import axios from 'axios';

const BASE_URL = 'http://localhost:3001/products';

export const getAllProducts = async () => {

  try {
    const { data } = await axios.get(BASE_URL, {
      headers: {

      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getProductById = async (id: number) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${id}`, {
      headers: {

      },
    });

    return data;
  } catch (error) {
    console.log(error);
    
  }
}