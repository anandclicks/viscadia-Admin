import React, { useContext, useState } from "react";
import { WebinarContext } from "../../../context/WebinarPageContext";

const SectionFour = ({ ref }) => {
  const [speakerStatus, setSpeakerStatus] = useState(false);
  const {
    webinarCreateData,
    functionForAddingSpeakers,
    handleSpeakersChnages,
  } = useContext(WebinarContext);

  return (
    <div ref={ref} className="min-h-[400px] w-full mt-10 py-5 shadow mb-8">
      <div className="px-10 flex justify-end gap-2 items-center">
        <p>{!speakerStatus ? "Unhide" : "Hide"}</p>
        <button
          type="button"
          onClick={() => setSpeakerStatus((prev) => !prev)}
          className="w-[80px] transition-all duration-200 grediantBg h-full rounded-full p-1 cursor-pointer flex items-center"
        >
          <div
            className={`h-[30px] w-[30px] transition-all bg-white rounded-full ${
              speakerStatus ? "translate-x-0" : "translate-x-10"
            }`}
          ></div>
        </button>
      </div>
      <h2 className="text-[40px] font-light text-center mb-10">Speaker</h2>
      <div className="flex min-h-[25%] px-10 gap-5 items-center">
        <div className="flex flex-col w-full justify-center items-center">
          <div className="h-full w-full gap-5 grid grid-cols-4 min-w-[230px]">
            {webinarCreateData?.speaker?.map((el, index) => (
              <div key={index} className="h-full ">
                <div className="border border-dashed border-[#BD2F2C] flex flex-col justify-center items-center relative bg-[#BD2F2C1c] h-[250px] w-full">
                  {el?.image && (
                    <img src={el?.image} className="h-full w-full" alt="" />
                  )}
                  {!el?.image && (
                    <div className="relative flex flex-col justify-center items-center bg-[#FFF5F5] h-full w-full">
                      <img src="../icons/upload.png" alt="" />
                      <h3 className="text-[#BD2F2C] mt-2">Upload Image</h3>
                    </div>
                  )}
                  <input
                    type="file"
                    name="image"
                    className="absolute w-full h-full opacity-0 cursor-pointer z-20"
                    onInput={(evt) => handleSpeakersChnages(evt, index)}
                  />
                </div>
                <div className="mt-3">
                  <div className="flex items-center my-2">
                    <textarea
                      name="fullName"
                      value={el?.fullName}
                      placeholder="Full Name"
                      className="generalCssForInputs text-[14px] text-black placeholder:text-black resize-none overflow-hidden h-[20px] w-[90%]"
                      onInput={(evt) => handleSpeakersChnages(evt, index)}
                    />
                  </div>
                  <div className="flex items-center my-2">
                    <textarea
                      name="designation"
                      value={el?.designation}
                      placeholder="Designation"
                      className="generalCssForInputs text-[14px] text-black placeholder:text-black resize-none overflow-hidden h-[20px] w-[90%]"
                      onInput={(evt) => handleSpeakersChnages(evt, index)}
                    />
                  </div>
                  <div className="flex items-center my-2">
                    <textarea
                      name="introduction"
                      value={el?.introduction}
                      placeholder="Introduction"
                      className="generalCssForInputs text-[14px] text-black placeholder:text-black resize-none overflow-hidden h-[20px] w-[90%]"
                      onInput={(evt) => handleSpeakersChnages(evt, index)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-10">
        <button
          onClick={functionForAddingSpeakers}
          className="bg-[#BD2F2C] text-[#fff] p-[6px] rounded-full font-medium px-4 text-[17px]"
        >
          <i className="ri-add-line"></i> Add More
        </button>
      </div>
    </div>
  );
};

export default SectionFour;
