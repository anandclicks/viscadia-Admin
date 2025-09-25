import React, { useState } from "react";
import LeadershipCard from "../../components/loadership/LeadershipCard";
import LeadershipFilterHeader from "../../components/loadership/LeadershipFilterHeader";

const LeadershipPage = () => {
  const [openCardId, setOpenCardId] = useState(null);
  const handleToggle = (id) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };
  return (
    <div className="h-full">
      <LeadershipFilterHeader />
      <div onClick={()=> handleToggle(null)} className="outletWrapper grid overflow-scroll grid-cols-3 gap-10 mt-3 h-[calc(100%-70px)]">
       {(Array(10).fill({}).map((_,index)=>(
         <LeadershipCard key={index} index={index} isOpen={openCardId === index} onToggle={handleToggle} />
       )))}
      </div>
    </div>
  );
};

export default LeadershipPage;
