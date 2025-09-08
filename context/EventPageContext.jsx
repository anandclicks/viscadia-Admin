import { Children, createContext, useState } from "react";
const payload = {
  logo: "",
  title: "",
  date: "",
  location: "",
  image : "",
  headingImage: "",
  heading: "",
  subHeading: "",
  speakerTopic : "",
  speakerTime : "",
  speakerDate : "",
  speaker : [
    {
        name : "",
        designation : "",
    }
  ],
  description : "",
  forecastingSpecialists : [
    {
        image : "",
        fullName : "",
        designation : "",
        introduction : ""
    }
  ]
};

export const EventPageContext = createContext({});
export const EventPageContextProvider = ({ children }) => {
  const [createEventFormData, setCreateEventFormData] = useState({...payload});
  const handleEventInputfiledsChanges = (evt)=>{
    const {name,value} = evt.target
    setCreateEventFormData((prev)=> ({...prev, [name] : value}))
  }
  return <EventPageContext value={{setCreateEventFormData,createEventFormData}}>{children}</EventPageContext>;
};
