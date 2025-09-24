import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { uploadSingleImage } from "../src/utils/reuseableFunctions";
const payload = {
  urlTitle: "",
  bannerImg: "",
  img: "",
  title: "",
  texts: [""],
  mainSubtitle: "",
  challenges: [...Array(3).fill({ img: "", title: "", texts: [""] })],
  approach: [{ title: "", texts: [] }],
  outcomes: [...Array(3).fill({ img: "", title: "", texts: [""] })],
  pdf: "",
  status: 0,
};

export const NewCaseStudyContext = createContext({});
export const NewCaseStudyContextProvider = ({ children }) => {
  const [createCaseStudyData, setCreateStudyData] = useState({ ...payload });

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
    let UpdatedKeyPoints = createCaseStudyData?.texts
    UpdatedKeyPoints[index] = evt.target.value
    setCreateStudyData((prev) => ({ ...prev, texts: UpdatedKeyPoints }))
  }

  const addObjsInSections = (name) => {
    let arr = createCaseStudyData[name]
    arr = [...arr, { img: "", title: "", texts: [] }]
    setCreateStudyData((prev) => ({ ...prev, [name]: arr }))
    console.log(createCaseStudyData);
  }

  const addObjsInSectionsTwo = () => {
    let arr = createCaseStudyData?.approach
    arr = [...arr, { title: "", texts: [] }]
    setCreateStudyData((prev) => ({ ...prev, approach: arr }))
  }

  const handleObjInpusChanges = async (evt, arrName, index) => {
    const { type, name, value, files } = evt.target
    if (type === "file" && files && files[0]) {
      // const url = await uploadSingleImage(files)
      if (true) {
        setCreateStudyData((prev) => {
          let arr = [...createCaseStudyData[arrName]]
          arr[index] = {...arr[index],[name] : "tasting"}
          return {...prev,[arrName] : arr}
        })
      }
    }else {
      setCreateStudyData((prev)=>{
        let arr = createCaseStudyData[arrName]
        arr[index] = {...arr[index],[name] : value}
        return {...prev,[arrName] :arr }
      })
    }
  }




  useEffect(() => {
    console.log(createCaseStudyData);
  }, [createCaseStudyData])
  return (
    <NewCaseStudyContext.Provider value={{
      handleNewCaseStudyInputs,
      createCaseStudyData,
      handleKeyPointsChange,
      functionForAddingPoints,
      addObjsInSections,
      addObjsInSectionsTwo,
      handleObjInpusChanges,
    }}>
      {children}
    </NewCaseStudyContext.Provider>
  );
};
