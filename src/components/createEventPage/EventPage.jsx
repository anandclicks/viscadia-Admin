import React, { useEffect, useState } from "react";
import EventAndWebListingCard from "../common/EventAndWebListingCard";
import { commonGetApiCall } from "../../utils/reuseableFunctions";

const EventPage = () => {
  const [openCardId, setOpenCardId] = useState(null);
  const [eventListData,setEventListData] = useState([])

  useEffect(()=>{
    const getData = async()=>{
     let data = await commonGetApiCall('/getallevents')
     if(data.success){
      setEventListData(data?.data || [])
     }
    }
    getData()
  },[])

  const handleToggle = (id) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };



  return (
    <div className="mt-5">
      {eventListData?.map((data, index) => (
        <EventAndWebListingCard
          key={index}
          id={index}
          isOpen={openCardId === index}
          onToggle={handleToggle}
          data={data}
        />
      ))}
    </div>
  );
};

export default EventPage;
