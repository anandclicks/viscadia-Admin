import React, { useEffect, useState } from "react";
import CaseStudyAndWhitePaperCard from "../common/CaseStudyAndWhitePaperCard";
import { commonGetApiCall } from "../../utils/reuseableFunctions";
import PageBuildingLoader from '../common/PageBuildingLoader'


const CaseStudiesListing = () => {
  const [openCardId, setOpenCardId] = useState(null);
  const [allCaseStudies,setAllCaseStudies] = useState(null)
  useEffect(()=>{
    const getAllData = async()=>{
      let res = await commonGetApiCall('/casestudy')
      console.log(res);
      if(res.success){
        setAllCaseStudies([...res?.caseStudy])
      }
      else{
        toast.error(data?.message || "Unable to load Case study. Please try again.");
      }
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
      {!allCaseStudies && <PageBuildingLoader/>}
    </div>
  );
};

export default CaseStudiesListing;
