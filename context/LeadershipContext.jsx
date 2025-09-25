import { createContext } from "react";
const payload = {
  heading : "",
  designation :"",
  subHeading : "",
  
}
export const LeadershipContext = createContext({});
export const LeadershipContextProvider = ({ children }) => {
  return (
    <>
      <LeadershipContext.Provider value={{}}>
        {children}
      </LeadershipContext.Provider>
    </>
  );
};
