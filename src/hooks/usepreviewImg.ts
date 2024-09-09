import { useState } from "react";
import useShowToast from "./useShowToast";

const usePreviewImg = () => {
  const [selectedFile, setSelectedFile] = useState<string | ArrayBuffer | null>(
    null
  );
  const maxFIleSizeInBytes = 6 * 1024 * 1024; // 6MB
  const showToast = useShowToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && file.type.startsWith("image/")) {
      if (file.size > maxFIleSizeInBytes) {
        setSelectedFile(null);
        return showToast("File size must be less than 6MB");
      }

      const reader = new FileReader();

      reader.onload = () => {
        setSelectedFile(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      return showToast("Please select an image file");
    }
  };

  return { selectedFile, handleImageChange, setSelectedFile };
};

export default usePreviewImg;
