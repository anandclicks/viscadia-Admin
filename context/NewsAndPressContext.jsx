import { createContext, useEffect, useState } from "react";
import { postCommonApi, putCommonApiForEvnts, uploadSingleImage } from "../src/utils/reuseableFunctions";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const payload = {
  title: "",
  date: "",
  type: "",
  duration: "",
  sectionOneStatus : "",
  sectionOneImage : "",
  sectionTwoDetails: "",
  aboutViscadia: "",
  sectionThreeDetails : "",
  links : [{name: "", link: ""},{name: "", link: ""},{name: "", link: ""},],
  status: "draft",
  infoEmail : "",
};

export const NewsAndPressContext = createContext({});

export const NewsAndPressContextProvider = ({ children }) => {
  const [createPaperAndPressData, setCreatePaperAndPressData] = useState({
    ...payload,
  });
  const navigate = useNavigate()

  const handlePaperAndPressInputs = async (evt) => {
    const { name, value, files, type } = evt.target;

    if (type === "file" && files && files[0]) {
      const url = await uploadSingleImage(files);
      setCreatePaperAndPressData((prev) => ({ ...prev, [name]: url }));
    } else {
      setCreatePaperAndPressData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleLinkChange = ({ index, key, value }) => {
    setCreatePaperAndPressData((prev) => {
      const updatedLinks = [...prev.links];
      updatedLinks[index] = {
        ...updatedLinks[index],
        [key]: value,
      };
      return { ...prev, links: updatedLinks };
    });
  };

  const handleSubmit = async (evt, type, id) => {
    evt.preventDefault();
    if (type) {
      let t = toast.loading("Updating!");
      let res = await putCommonApiForEvnts(
        `/article/${id}`,
        createPaperAndPressData
      );
      if (res.success) {
        toast.dismiss(t);
        toast.success(res.message || "Updated successsfuly!");
        setTimeout(() => {
          navigate("/news-and-press-releases");
          setCreatePaperAndPressData({ ...payload });
        }, 500);
      } else {
        toast.error("couldn't Update!");
      }
    } else {
      let res = await postCommonApi(`article`,createPaperAndPressData);
      if (res.success) {
        setTimeout(() => {
          navigate("/news-and-press-releases");
          setCreatePaperAndPressData({ ...payload });
        }, 500);
      }
    }
  };
  return (
    <NewsAndPressContext.Provider
      value={{
        createPaperAndPressData,
        setCreatePaperAndPressData,
        handlePaperAndPressInputs,
        handleLinkChange,
        handleSubmit
      }}
    >
      {children}
    </NewsAndPressContext.Provider>
  );
};
