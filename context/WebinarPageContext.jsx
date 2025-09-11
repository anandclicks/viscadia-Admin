import { createContext, useState } from "react";
let payload = {
  heading: "",
  subHeading: "",
  imageOne: null,
  imageTwo: null,
  HeadingTwo: "",
  keyPoints: [""],
  webibarVideo: null,
  speakers: [
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
  const hanldeWebinarInputsChanges = (evt) => {
    const { name, value, type, files } = evt.target;
    if (type === "file" && files && files[0]) {
      setWebinarCreateData((prev) => {
        return { ...prev, [name]: files[0] };
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
      let updatedSpeakerArr = prev.speakers
      updatedSpeakerArr = [...updatedSpeakerArr, {fullName: "",designation: "",image: null,}]
      return {...prev, speakers : updatedSpeakerArr}
    })
  }

  return (
    <>
      <WebinarContext.Provider
        value={{
          webinarCreateData,
          hanldeWebinarInputsChanges,
          functionForAddingPoints,
          functionForAddingSpeakers
        }}
      >
        {children}
      </WebinarContext.Provider>
    </>
  );
};
