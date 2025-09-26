import React, { useContext } from "react";
import { LeadershipContext } from "../../../context/LeadershipContext";

const SectionOne = () => {
  const autoResize = (e) => {
    e.target.style.height = "24px";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  // functions and inputs handlers
  const { handleLeadershipInputs, createLeadershipData } =
    useContext(LeadershipContext);

  return (
    <div className="min-h-[300px] w-full shadow flex">
      <div className="h-[300px] p-5 w-[60%] flex flex-col justify-end">
        <div className="flex flex-col min-w-[200px]">
          <div className="w-full">
            <textarea
              placeholder="Enter Heading"
              style={{ height: "30px" }}
              name="bannerHeading"
              value={createLeadershipData?.bannerHeading}
              className={`w-full outline-0 placeholder:text-black text-black border-0 resize-none overflow-hidden text-[21px]`}
              onInput={(e) => {
                autoResize(e);
                handleLeadershipInputs(e)
              }}
            />
          </div>
          <div className="w-full">
            <textarea
              placeholder="Designation"
              style={{ height: "30px" }}
              name="designation"
              value={createLeadershipData?.designation}
              className={`w-full outline-0 placeholder:text-stone-800 text-text-stone-800-0 resize-none overflow-hidden text-[18px]`}
              onInput={(e) => {
                autoResize(e);
                handleLeadershipInputs(e)
              }}
            />
          </div>
          <div className="w-full">
            <textarea
              placeholder="Enter Sub Heading"
              style={{ height: "30px" }}
              name="bannerSubHeading"
              value={createLeadershipData?.bannerSubHeading}
              className={`w-full outline-0 placeholder:text-stone-400 text-black border-0 resize-none overflow-hidden text-[18px]`}
              onInput={(e) => {
                autoResize(e);
                handleLeadershipInputs(e)
              }}
            />
          </div>

          <div className="h-[90px] overflow-hidden w-[90px] mt-4 rounded-full border border-[#BD2F2C] border-dashed bg-[#FFF8F8] relative">
            <input
              type="file"
              className="h-full w-full absolute top-0 left-0 z-10 opacity-0 cursor-pointer rounded-full"
              name="logo"
              onChange={handleLeadershipInputs}
              id=""
            />
            {createLeadershipData?.logo && (
              <img className="h-full w-full object-cover" src={createLeadershipData?.logo} alt="" />
            )}
            {!createLeadershipData?.logo && (
              <div className="flex flex-col justify-center items-center h-full w-full">
                <img
                  className="h-[20px] object-cover"
                  src="/icons/upload.png"
                  alt=""
                />
                <h3 className="text-[#BD2F2C] mt-2 text-[12px]">
                  Upload Image
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="max-h-[300px] h-[300px] w-[40%] relative border border-dashed border-[#BD2F2C] bg-[#FFF8F8]">
        <input
          type="file"
          className="h-full w-full absolute cursor-pointer z-10 opacity-0"
          name="bannerImage"
          onChange={handleLeadershipInputs}
          id=""
        />
        <div className="h-full w-full flex flex-col justify-center items-center">
          {createLeadershipData?.bannerImage && (
              <img className="h-full w-full object-cover" src={createLeadershipData?.bannerImage} alt="" />
            )}
         {!createLeadershipData?.bannerImage && <div className="h-full w-full flex flex-col justify-center items-center">
           <img src="/icons/upload.png" alt="" />
          <h3 className="text-[#BD2F2C] mt-2">Upload Image</h3>
         </div>}
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
