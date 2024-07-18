import axios from 'axios';

export const getAllProducts = async () => {
  console.log(process.env.BASE_API_URL);
  
  const BASE_URL = `http://localhost:3001/products`;

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