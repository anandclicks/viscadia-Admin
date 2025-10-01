import { createContext, useEffect, useState } from "react";
import { uploadSingleImage } from "../src/utils/reuseableFunctions";

const payload = {
  heading: "",
  subHeading: "",
  sectionOneStatus: 1,
  country: "",
  sectionTwoSubHeading: "",
  sectionTwoStatus: 1,
  responsibilities: [{ subHeading: "", keyPoints: [""]}],
  responsibilitiesStatus : 1,
  quilifications: [{subHeading : "", keyPoints: [""]}],
  quilificationsStatus : 1,
  keySkills: [{ subHeading: "", keyPoints: [""]}],
  keySkillsStatus :1
};

export const CareersContext = createContext({});
export const CareersContextProvider = ({ children }) => {
  const [createCareerData, setCareerData] = useState({...payload});

  const handleCareersInpust = async (evt) => {
    const { name, files, value, type } = evt.target;
    if (type === "file" && files && files[0]) {
      const url = await uploadSingleImage(files);
      if (url) {
        setCareerData((prev) => ({ ...prev, [name]: url }));
      }
    } else {
      setCareerData((prev) => ({ ...prev, [name]: value }));
    }
  };

   const addKeyPointsInArray = (keyName, index) => {
    setCareerData((prev) => ({
      ...prev,
      [keyName]: prev[keyName].map((item, i) =>
        i === index ? { ...item, keyPoints: [...(item.keyPoints || []), ""] } : item
      ),
    }));
  };

   const handleTextsChange = (e, keyName, objIndex, textIndex) => {
    const { value } = e.target;
    setCareerData((prev) => ({
      ...prev,
      [keyName]: prev[keyName].map((item, i) =>
        i === objIndex
          ? {
              ...item,
              keyPoints: item.keyPoints.map((t, j) => (j === textIndex ? value : t)),
            }
          : item
      ),
    }));
  };

   const handleObjInpusChanges = async (evt, arrName, index) => {
    const { type, name, value, files } = evt.target;
    if (type === "file" && files && files[0]) {
      const url = await uploadSingleImage(files);
      if (url) {
        setCareerData((prev) => {
          let arr = [...createCareerData[arrName]];
          arr[index] = { ...arr[index], [name]: url };
          return { ...prev, [arrName]: arr };
        });
      }
    } else {
      setCareerData((prev) => {
        let arr = createCareerData[arrName];
        arr[index] = { ...arr[index], [name]: value };
        return { ...prev, [arrName]: arr };
      });
    }
  };

 const addObjsInSectionsTwo = (keyName) => {
    let arr = [...createCareerData[keyName]];
    arr = [...arr, { subHeading: "", keyPoints: [""]}];
    setCareerData((prev) => ({ ...prev, [keyName]: arr }));
  };

  const functionForToggleStatus = (keyname)=>{
    setCareerData((prev)=> ({...prev,[keyname] : Number(!prev[keyname])}))
  }
  useEffect(()=>{
    console.log(createCareerData);
  },[createCareerData])
  return (
    <CareersContext.Provider
      value={{
        createCareerData,
        setCareerData,
        handleCareersInpust,
        addKeyPointsInArray,
        handleTextsChange,
        handleObjInpusChanges,
        addObjsInSectionsTwo,
        functionForToggleStatus
      }}
    >
      {children}
    </CareersContext.Provider>
  );
};
