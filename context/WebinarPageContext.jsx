import { createContext, useState } from "react";
import { uploadSingleImage } from "../src/utils/reuseableFunctions";
let payload = {
  subHeading: "",
  imageOne: null,
  imageTwo: null,
  keyPoints: [""],
  webibarVideo: null,
  status : 0,
  speaker: [
    {
      fullName: "",
      designation: "",
      image: null,
    },
  ],
};
export const WebinarContext = createContext({});
export const WebinarContextProvider = ({ children }) => {
  const [webinarCreateData, setWebinarCreateData] = useState({ ...payload });
  const hanldeWebinarInputsChanges = async(evt) => {
    const { name, value, type, files } = evt.target;
    if (type === "file" && files && files[0]) {
      const imageUrl = await uploadSingleImage(files)
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

  const functionForAddingSpeakers = ()=>{
    setWebinarCreateData((prev)=> {
      let updatedSpeakerArr = prev.speaker
      updatedSpeakerArr = [...updatedSpeakerArr, {fullName: "",designation: "",image: null,}]
      return {...prev, speaker : updatedSpeakerArr}
    })
  }

  const handleKeyPointsChange = (evt,index)=>{
    let UpdatedKeyPoints = webinarCreateData?.keyPoints
    UpdatedKeyPoints[index] = evt.target.value
    setWebinarCreateData((prev)=> ({...prev,keyPoints : UpdatedKeyPoints}))
  }

const handleSpeakersChnages = async(evt, index) => {
  const { name, value, type, files } = evt.target;
  if(files && files[0]){
    const imageUrl = await uploadSingleImage(files)
     setWebinarCreateData((prev) => {
    const updatedSpeakers = [...prev.speaker];
    updatedSpeakers[index] = {
      ...updatedSpeakers[index],
      [name]: imageUrl,
    };
    return { ...prev, speaker: updatedSpeakers };
  });
  }else {
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

const handleSubmit = (evt)=>{
  console.log(webinarCreateData);
}


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
          handleSubmit
        }}
      >
        {children}
      </WebinarContext.Provider>
    </>
  );
};
