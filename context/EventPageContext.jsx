import { createContext, useState } from "react";
import { uploadSignleImage } from "../src/utils/reuseableFunctions.js";

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
  status: 0,
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
    {
      image: null,
      fullName: "",
      designation: "",
      introduction: "",
    },
    {
      image: null,
      fullName: "",
      designation: "",
      introduction: "",
    },
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
  const [createEventFormData, setCreateEventFormData] = useState({
    ...payload,
  });
  const handleEventInputfiledsChanges = async (evt) => {
    const { name, type, value, files } = evt.target;
    if (type === "file" && files && files[0]) {
      let uploadedImageUrl = await uploadSignleImage(files);
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
    console.log(createEventFormData);
  };

  const handleForecastingInputs = async (evt, i) => {
    const { name, value, files } = evt.target;
    if (files && files[0]) {
      let uploadedImageUrl = await uploadSignleImage(files);
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
      let uploadedImageUrl = await uploadSignleImage(files);
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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(createEventFormData);
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
