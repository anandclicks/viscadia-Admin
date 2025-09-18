import React, { useContext } from "react";
import { EventPageContext } from "../../../context/EventPageContext";

const SectionOne = ({ ref }) => {
  const { handleEventInputfiledsChanges, createEventFormData } = useContext(EventPageContext);

  const autoResize = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <div ref={ref} className="h-[340px] w-full shadow relative flex">
      <div className="EventPagesectionOne w-full h-[340px] object-cover absolute z-10">
        <img className="h-full w-full object-cover" src="../images/SectionOneBg.png" alt="" />
      </div>
      <div className="w-[60%] h-full p-4 flex flex-col gap-10 relative z-20">
        <div className="w-[240px]">
          <div className="h-[130px] border border-dashed border-[#BD2F2C] w-full bg-amber-200 relative">
            <div className="absolute left-0 top-0 h-full w-full bg-[#FFF5F5] flex justify-center items-center flex-col">
              <img src="../icons/upload.png" alt="" />
              <h3 className="text-[#BD2F2C] mt-2">Upload Logo</h3>
            </div>
            {createEventFormData?.logo && (
              <div className="absolute left-0 z-10 top-0 h-full overflow-hidden w-full bg-white flex justify-center items-center flex-col">
                <img src={createEventFormData?.logo} className="max-w-full max-h-full object-contain" alt="" />
              </div>
            )}
            <input onChange={(evt) => handleEventInputfiledsChanges(evt)} type="file" required={!createEventFormData?.logo} className="opacity-0 h-full w-full cursor-pointer relative z-20" accept="image/*" name="logo" />
          </div>
          <p className="text-[13px] mt-2 text-end">Upload JPG/PNG · Max 5MB</p>
        </div>
        <div>
          <div className="h-[40px] w-full">
            <textarea onInput={(e) => { handleEventInputfiledsChanges(e); autoResize(e); }} required value={createEventFormData?.title} placeholder="Enter Title Name" className="w-full outline-0 border-0 text-[#133D65] placeholder:text-[#133D65] text-[21px] resize-none overflow-hidden" name="title" />
          </div>
          <div className="mt-5 mb-3 flex gap-10">
            <div className="flex gap-2 min-w-[200px]">
              <img className="h-[20px]" src="../icons/date.png" alt="" />
              <textarea onInput={(e) => { handleEventInputfiledsChanges(e); autoResize(e); }} required value={createEventFormData?.date} className="w-[90%] generalCssForInputs text-[15px] placeholder:font-medium resize-none overflow-hidden" placeholder="September 10-12-2025" name="date" />
            </div>
            <div className="flex gap-2 min-w-[200px]">
              <img className="h-[20px]" src="../icons/location.png" alt="" />
              <textarea onInput={(e) => { handleEventInputfiledsChanges(e); autoResize(e); }} required value={createEventFormData?.location} className="w-[90%] generalCssForInputs text-[15px] placeholder:font-medium resize-none overflow-hidden" placeholder="Add Location" name="location" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[42%] border-dashed border-[#BD2F2C] border h-full rightSide bg-amber-400 z-0 flex justify-end relative">
        <div className="absolute left-0 top-0 h-full w-full bg-[#FFF8F8] flex justify-center items-center flex-col">
          <img src="../icons/upload.png" alt="" />
          <h3 className="text-[#BD2F2C] mt-2">Upload Image</h3>
        </div>
        {createEventFormData?.image && (
          <div className="left-0 z-10 top-0 h-full overflow-hidden w-full bg-white flex justify-center items-center flex-col">
            <img src={createEventFormData?.image} className="h-full w-full object-cover" alt="" />
          </div>
        )}
      </div>
      <input onChange={(evt) => handleEventInputfiledsChanges(evt)} type="file" required={!createEventFormData?.image} className="opacity-0 h-full end-0 cursor-pointer absolute z-10 w-[40%]" accept="image/*" name="image" />
    </div>
  );
};

export default SectionOne;
