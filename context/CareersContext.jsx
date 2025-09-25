const { createContext, useState, useContext } = require("react");

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
  return (
      <CareersContext.Provider value={{
        createCareerData,
        setCareerData
      }}>
        {children}
        </CareersContext.Provider>
  );
};
