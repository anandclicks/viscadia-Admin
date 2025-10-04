import { createContext, useEffect, useState } from "react";
import {
  postCommonApi,
  putCommonApiForEvnts,
  uploadSingleImage,
} from "../src/utils/reuseableFunctions";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const payload = {
  heading: "",
  subHeading: "",
  sectionOneStatus: true,
  country: "",
  sectionTwoSubHeading: "",
  sectionTwoStatus: true,
  responsibilities: [{ subHeading: "", keyPoints: [""] }],
  responsibilitiesStatus: true,
  qualifications: [{ subHeading: "", keyPoints: [""] }],
  qualificationsStatus: true,
  keySkills: [{ subHeading: "", keyPoints: [""] }],
  keySkillsStatus: true,
  slug: "",
  status: "draft",
};

export const CareersContext = createContext({});
export const CareersContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [createCareerData, setCareerData] = useState({ ...payload });
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
        i === index
          ? { ...item, keyPoints: [...(item.keyPoints || []), ""] }
          : item
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
              keyPoints: item.keyPoints.map((t, j) =>
                j === textIndex ? value : t
              ),
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
    arr = [...arr, { subHeading: "", keyPoints: [""] }];
    setCareerData((prev) => ({ ...prev, [keyName]: arr }));
  };

  const functionForToggleStatus = (keyname) => {
    setCareerData((prev) => ({ ...prev, [keyname]: !prev[keyname] }));
  };

  const handleSubmit = async (evt, type, id) => {
    evt.preventDefault();
    let t = toast.loading("Creating career!");
    let res = null;
    if (type) {
      res = await putCommonApiForEvnts(`/career/${id}`, createCareerData);
    } else {
      res = await postCommonApi(`career`, createCareerData);
    }
    if (res.success) {
      toast.dismiss(t);
      toast.success(res.message || "Updated successsfuly!");
      setTimeout(() => {
        navigate("/careers");
        setCareerData({ ...payload });
      }, 500);
    } else {
      toast.error("couldn't Update!");
    }
  };

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
        functionForToggleStatus,
        handleSubmit,
      }}
    >
      {children}
    </CareersContext.Provider>
  );
};
