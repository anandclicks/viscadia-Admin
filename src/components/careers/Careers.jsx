import React, { useEffect, useState } from "react";
import CareerHeaderFilter from "./CareerHeaderFilter";
import ListingRows from "./ListingRows";
import { commonGetApiCall } from "../../utils/reuseableFunctions";
import PageBuildingLoader from '../common/PageBuildingLoader'

const Careers = () => {
  const [openCardId, setOpenCardId] = useState(null);
  const [allCareers,setAllCareers] = useState(null)

  const handleToggle = (id) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };

  useEffect(()=> {
    const getDat = async ()=>{
      const res = await commonGetApiCall('/career')
      setAllCareers(res?.data)
    }
    getDat()
  },[])
  return (
    <>
    
     <CareerHeaderFilter />
     {!allCareers && <PageBuildingLoader/>}
    {allCareers && <div className="h-full w-full">
      <div
        onClick={(e) => {
          handleToggle(null);
        }}
        className="h-[calc(100%-70px)] w-full "
      >
        {allCareers
          ?.map((data, index) => (
            <ListingRows
              isOpen={openCardId === index}
              onToggle={handleToggle}
              key={index}
              setOpenCardId={setOpenCardId}
              data={data}
              id={index}
            />
          ))}
      </div>
    </div>}
    </>
  );
};

export default Careers;
