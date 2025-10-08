import React, { useEffect, useState } from "react";
import { commonGetApiCall, toCamelCase } from "../../utils/reuseableFunctions";
import PageBuildingLoader from "../common/PageBuildingLoader";
import NoDataFound from "../common/NoDataFound";
import WebinarCard from "./WebinarCard";

const WebinarPage = () => {
  const [openCardId,setOpenCardId] = useState(null);
  const [allWebinarData,setWebinarData] = useState(null);

  useEffect(()=>{
    const getData = async()=>{
      const res = await commonGetApiCall('/webinar');
      setWebinarData(toCamelCase(res?.data) || []);
    };
    getData();
  },[]);

  const handleToggle = (id)=>{ setOpenCardId(prev => prev===id?null:id); };

  return (
    <>
      {allWebinarData===null && <PageBuildingLoader/>}
      {allWebinarData?.length > 0 && <div className="mt-5">
        {allWebinarData.map((data,index)=>(
          <WebinarCard key={index} id={index} data={data} isOpen={openCardId===index} onToggle={handleToggle}/>
        ))}
      </div>}
      {allWebinarData?.length===0 && <NoDataFound message="No webinars found"/>}
    </>
  );
};

export default WebinarPage;
