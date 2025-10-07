import { createContext, useState } from "react";
import { uploadSingleImage } from "../src/utils/reuseableFunctions";

const payload = {
  title: "",
  date: "",
  type: "",
  duration: "",
  sectionTwoDetails: "",
  sectionOneStatus : "",
  sectionOneImage : "",
  aboutViscadia: "",
  links : [{name: "", link: ""},{name: "", link: ""},{name: "", link: ""},],
  status: "draft",
};

export const NewsAndPressContext = createContext({});
export const NewsAndPressContextProvider = ({ children }) => {
  const [createPaperAndPressData, setCreatePaperAndPressData] = useState({
    ...payload,
  });

  const handlePaperAndPressInputs = async (evt) => {
    const { name, value, files, type } = evt.target;
    if (type === "file" && files && files[0]) {
      const url = await uploadSingleImage(files);
      setCreatePaperAndPressData((prev) => ({ ...prev, [name]: url }));
    } else {
      setCreatePaperAndPressData((prev) => ({ ...prev, [name]: value }));
    }
  };
  return (
    <NewsAndPressContext.Provider
      value={{
        createPaperAndPressData,
        handlePaperAndPressInputs,
        setCreatePaperAndPressData
      }}
    >
      {children}
    </NewsAndPressContext.Provider>
  );
};
