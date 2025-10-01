import React, { useEffect, useState } from "react";
import EventAndWebListingCard from "../common/EventAndWebListingCard";
import { commonGetApiCall } from "../../utils/reuseableFunctions";
import toast from "react-hot-toast";
import PageBuildingLoader from "../common/PageBuildingLoader";

const EventPage = () => {
  const [openCardId, setOpenCardId] = useState(null);
  const [eventListData,setEventListData] = useState(null)

  useEffect(() => {
  const getData = async () => {
    const data = await commonGetApiCall("/events");
    if (data.success) {
      setEventListData(data?.data || []);
    } else {
      toast.error(data?.message || "Unable to load events. Please try again.");
    }
  };

  getData();
}, []);


  const handleToggle = (id) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };



  return (
   <>
   {eventListData &&  <div className="mt-5">
      {eventListData?.map((data, index) => (
        <EventAndWebListingCard
          key={index}
          id={index}
          isOpen={openCardId === index}
          onToggle={handleToggle}
          data={data}
        />
      ))}
    </div>}
   {!eventListData && <PageBuildingLoader/>}
   </>
  );
};

export default EventPage;
