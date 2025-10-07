import React, { useEffect, useState } from "react";
import LeadershipCard from "../../components/loadership/LeadershipCard";
import LeadershipFilterHeader from "../../components/loadership/LeadershipFilterHeader";
import { commonGetApiCall } from "../../utils/reuseableFunctions";
import PageBuildingLoader from "../../components/common/PageBuildingLoader";

const LeadershipPage = () => {
  const [openCardId, setOpenCardId] = useState(null);
  const [leaders,setAllLeaders] = useState(null)
  const handleToggle = (id) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };
  useEffect(()=>{
    const getData = async ()=>{
      const res = await commonGetApiCall('/leadership')
      setAllLeaders(res?.data || [])
    }
    getData()
  },[])
  return (
   <>
   {!leaders && <PageBuildingLoader/>}
   {leaders &&  <div className="h-full">
      <LeadershipFilterHeader />
      <div onClick={()=> handleToggle(null)} className="grid grid-cols-3 gap-10 mt-3 h-[calc(100%-70px)]">
       {leaders?.map((data,index)=>(
         <LeadershipCard key={index} data={data} index={index} isOpen={openCardId === index} onToggle={handleToggle} />
       ))}
      </div>
    </div>}
   </>
  );
};

export default LeadershipPage;
