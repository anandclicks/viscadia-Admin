import React, { useState } from "react";
import { putCommonApi } from "../../utils/reuseableFunctions";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const EventAndWebListingCard = ({ id, isOpen, onToggle,data }) => {
  const [eventStatus,setEventStatus] = useState(data?.status)
  const handleActionMenu = (evt) => {
    evt.stopPropagation();
    onToggle(id);
  };

  const handleStausApiCall = async(status)=>{
    let t = toast.loading("Status updating!")
    let id = data?.id
    let res = await putCommonApi(`/events/${id}`,{status : status},)
    if(res.success){
      toast.dismiss(t)
      toast.success("Statsu Updated Successfully")
      setEventStatus(status)
    }else {
      toast.dismiss(t)
      toast.error("Couldn't Update!")
    }
  }
  

  return (
    <div
      onClick={() => onToggle(null)}
      className="w-full h-[220px] my-5  rounded-[30px] flex fsTwo shadow-[0px_0px_3px_#0000000f] border border-[#f1f1f1]">
      <img
        className="w-[28%] h-full rounded-[30px] object-cover"
        src={data?.image}
        alt=""
      />
      <div className="w-[72%] h-full px-5 flex flex-col justify-center">
        <div className="w-full flex justify-between mb-2">
          <h2 className="text-[22px] font-semibold ">{data?.title}</h2>
          <div className="relative flex gap-3 mb-2">
            {eventStatus === "live" && <button className="Published">Published</button>}
            {eventStatus === "draft" && <button className="draft">Draft</button>}
            {eventStatus === "undraft" && <button className="opacity-0 draft">undraft</button>}
            <button
              onClick={handleActionMenu}
              className="hover:text-[#BD2F2C] text-[30px] relative">
              <i className="ri-more-2-fill"></i>
            </button>
            <div
              className={`${
                isOpen ? "opacity-100 block" : "opacity-0 hidden"
              } min-h-[150px] w-[170px] bg-white shadow-lg absolute left-[0px] mt-3 z-20 border rounded-xl border-[#0000001c] px-2`}
            >
              <button  className="w-full h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
                Edit
              </button>
              {eventStatus === "live" &&
              <>
               <button onClick={()=> handleStausApiCall('draft')} className="w-full h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
                Mark as Draft
              </button>
               <button onClick={()=> handleStausApiCall('undraft')} className="w-full h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
                Undraft
              </button>
              </>
            }
              {eventStatus === "draft" &&
              <>
               <button onClick={()=> handleStausApiCall('undraft')} className="w-full h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
                Undraft
              </button>
               <button onClick={()=> handleStausApiCall('live')} className="w-full h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
                Publish
              </button>
              </>
            }
              {eventStatus === "undraft" &&
               <>
               <button onClick={()=> handleStausApiCall('draft')} className="w-full h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
                Mark as Draft
              </button>
               <button onClick={()=> handleStausApiCall('live')} className="w-full h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
                Publish
              </button>
               </>
            }
             
             <button className="w-full h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
<Link to={`/preview/event/${data?.id}`} className="h-full w-full">
                Preview
              </Link>
             </button>
              
            </div>
          </div>
        </div>
        <p className="text-[15px] leading-[20px]">
         {data?.sub_heading}
        </p>
      </div>
    </div>
  );
};

export default EventAndWebListingCard;
