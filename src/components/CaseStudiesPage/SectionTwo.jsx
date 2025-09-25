import React, { useContext, useRef, useEffect } from "react";
import { NewCaseStudyContext } from "../../../context/NewCaseStudyContext";

const SectionTwo = ({ref}) => {
  const { handleNewCaseStudyInputs, handleKeyPointsChange, createCaseStudyData, functionForAddingPoints } = useContext(NewCaseStudyContext);

  const autoResize = (e) => {
    e.target.style.height = "30px";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <div ref={ref} className="relative h-[460px]">
      <div className="h-[330px] flex w-full bg-white shadow my-8 relative z-20">
        <div className="w-[35%] bg-[#FFF8F8] relative">
          <div className="w-full absolute left-0 top-0 z-20">
            <input onChange={handleNewCaseStudyInputs} className="h-full w-full opacity-0 cursor-pointer left-0 top-0 absolute z-20" type="file" name="img" />
          </div>
          <div className="flex h-full w-full relative border border-dashed border-[#BD2F2C] flex-col items-center justify-center">
            {createCaseStudyData?.img ? (
              <img className="h-full w-full object-cover" src={createCaseStudyData?.img} alt="" />
            ) : (
              <div className="h-full w-full flex flex-col justify-center items-center">
                <img src="/icons/upload.png" alt="" />
                <h3 className="text-[#BD2F2C] mt-2 font-semibold">Upload Logo</h3>
              </div>
            )}
          </div>
        </div>
        <div className="w-[65%] h-full p-14">
          <textarea placeholder="Enter Heading" className="w-full h-[45px] placeholder:text-black text-black outline-0 border-0 resize-none overflow-hidden text-[28px]" name="title" onInput={(e) => { handleNewCaseStudyInputs(e); autoResize(e); }} />
          <div className="flex flex-col min-h-[40px]">
            {createCaseStudyData?.texts?.map((data, index) => (
              <div key={index} className="flex items-center gap-2">
                <textarea value={data} onInput={(e) => { handleKeyPointsChange(e, index); autoResize(e); }} placeholder="Enter Sub Heading" className="w-[80%] outline-0 border-0 text-black placeholder:text-black text-[18px] font-light resize-none overflow-hidden" name="texts" />
              </div>
            ))}
          </div>
          <button onClick={functionForAddingPoints} className="bg-[#BD2F2C] text-[#fff] p-[4px] rounded-full font-medium px-4 text-[13px]">
            <i className="ri-add-line"></i> Add More
          </button>
        </div>
      </div>
      <div className="bg-[#F8F8F8] h-[150px] flex items-end pb-5 absolute bottom-0 left-0">
        <p className="text-[24px] font-light text-center text-[#BD2F2C]">
          Assisted the client in evaluating the product's potential across various patient segments and equipped the forecast for a successful launch planning
        </p>
      </div>
    </div>
  );
};

export default SectionTwo;
