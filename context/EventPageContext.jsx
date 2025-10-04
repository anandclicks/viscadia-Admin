import { createContext, useEffect, useState } from "react";
import { createEventApiCall, putCommonApiForEvnts, sligGenerator, uploadSingleImage } from "../src/utils/reuseableFunctions.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

let payload = {
  logo: "", 
  title: "",
  date: "",
  location: "",
  image: "",
  headingImage: "",
  heading: "",
  subHeading: "",
  speakerTopic: "",
  speakerTime: "",
  speakerDate: "",
  sectionTwoStatus: 1,
  sectionThreeStatus: 1,
  sectionFourStatus: 1,
  status: "draft",
  speaker: [
    {
      fullName: "",
      designation: "",
      image: null,
    },
  ],
  description: "",
  forecastingSpecialists: [
    {
      image: null,
      fullName: "",
      designation: "",
      introduction: "",
    },
  ],
};

export const EventPageContext = createContext({});
export const EventPageContextProvider = ({ children }) => {
  let navigate = useNavigate()
  const [createEventFormData, setCreateEventFormData] = useState({...payload});

  const handleEventInputfiledsChanges = async (evt) => {
    const { name, type, value, files } = evt.target;
    if (type === "file" && files && files[0]) {
      let uploadedImageUrl = await uploadSingleImage(files);
      setCreateEventFormData((prev) => ({
        ...prev,
        [name]: uploadedImageUrl,
      }));
    } else {
      setCreateEventFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleForecastingInputs = async (evt, i) => {
    const { name, value, files } = evt.target;
    if (files && files[0]) {
      let uploadedImageUrl = await uploadSingleImage(files);
      setCreateEventFormData((prev) => {
        const updatedData = [...prev.forecastingSpecialists];
        updatedData[i] = {
          ...updatedData[i],
          [name]: uploadedImageUrl,
        };
        return { ...prev, forecastingSpecialists: updatedData };
      });
    } else {
      setCreateEventFormData((prev) => {
        const updatedData = [...prev.forecastingSpecialists];
        updatedData[i] = {
          ...updatedData[i],
          [name]: value,
        };
        return { ...prev, forecastingSpecialists: updatedData };
      });
    }
  };

  const addNewForcastingSection = () => {
    setCreateEventFormData((prev) => {
      let forecastingArray = [...prev?.forecastingSpecialists];
      forecastingArray = [
        ...forecastingArray,
        { image: "", fullName: "", designation: "", introduction: "" },
      ];
      return { ...prev, forecastingSpecialists: forecastingArray };
    });
  };

  const addNewSpeaker = () => {
    setCreateEventFormData((prev) => {
      let speakers = createEventFormData?.speaker;
      speakers = [...speakers, { name: "", designation: "", img: null }];
      return { ...prev, speaker: speakers };
    });
  };
  
  const handleSpeakersInputsChanges = async (evt, i) => {
    const { name, files, value } = evt.target;
    if (files && files[0]) {
      let uploadedImageUrl = await uploadSingleImage(files);
      setCreateEventFormData((prev) => {
        let updatedSpeakers = [...prev.speaker];
        updatedSpeakers[i] = {
          ...updatedSpeakers[i],
          [name]: uploadedImageUrl,
        };
        return { ...prev, speaker: updatedSpeakers };
      });
    } else {
      setCreateEventFormData((prev) => {
        let updatedSpeakers = [...prev.speaker];
        updatedSpeakers[i] = {
          ...updatedSpeakers[i],
          [name]: value,
        };
        return { ...prev, speaker: updatedSpeakers };
      });
    }
  };

  const handleSubmit = async(evt,type,id) => {
    evt.preventDefault();
   if(type){
    let t = toast.loading("Updating!")
    let finalData = {...createEventFormData, slug : sligGenerator(createEventFormData?.title)}
    let res = await putCommonApiForEvnts(`/events/${id}`,finalData)
    if(res.success){
      toast.dismiss(t)
      toast.success(res.message || "Updated successsfuly!")
      setTimeout(() => {
      navigate("/events-and-webinars")
      setCreateEventFormData({...payload})
    }, 500);
    }else {
      toast.error("couldn't Update!")
    }
   }else {
    let res = await createEventApiCall(finalData)
   if(res.success){
    setTimeout(() => {
      navigate("/events-and-webinars")
      setCreateEventFormData({...payload})
    }, 500);
   }
   }
  };

  
  return (
    <EventPageContext.Provider
      value={{
        setCreateEventFormData,
        createEventFormData,
        handleEventInputfiledsChanges,
        handleForecastingInputs,
        addNewForcastingSection,
        addNewSpeaker,
        handleSpeakersInputsChanges,
        handleSubmit,
      }}
    >
      {children}
    </EventPageContext.Provider>
  );
};
