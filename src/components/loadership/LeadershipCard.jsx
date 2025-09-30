import React from "react";

const LeadershipCard = ({isOpen,onToggle,index}) => {
    console.log(isOpen);
    
  return (
    <div className="h-[320px] w-full rounded-2xl">
      <div className="h-[70%] w-full overflow-hidden rounded-2xl">
        <img className="w-full mb-10" src="/leader.jpg" alt="" />
      </div>
      <div className="h-[30%] w-full  flex flex-col pt-3 items-center relative">
        <button type="button" onClick={(e)=> {
            e.stopPropagation()
            onToggle(index)
        }} className="hover:text-[#BD2F2C] absolute end-0 text-[30px] top-0">
          <i className="ri-more-2-fill"></i>
        </button>
        <div
        onClick={(e)=> e.stopPropagation()}
          className={`${
            isOpen ? "opacity-100 block" : "opacity-0 hidden"
          } h-[200px] w-[170px] bg-white shadow-lg absolute right-[0px] mt-3 z-20 border rounded-xl border-[#0000001c] px-2`}
        >
          <button className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
            Edit
          </button>
          <button className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
            Mark as Draft
          </button>
          <button className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
            Publish
          </button>
          <button className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
            Preview
          </button>
        </div>

        <h2 className="text-[22px] text-[#BD2F2C]">Satish K. Kauta</h2>
        <p className="text-[20px] text-gray-600">Founder & CEO</p>
      </div>
    </div>
  );
};

export default LeadershipCard;
