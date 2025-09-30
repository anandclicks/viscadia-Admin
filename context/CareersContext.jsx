import { createContext, useContext } from "react";
import { uploadSingleImage } from "../src/utils/reuseableFunctions";



const payload = {
  heading: "",
  subHeading: "",
  sectionOneStatus: 1,
  country: "",
  sectionTwoSubHeading: "",
  sectionTwoStatus: 1,
  responsibilities: [{ subHeading: "", keyPoints: [""], status: 1 }],
  quilifications: [{ keyPoints: [""], status: 1 }],
  keySkills: [{ subHeading: "", keyPoints: [""], status: 1 }],
};

export const CareersContext = createContext({...payload});
export const CareersContextProvider = ({ children }) => {
  const [createCareerData, setCareerData] = useContext({});

  const handleCareersInpust = async(evt)=>{
    const {name,files,value,type} = evt.target
    if(type === "file" && files && files[0]){
      const url = await uploadSingleImage(files)
      if(url){
        setCareerData((prev)=> ({...prev,[name] :url}))
      }
    }else {
      setCareerData((prev)=> ({...prev,[name] : value}))
    }
  }
  return (
      <CareersContext.Provider value={{
        createCareerData,
        setCareerData,
        handleCareersInpust
      }}>
        {children}
        </CareersContext.Provider>
  );
};
