import React, { useEffect, useState } from "react";
import { commonGetApiCall, toCamelCase } from "../../utils/reuseableFunctions";
import PageBuildingLoader from "../common/PageBuildingLoader";
import WebinarCard from "./WebinarCard";

const WebanarPage = () => {
  const [openCardId, setOpenCardId] = useState(null);

  const handleToggle = (id) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };

  const [allWebinarData,setWebinarData] = useState(null)

  useEffect(()=>{
    const getData = async ()=>{
      const res = await commonGetApiCall('/webinar')
      setWebinarData(toCamelCase(res?.data))
    }
    getData()
  },[])
  return (
  <>
  {allWebinarData &&   <div className="mt-5">
      {allWebinarData?.map((data, index) => (
        <WebinarCard
          key={index}
          id={index}
          data={data}
          isOpen={openCardId === index}
          onToggle={handleToggle}
        />
      ))}
    </div>}
    {!allWebinarData && <PageBuildingLoader/>}
  </>
  );
};

export default WebanarPage;
