import { createContext, useState } from "react";

const payload = {
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
  speakerStatus : false,
  speaker: [
    {
      name: "",
      designation: "",
      img: null,
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
  const [createEventFormData, setCreateEventFormData] = useState({ ...payload });

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

  return (
    <EventPageContext.Provider
      value={{ setCreateEventFormData, createEventFormData, handleEventInputfiledsChanges }}
    >
      {children}
    </EventPageContext.Provider>
  );
};
