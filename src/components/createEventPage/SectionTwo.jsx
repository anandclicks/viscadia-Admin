import React, { useContext, useState } from "react";
import { EventPageContext } from "../../../context/EventPageContext";

const SectionTwo = ({ ref }) => {
    const [speakerStatus, setSpeakerStatus] = useState(true);
  const { setCreateEventFormData,handleEventInputfiledsChanges, createEventFormData } = useContext(EventPageContext);

 const handleSectionTwoStatus = ()=>{
    setSpeakerStatus((prev) => !prev)
    setCreateEventFormData((prev)=> ({...prev,sectionTwoStatus : prev?.sectionTwoStatus ? 0 : 1}))
  }
  const autoResize = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <div ref={ref} className="h-[310px] w-full shadow relative flex mt-10 overflow-hidden">
      <div className="EventPagesectionOne w-full h-[101%] object-cover absolute z-10">
        <img className="h-full w-full object-cover" src="../images/sectionTwo.png" alt="" />
      </div>
      <div className="w-[45%] h-full flex flex-col gap-10 relative">
        <div className="w-full h-full">
          <div className="h-full w-full bg-amber-200 relative">
            <div className="absolute border border-dashed border-[#BD2F2C] left-0 top-0 h-full w-full bg-[#FFF5F5] flex justify-center items-center flex-col">
              <img src="../icons/upload.png" alt="" />
              <h3 className="text-[#BD2F2C] mt-2">Upload Logo</h3>
            </div>
            {createEventFormData?.headingImage && (
              <div className="absolute left-0 top-0 h-full overflow-hidden w-full bg-white flex justify-center items-center flex-col">
                <img src={createEventFormData?.headingImage} className="h-full w-full object-cover" alt="" />
              </div>
            )}
            <input onChange={(evt) => handleEventInputfiledsChanges(evt)} required={!createEventFormData?.headingImage} type="file" className="opacity-0 h-full w-full cursor-pointer relative z-20" name="headingImage" accept="image/*" />
          </div>
        </div>
      </div>
      <div className="w-[60%] h-full  rightSide bg-amber-400 flex items-center relative overflow-hidden">
           <div className="px-10 pt-10 z-30 flex justify-end gap-2 items-center absolute top-0 end-0">
        <p className="text-white">{speakerStatus ? "Hide" : "Unhide"}</p>
        <button type="button" onClick={() => handleSectionTwoStatus()} className={`w-[80px] transition-all duration-200 ${speakerStatus ? "bg-white" : 'bg-gray-400'} h-full rounded-full p-1 cursor-pointer flex items-center`}>
          <div className={`h-[30px] w-[30px] transition-all  rounded-full ${speakerStatus ? "translate-x-0 bg-[#BD2F2C]" : "translate-x-10 bg-[#d1d1d1]"}`}></div>
        </button>
      </div>
        <div className="w-full relative z-10 flex justify-end">
          <div className="w-[90%]">
            <div className="h-[40px]">
              <textarea onInput={(e) => { handleEventInputfiledsChanges(e); autoResize(e); }} required value={createEventFormData?.heading} placeholder="HEADING" className="w-full outline-0 border-0 text-white placeholder:text-white text-[31px] font-light resize-none overflow-hidden" name="heading" />
            </div>
            <div className="min-h-[30px] mt-2 max-h-[90px]">
              <textarea onInput={(e) => { handleEventInputfiledsChanges(e); autoResize(e); }} required value={createEventFormData?.subHeading} placeholder="Sub Heading" className="w-[80%] outline-0 border-0 text-white placeholder:text-white text-[13px] leading-5 font-light resize-none overflow-hidden" name="subHeading" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
