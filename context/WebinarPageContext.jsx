import { createContext, useEffect, useState } from "react";
import { postCommonApi, putCommonApiForEvnts, sligGenerator, toSnakeCase, uploadSingleImage } from "../src/utils/reuseableFunctions";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
let payload = {
  subHeading: "",
  headingOne : "",
  headingTwo : "",
  imageOne: null,
  imageTwo: null,
  keyPoints: [""],
  webibarVideo: null,
  status: "draft",
  speaker: [{
      fullName: "",
      designation: "",
      image: null,
      introduction : ""
    }
  ],
  slug : ""
};
export const WebinarContext = createContext({});
export const WebinarContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [webinarCreateData, setWebinarCreateData] = useState({ ...payload });

  const hanldeWebinarInputsChanges = async (evt) => {
    const { name, value, type, files } = evt.target;
    if (type === "file" && files && files[0]) {
      const imageUrl = await uploadSingleImage(files);
      setWebinarCreateData((prev) => {
        return { ...prev, [name]: imageUrl };
      });
    } else {
      setWebinarCreateData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const functionForAddingPoints = (evt) => {
    const { value } = evt.target;
    setWebinarCreateData((prev) => ({
      ...prev,
      keyPoints: [...prev.keyPoints, value],
    }));
  };

  const functionForAddingSpeakers = () => {
    setWebinarCreateData((prev) => {
      let updatedSpeakerArr = prev.speaker;
      updatedSpeakerArr = [
        ...updatedSpeakerArr,
        { fullName: "", designation: "", image: null, introduction : "" },
      ];
      return { ...prev, speaker: updatedSpeakerArr };
    });
  };

  const handleKeyPointsChange = (evt, index) => {
    let UpdatedKeyPoints = webinarCreateData?.keyPoints;
    UpdatedKeyPoints[index] = evt.target.value;
    setWebinarCreateData((prev) => ({ ...prev, keyPoints: UpdatedKeyPoints }));
  };

  const handleSpeakersChnages = async (evt, index) => {
    const { name, value, type, files } = evt.target;
    if (files && files[0]) {
      const imageUrl = await uploadSingleImage(files);
      setWebinarCreateData((prev) => {
        const updatedSpeakers = [...prev.speaker];
        updatedSpeakers[index] = {
          ...updatedSpeakers[index],
          [name]: imageUrl,
        };
        return { ...prev, speaker: updatedSpeakers };
      });
    } else {
      setWebinarCreateData((prev) => {
        const updatedSpeakers = [...prev.speaker];
        updatedSpeakers[index] = {
          ...updatedSpeakers[index],
          [name]: value,
        };
        return { ...prev, speaker: updatedSpeakers };
      });
    }
  };

  const handleSubmit = async(evt, type, id) => {
    evt.preventDefault();
    let res = null
    if(type){
      res = await putCommonApiForEvnts(`/webinar/${id}`, toSnakeCase(webinarCreateData))
    }else {
      res = await postCommonApi(`/webinar`, webinarCreateData)
    }
    if(res?.success){
      toast.success("Webinar Created succesfully!")
      navigate("/events-and-webinars")
    }else {
      toast.error(res?.message || "couldn't Create!")
    }
    console.log(webinarCreateData);
  };

  return (
    <>
      <WebinarContext.Provider
        value={{
          webinarCreateData,
          hanldeWebinarInputsChanges,
          functionForAddingPoints,
          functionForAddingSpeakers,
          handleKeyPointsChange,
          handleSpeakersChnages,
          handleSubmit,
          setWebinarCreateData
        }}
      >
        {children}
      </WebinarContext.Provider>
    </>
  );
};
