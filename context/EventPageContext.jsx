import { createContext, useState } from "react";

let payload = {
  logo: "",
  title: "",
  date: "",
  location: "",
  image: null,
  headingImage: null,
  heading: "",
  subHeading: "",
  speakerTopic: "",
  speakerTime: "",
  speakerDate: "",
  speakerStatus: false,
  status : 0,
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
  const [createEventFormData, setCreateEventFormData] = useState({...payload});
  const handleEventInputfiledsChanges = (evt) => {
    const { name, type, value, files } = evt.target;
    if (type === "file" && files && files[0]) {
      setCreateEventFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setCreateEventFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleForecastingInputs = (evt, i) => {
    const { name, type, value, files } = evt.target;
    setCreateEventFormData((prev) => {
      const updatedData = [...prev.forecastingSpecialists];
      updatedData[i] = {
        ...updatedData[i],
        [name]: type === "file" && files && files[0] ? files[0] : value,
      };
      return { ...prev, forecastingSpecialists: updatedData };
    });
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

  const addNewSpeaker = ()=>{
    setCreateEventFormData((prev)=>{
      let speakers = createEventFormData?.speaker
      speakers = [...speakers, {name: "", designation: "", img: null,},]
      return {...prev, speaker : speakers}
    })
    
  }

  const handleSpeakersInputsChanges = (evt, i) => {
  const { name, type, files, value } = evt.target;
  
  setCreateEventFormData((prev) => {
    let updatedSpeakers = [...prev.speaker];
    updatedSpeakers[i] = {
      ...updatedSpeakers[i],
      [name]: type === 'file' && files && files[0] ? files[0] : value
    };
    return { ...prev, speaker: updatedSpeakers };
  });
  };

  const handleSubmit = (evt)=> {
  evt.preventDefault()
  console.log(createEventFormData);
  }

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
        handleSubmit
      }}
    >
      {children}
    </EventPageContext.Provider>
  );
};
