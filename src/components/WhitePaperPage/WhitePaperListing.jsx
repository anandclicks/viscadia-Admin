import React, { useEffect, useState } from "react";
import CaseStudyAndWhitePaperCard from "../common/CaseStudyCard";
import WhitePaperCard from "../common/WhitePaperCard";
import { commonGetApiCall } from "../../utils/reuseableFunctions";
import { data } from "react-router-dom";

const WhitePaperListing = () => {
  const [openCardId, setOpenCardId] = useState(null);
 const [allWhitePaper,setAllWhitePaper] = useState(null)

  const handleToggle = (id) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };
  useEffect(()=>{
      const getAllData = async()=>{
        let res = await commonGetApiCall('/whitepaper')
        if(res.success){
          setAllWhitePaper([...res?.data])
        }
        else{
          toast.error(data?.message || "Unable to load White Paper. Please try again.");
        }
      }
      getAllData()
    },[])

  
  return (
    <div className="mt-5">
      {allWhitePaper?.map((data, index) => (
        <WhitePaperCard
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

export default WhitePaperListing;
