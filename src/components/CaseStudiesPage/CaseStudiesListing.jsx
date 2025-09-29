import React, { useEffect, useState } from "react";
import CaseStudyAndWhitePaperCard from "../common/CaseStudyAndWhitePaperCard";
import { commonGetApiCall } from "../../utils/reuseableFunctions";

const CaseStudiesListing = () => {
  const [openCardId, setOpenCardId] = useState(null);
  const [allCaseStudies,setAllCaseStudies] = useState([{}])
  useEffect(()=>{
    const getAllData = async()=>{
      let res = await commonGetApiCall('/webinar')
      console.log(res);
      setAllCaseStudies([...res?.webinars])
    }
    getAllData()
  },[])
  const handleToggle = (id) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };
  return (
    <div className="mt-5">
      {allCaseStudies?.map((data, index) => (
        <CaseStudyAndWhitePaperCard
          key={index}
          id={index}
          data={data}
          isOpen={openCardId === index}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default CaseStudiesListing;
