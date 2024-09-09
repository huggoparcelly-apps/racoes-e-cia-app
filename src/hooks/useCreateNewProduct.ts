import useProductStore from "@/app/stores/productStore";
import { Product } from "@/app/types/Product";
import { createNewProduct } from "@/services/apis/apiProducts";
import { storage } from "@/services/firebase/firebaseConfig";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useState } from "react";
import useShowToast from "./useShowToast";

const useCreateNewProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const createProduct = useProductStore((state) => state.createProduct);
  const showToast = useShowToast();

  const handleCreateProduct = async (selectedFile: string | ArrayBuffer | null, product: Product) => {
    if (!product.name || !product.price || !product.quantity) {
      return showToast("Error", "Please fill all the fields", "error");
    }

    if (isLoading) return;
    if (!selectedFile) return showToast("Error", "Please select an image", "error");
    setIsLoading(true);
		
    try {
      const newImageId = Date.now();
      const imageRef = ref(storage, `productsImg/${newImageId}`);
      await uploadString(imageRef, selectedFile.toString(), "data_url");
      const downloadURL = await getDownloadURL(imageRef);
			
      const newProduct: Product = {
        name: product.name,
        description: product.description,
        category: product.category,
        price: product.price,
        quantity: product.quantity,
        image: downloadURL
      };
			
      await createNewProduct(newProduct).then((response) => {
        if (response.data) {
          createProduct({ ...newProduct, id: response.data.id });
          showToast("Success", response.data.message, "success");
        }
      });
    } catch (error: any) {
      showToast("Error", error.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleCreateProduct };
};

export default useCreateNewProduct;
