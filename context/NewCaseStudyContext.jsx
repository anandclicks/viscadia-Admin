import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { postCommonApi, putCommonApiForEvnts, uploadSingleImage } from "../src/utils/reuseableFunctions";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const payload = {
  urlTitle: "",
  bannerImg: "",
  img: "",
  title: "",
  texts: [""],
  mainSubtitle: "",
  challenges: [...Array(3).fill({ img: "", title: "", texts: [""] })],
  approach: [...Array(3).fill({ img: "", title: "", texts: [""] })],
  outcomes: [...Array(3).fill({ img: "", title: "", texts: [""] })],
  pdf: "",
  status: "draft",
};

export const NewCaseStudyContext = createContext({});
export const NewCaseStudyContextProvider = ({ children }) => {
  const [createCaseStudyData, setCreateStudyData] = useState({ ...payload });
  const navigate = useNavigate()

  const handleNewCaseStudyInputs = async (evt) => {
    const { name, files, value, type } = evt.target;
    if (type === "file" && files && files[0]) {
      let res = await uploadSingleImage(files);
      if (res) {
        setCreateStudyData((prev) => ({ ...prev, [name]: res }));
      }
    } else {
      setCreateStudyData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const functionForAddingPoints = (evt) => {
    const { value } = evt.target;
    setCreateStudyData((prev) => ({
      ...prev,
      texts: [...prev.texts, value],
    }));
  };

  const handleKeyPointsChange = (evt, index) => {
    let UpdatedKeyPoints = createCaseStudyData?.texts;
    UpdatedKeyPoints[index] = evt.target.value;
    setCreateStudyData((prev) => ({ ...prev, texts: UpdatedKeyPoints }));
  };

  const addObjsInSections = (name) => {
    let arr = createCaseStudyData[name];
    arr = [...arr, { img: "", title: "", texts: [] }];
    setCreateStudyData((prev) => ({ ...prev, [name]: arr }));
    console.log(createCaseStudyData);
  };

  const addObjsInSectionsTwo = () => {
    let arr = createCaseStudyData?.approach;
    arr = [...arr, { title: "", texts: [] }];
    setCreateStudyData((prev) => ({ ...prev, approach: arr }));
  };

  const handleObjInpusChanges = async (evt, arrName, index) => {
    const { type, name, value, files } = evt.target;
    if (type === "file" && files && files[0]) {
      const url = await uploadSingleImage(files);
      if (url) {
        setCreateStudyData((prev) => {
          let arr = [...createCaseStudyData[arrName]];
          arr[index] = { ...arr[index], [name]: url };
          return { ...prev, [arrName]: arr };
        });
      }
    } else {
      setCreateStudyData((prev) => {
        let arr = createCaseStudyData[arrName];
        arr[index] = { ...arr[index], [name]: value };
        return { ...prev, [arrName]: arr };
      });
    }
  };

  const addKeyPointsInArray = (keyName, index) => {
    setCreateStudyData((prev) => ({
      ...prev,
      [keyName]: prev[keyName].map((item, i) =>
        i === index ? { ...item, texts: [...(item.texts || []), ""] } : item
      ),
    }));
  };

  const handleTextsChange = (e, keyName, objIndex, textIndex) => {
    const { value } = e.target;
    setCreateStudyData((prev) => ({
      ...prev,
      [keyName]: prev[keyName].map((item, i) =>
        i === objIndex
          ? {
              ...item,
              texts: item.texts.map((t, j) => (j === textIndex ? value : t)),
            }
          : item
      ),
    }));
  };

const handleSubmit = async (e, type, id) => {
  e.preventDefault();

  if (type) {
    // Updating existing case study
    let t = toast.loading("Updating!");
    let res = await putCommonApiForEvnts(`/casestudy/${id}`, createCaseStudyData);

    if (res.success) {
      toast.dismiss(t);
      toast.success(res.message || "Updated successfully!");
      setTimeout(() => {
        navigate("/case-studies");
        setCreateStudyData({ ...payload });
      }, 500);
    } else {
      toast.dismiss(t);
      toast.error("Couldn't Update!");
    }
  } else {
    // Creating new case study
    let t = toast.loading("Creating!");
    let res = await postCommonApi("casestudy", createCaseStudyData, "Case study");

    if (res.success) {
      toast.dismiss(t);
      toast.success("Created Successfully!");
      setTimeout(() => {
        navigate("/case-studies");
        setCreateStudyData({ ...payload });
      }, 500);
    } else {
      toast.dismiss(t);
      toast.error("Couldn't Create!");
    }
  }
};


  return (
    <NewCaseStudyContext.Provider
      value={{
        handleNewCaseStudyInputs,
        createCaseStudyData,
        handleKeyPointsChange,
        functionForAddingPoints,
        addObjsInSections,
        addObjsInSectionsTwo,
        handleObjInpusChanges,
        addKeyPointsInArray,
        handleTextsChange,
        setCreateStudyData,
        handleSubmit
      }}
    >
      {children}
    </NewCaseStudyContext.Provider>
  );
};
