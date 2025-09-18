import { createContext } from "react";
const payload = {
  urlTitle: "",
  img: "",
  title: "",
  texts: [],
  mainSubtitle: "",
  challenges: [ {img: "", title: "", texts: []} ],
  approach: [ {title: "", texts: []} ],
  outcomes: [ {img: "", title: "", texts: []} ],
  pdf: "",
  status : 0
}

const handleNewCaseStudyInputs = (evt)=>{
    const {name,files,value,type} = evt.target
}

export const NewCaseStudyContext = createContext({})
export const NewCaseStudyContextProvider = ({children})=>{
    return (
        <NewCaseStudyContext.Provider value={{}}>
            {children}
        </NewCaseStudyContext.Provider>
    ) 
}
