import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { commonGetApiCall } from "../../utils/reuseableFunctions";
import toast from "react-hot-toast";
import PageBuildingLoader from "../common/PageBuildingLoader";
import NoDataFound from "../common/NoDataFound";

const EventPage = () => {
  const [openCardId,setOpenCardId] = useState(null);
  const [eventListData,setEventListData] = useState(null);

  useEffect(()=>{
    const getData = async()=>{
      const data = await commonGetApiCall("/events");
      if(data.success){
        setEventListData(data?.data || []);
      } else {
        toast.error(data?.message || "Unable to load events. Please try again.");
        setEventListData([]);
      }
    };
    getData();
  },[]);

  const handleToggle = (id)=>{ setOpenCardId(prev => prev===id?null:id); };

  return (
    <>
      {eventListData===null && <PageBuildingLoader/>}
      {eventListData?.length > 0 && <div className="mt-5">
        {eventListData.map((data,index)=>(
          <EventCard key={index} id={index} data={data} isOpen={openCardId===index} onToggle={handleToggle}/>
        ))}
      </div>}
      {eventListData?.length===0 && <NoDataFound message="No events found"/>}
    </>
  );
};

export default EventPage;
