import React, { useContext, useState } from "react";
import { LeadershipContext } from "../../../context/LeadershipContext";

const SectionTwo = () => {
  const autoResize = (e) => {
    e.target.style.height = "24px";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  const { handleLeadershipInputs, createLeadershipData,addKeysInObjs,handleCopanyNameInputs } =
    useContext(LeadershipContext);

  return (
    <div className="min-h-[250px] w-full bg-[#ECECEC] shadow mt-20 mb-10 pb-10 flex ">
      <div className="min-h-[250px] w-[50%] flex flex-col justify-center ps-7">
        <div className="w-full">
          <textarea
            placeholder="Experience"
            name="experience"
            value={createLeadershipData?.experience}
            style={{ height: "30px" }}
            className={`w-full outline-0 placeholder:text-black text-black border-0 resize-none overflow-hidden text-[21px]`}
            onInput={(e) => {
              autoResize(e);
              handleLeadershipInputs(e);
            }}
          />
        </div>
        <div className="w-full">
          <textarea
            placeholder="Enter Sub Heading"
            name="experienceSubheading"
            value={createLeadershipData?.experienceSubheading}
            style={{ height: "30px" }}
            className={`w-full outline-0 placeholder:text-stone-600 text-text-stone-600-0 resize-none overflow-hidden text-[18px]`}
            onInput={(e) => {
              autoResize(e);
              handleLeadershipInputs(e);
            }}
          />
        </div>
      </div>
      <div className="h-full w-[50%] flex flex-col justify-center">
        <div className="w-full pt-20">
          <textarea
            placeholder="Enter Title"
            value={handleLeadershipInputs?.title}
            style={{ height: "30px" }}
            name="title"
            className={`w-full outline-0 placeholder:text-stone-600 text-stone-600 border-0 resize-none overflow-hidden text-[21px]`}
            onInput={(e) => {
              autoResize(e);
              handleLeadershipInputs(e);
            }}
          />
        </div>
        <div>
          {createLeadershipData?.company?.map((val, index) => (
            <div key={index} className="w-full">
              <textarea
                placeholder="Enter Company"
                value={val}
                style={{ height: "20px" }}
                className={`w-full outline-0 placeholder:text-stone-600 text-text-stone-600-0 resize-none overflow-hidden text-[16px]`}
                onInput={(e) => {
                  autoResize(e);
                  handleCopanyNameInputs(e,index)
                }}
              />
            </div>
          ))}
        </div>
        <button onClick={()=> addKeysInObjs('company')} className="bg-[#BD2F2C] text-[#fff] w-fit p-[4px] rounded-full font-medium px-4 text-[13px]">
          <i className="ri-add-line"></i> Add More
        </button>
      </div>
    </div>
  );
};

export default SectionTwo;
