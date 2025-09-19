import React, { useEffect, useState } from "react";
import EventAndWebListingCard from "../common/EventAndWebListingCard";
import { commonGetApiCall } from "../../utils/reuseableFunctions";
import toast from "react-hot-toast";

const EventPage = () => {
  const [openCardId, setOpenCardId] = useState(null);
  const [eventListData,setEventListData] = useState([])

  useEffect(() => {
  const getData = async () => {
    const t = toast.loading("Loading events... Please wait.");
    const data = await commonGetApiCall("/getallevents");

    if (data.success) {
      setEventListData(data?.data || []);
      toast.dismiss(t);
      toast.success(data?.message || "Events loaded successfully.");
    } else {
      toast.dismiss(t);
      toast.error(data?.message || "Unable to load events. Please try again.");
    }
  };

  getData();
}, []);


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
