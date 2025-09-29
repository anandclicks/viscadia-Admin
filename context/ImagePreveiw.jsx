import { createContext, useState } from "react";
export const ImagePreviewContext = createContext({});

export const ImagePreviewContextProvider = ({ children }) => {
  const [previewImages, setPreviewImages] = useState({});

  const handlePreviewImage = (file, code) => {
    const blobUrl = URL.createObjectURL(file);
    setPreviewImages((prev) => ({
      ...prev,
      [code]: blobUrl,
    }));
  };

  return (
    <ImagePreviewContext.Provider value={{ previewImages, handlePreviewImage }}>
      {children}
    </ImagePreviewContext.Provider>
  );
};
