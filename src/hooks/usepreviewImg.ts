import { useState } from "react";

const usePreviewImg = () => {
  const [selectedFile, setSelectedFile] = useState<string | ArrayBuffer | null>(null);
  const maxFIleSizeInBytes = 6 * 1024 * 1024; // 6MB

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && file.type.startsWith("image/")) {
      if (file.size > maxFIleSizeInBytes) {
        setSelectedFile(null);
        throw new Error("File size must be less than 6MB");
        return;
      }

      const reader = new FileReader();

      reader.onload = () => {
        setSelectedFile(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      throw new Error("Please select an image file");
      setSelectedFile(null);
    }
  };

  return { selectedFile, handleImageChange, setSelectedFile };
};

export default usePreviewImg;
