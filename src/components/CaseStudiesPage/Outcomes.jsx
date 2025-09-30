import React, { useContext } from "react";
import { NewCaseStudyContext } from "../../../context/NewCaseStudyContext";

const Outcomes = ({ ref }) => {
  const {
    addObjsInSections,
    createCaseStudyData,
    handleObjInpusChanges,
    addKeyPointsInArray,
    handleTextsChange,
    handleNewCaseStudyInputs
  } = useContext(NewCaseStudyContext);

  const autoResize = (e) => {
    e.target.style.height = "24px";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <div ref={ref} className="min-h-[500px] py-10 my-10 w-full shadow">
      <div className="h-[100px] gap-5 flex-col w-full flex items-center justify-center">
        <img className="h-[80%]" src="/caseStudy/outcome.png" alt="" />
        <h2 className="text-[30px] font-light uppercase">outcomes</h2>
      </div>
      <div className="grid grid-cols-3 gap-20 mt-10 min-h-[350px] pt-10 px-5">
       {createCaseStudyData?.outcomes?.map((el, mainIndex) => (
          <div key={mainIndex} className="h-full">
            <div className="h-[100px] w-[100px] rounded-full bg-[#FFF8F8] overflow-hidden border border-dashed border-[#BD2F2C]">
              <div className="flex h-full w-full relative flex-col items-center justify-center">
                <input className="h-full w-full opacity-0 cursor-pointer left-0 top-0 absolute z-20" type="file" name="img" onChange={(evt) => handleObjInpusChanges(evt, "outcomes", mainIndex)} />
                {el?.img ? (
                  <img className="h-full w-full object-scale-down" src={el?.img} alt="" />
                ) : (
                  <div className="h-full w-full flex flex-col justify-center items-center">
                    <img className="h-[20%] w-[20%] object-contain" src="/icons/upload.png" alt="" />
                    <h3 className="text-[#BD2F2C] mt-2 text-[13px]">Upload Logo</h3>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-3">
              <textarea className="h-[40px] w-full outline-0 border-0 resize-none overflow-hidden placeholder:text-[#960000] text-[#960000] text-[20px]" placeholder="Heading" name="title" value={el?.title} onInput={autoResize} onChange={(evt) => handleObjInpusChanges(evt, "challenges", mainIndex)} />
              <div>
                {createCaseStudyData?.outcomes[mainIndex]?.texts?.map((text, index) => (
                  <div key={index} className={`flex items-start gap-2 ${index > 0 && 'mt-4'}`}>
                    <img src="/caseStudy/dot.png" className="mt-2" alt="" />
                    <textarea name="text" value={text} onInput={autoResize} onChange={(e) => handleTextsChange(e, "outcomes", mainIndex, index)} placeholder="Key Points" className="h-[24px] w-full outline-0 border-0 resize-none overflow-hidden placeholder:text-[#000] text-[#000] text-[14px]" />
                  </div>
                ))}
                <button type="button" onClick={(evt) => {
                  evt.stopPropagation()
                  addKeyPointsInArray("outcomes", mainIndex)
                }} className="bg-[#BD2F2C] text-[#fff] p-[4px] rounded-full font-medium px-4 mt-7 text-[13px]">
                  <i className="ri-add-line"></i> Add More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full mt-10">
        <button
          onClick={() => addObjsInSections("outcomes")}
          className="bg-[#BD2F2C] text-[#fff] p-[6px] rounded-full font-medium px-4 text-[17px]"
        >
          <i className="ri-add-line"></i> Add More
        </button>
      </div>

      <div className="h-[40px] relative mt-15 mx-auto w-fit flex gap-2 px-7 bg-[#BD2F2C]  cursor-pointer items-center justify-around text-white">
        <input
        onChange={handleNewCaseStudyInputs}
          type="file"
          className=" absolute top-0 left-0 cursor-pointer h-full w-full opacity-0"
          name="pdf"
          id=""
        />
        <img src="/icons/uplodWhite.png" alt="" />
        Upload case study
      </div>
    </div>
  );
};

export default Outcomes;
