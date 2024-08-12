import useProductStore from "@/app/stores/productStore";
import { Product } from "@/app/types/Product";
import { createNewProduct } from "@/services/apis/apiProducts";
import { storage } from "@/services/firebase/firebaseConfig";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useState } from "react";

const useCreateNewProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const createProduct = useProductStore((state) => state.createProduct);

  const handleCreateProduct = async (selectedFile: string | ArrayBuffer | null, product: Product) => {
    if (!product.name || !product.price || !product.quantity) {
      throw new Error("Please fill all the fields");
    }

    if (isLoading) return;
    if (!selectedFile) throw new Error("Please select an image");
    setIsLoading(true);

    const newProduct: Product = {
      name: product.name,
      description: product.description,
      category: product.category,
      price: product.price,
      quantity: product.quantity,
    };
		
    try {
      const newImageId = Date.now();
      const imageRef = ref(storage, `productsImg/${newImageId}`);
      await uploadString(imageRef, selectedFile.toString(), "data_url");
      const downloadURL = await getDownloadURL(imageRef);
			
      newProduct.image = downloadURL;
			
      await createNewProduct(newProduct).then((response) => {
        if (response.data) {
          createProduct({ ...newProduct, id: response.data.id });
          console.log("Success", response.data.message, "success");
        }
      });
    } catch (error: any) {
      throw new Error(`Error ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleCreateProduct };
};

export default useCreateNewProduct;
