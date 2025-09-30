import React, { useContext } from "react";
import { NewCaseStudyContext } from "../../../context/NewCaseStudyContext";

const Apporach = ({ref}) => {
  const { addObjsInSections, createCaseStudyData, handleObjInpusChanges, addKeyPointsInArray, handleTextsChange } = useContext(NewCaseStudyContext);

  const autoResize = (e) => {
    e.target.style.height = "24px";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <div ref={ref} className="min-h-[500px] py-10 my-10 w-full shadow">
      <div className="h-[100px] gap-5 flex-col w-full flex items-center justify-center">
        <img className="h-[50%]" src="/caseStudy/approach.png" alt="" />
        <h2 className="text-[30px] font-light uppercase">Approach</h2>
      </div>
      <div className="grid grid-cols-3 gap-20 mt-10 min-h-[350px] pt-10 px-5">
        {createCaseStudyData?.approach?.map((el, mainIndex) => (
          <div key={mainIndex} className="h-full">
            <div className="h-[150px] w-[150px] rounded-full bg-[#FFF8F8] overflow-hidden border border-dashed border-[#BD2F2C]">
              <div className="flex h-full w-full relative flex-col items-center justify-center">
                <input className="h-full w-full opacity-0 cursor-pointer left-0 top-0 absolute z-20" type="file" name="img" onChange={(evt) => handleObjInpusChanges(evt, "approach", mainIndex)} />
                {el?.img ? (
                  <img className="h-full w-full object-cover" src={el?.img} alt="" />
                ) : (
                  <div className="h-full w-full flex flex-col justify-center items-center">
                    <img src="/icons/upload.png" alt="" />
                    <h3 className="text-[#BD2F2C] mt-2 font-semibold">Upload Logo</h3>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-3">
              <textarea className="h-[40px] outline-0 border-0 w-full resize-none overflow-hidden placeholder:text-[#960000] text-[#960000] text-[25px]" placeholder="Heading" name="title" value={el?.title} onInput={autoResize} onChange={(evt) => handleObjInpusChanges(evt, "approach", mainIndex)} />
              <div>
                {createCaseStudyData?.approach[mainIndex]?.texts?.map((text, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <img src="/caseStudy/dot.png" className="mt-2" alt="" />
                    <textarea name="text" value={text} onInput={autoResize} onChange={(e) => handleTextsChange(e, "approach", mainIndex, index)} placeholder="Key Points" className="h-[24px] w-full outline-0 border-0 resize-none overflow-hidden placeholder:text-[#000] text-[#000] text-[14px]" />
                  </div>
                ))}
                <button type="button" onClick={(evt) => {
                  evt.stopPropagation()
                  addKeyPointsInArray("approach", mainIndex)
                }} className="bg-[#BD2F2C] text-[#fff] p-[4px] rounded-full font-medium px-4 text-[13px]">
                  <i className="ri-add-line"></i> Add More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full">
        <button type="button" onClick={() => addObjsInSections("approach")} className="bg-[#BD2F2C] text-[#fff] p-[6px] rounded-full font-medium px-4 text-[17px]">
          <i className="ri-add-line"></i> Add More
        </button>
      </div>
    </div>
  );
};

export default Apporach;
