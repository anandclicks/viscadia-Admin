import React, { useContext } from "react";
import { NewCaseStudyContext } from "../../../context/NewCaseStudyContext";

const Chellenges = () => {
  const { addObjsInSections, createCaseStudyData, handleObjInpusChanges } =
    useContext(NewCaseStudyContext);
    
  return (
    <div className="min-h-[500px] py-10 my-10 w-full shadow">
      <div className="h-[100px] gap-5 flex-col w-full flex items-center justify-center">
        <img className="h-[50%]" src="/caseStudy/challenges.png" alt="" />
        <h2 className="text-[30px] font-light">CHALLENGES</h2>
      </div>
      <div className="grid grid-cols-3 gap-20 mt-10 min-h-[350px] pt-10 px-5">
        {createCaseStudyData?.challenges?.map((el, mainIndex) => (
          <div key={mainIndex} className="h-full">
            <div className="h-[150px] w-[150px] rounded-full bg-[#FFF8F8] overflow-hidden border border-dashed border-[#BD2F2C]">
              <div className="flex h-full w-full relative flex-col items-center justify-center">
                <input
                  className="h-full w-full opacity-0 cursor-pointer left-0 top-0 absolute z-20"
                  type="file"
                  name="img"
                  onChange={(evt) => {
                    handleObjInpusChanges(evt, "challenges", mainIndex);
                  }}
                  id=""
                />
                <img src="/icons/upload.png" alt="" />
                <h3 className="text-[#BD2F2C] mt-2 font-semibold">
                  Upload Logo
                </h3>
              </div>
            </div>
            <div className="mt-3">
              <textarea
                className="h-[40px] outline-0 border-0 resize-none overflow-hidden placeholder:text-[#960000] text-[#960000] text-[25px]"
                placeholder="Heading"
                name="title"
                value={el?.title}
                onChange={(evt) => {
                  handleObjInpusChanges(evt, "challenges", mainIndex);
                }}
                id=""
              ></textarea>
              <div>
                {createCaseStudyData?.challenges[mainIndex]?.texts?.map((text, index) => (
                  <div className="flex items-start gap-3">
                    <img src="/caseStudy/dot.png" className="mt-3 " alt="" />
                    <textarea
                    key={index}
                      name="text"
                      value={text}
                      placeholder="Key Points"
                      className="h-[40px] w-[100px] outline-0 border-0 resize-none overflow-hidden placeholder:text-[#000] text-[#000] text-[20px]"
                      id=""
                    ></textarea>
                  </div>
                ))}
                <button className="bg-[#BD2F2C] text-[#fff] p-[4px] rounded-full font-medium px-4 text-[13px] ">
                  <i className="ri-add-line"></i> Add More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full">
        <button
          onClick={() => addObjsInSections("challenges")}
          className="bg-[#BD2F2C] text-[#fff] p-[6px] rounded-full font-medium px-4 text-[17px] "
        >
          <i className="ri-add-line"></i> Add More
        </button>
      </div>
    </div>
  );
};

export default Chellenges;
