import { useState, useRef, useContext } from "react";
import { NewCaseStudyContext } from "../../../context/NewCaseStudyContext";

const SectionOne = ({ref}) => {
  const {handleNewCaseStudyInputs,createCaseStudyData} = useContext(NewCaseStudyContext) 


  const urlTitle = useRef(null);
  const headingRef = useRef(null);

  const autoResize = (ref) => {
    if (ref.current) {
      ref.current.style.height = "30px";
      ref.current.style.height = ref.current.scrollHeight + "px"; 
    }
  };

  return (
    <div ref={ref} className="h-[260px] w-full bg-[#FFF8F8] border-[1px] border-dashed border-[#BD2F2C]">
      <div className="h-full w-full relative">
        {createCaseStudyData?.bannerImg && (
          <img
            className="absolute left-0 top-0 z-0 h-full w-full object-cover"
            src={createCaseStudyData?.bannerImg}
            alt=""
          />
        )}

        <div
          className={`overlay ${
            createCaseStudyData?.bannerImg && "bg-[#00000086]"
          } px-10 z-0 h-full w-full relative top-0 left-0 flex justify-between items-center`}
        >
          <div className="flex h-full w-full relative z-10">
            <div className="w-[40%] flex flex-col justify-center">
              <div className="w-full">
                <textarea
                name="urlTitle"
                  ref={urlTitle}
                  value={createCaseStudyData?.urlTitle}
                  placeholder="Sub Heading"
                  style={{ height: "30px" }}
                  className={`w-full outline-0 border-0 resize-none overflow-hidden ${
                    createCaseStudyData?.bannerImg
                      ? "text-[#ffffff] placeholder:text-[#ffffff]"
                      : "text-[#000000] placeholder:text-[#000000]"
                  } text-[21px]`}
                  onInput={(e) => {
                    autoResize(urlTitle)
                    handleNewCaseStudyInputs(e)
                  }}
                />
              </div>
              <div className=" w-full">
                <textarea
                  ref={headingRef}
                  placeholder="Enter Heading"
                  value={createCaseStudyData?.mainSubtitle}
                  name="mainSubtitle"
                  style={{ height: "40px" }}
                  className={`w-full outline-0 border-0 resize-none overflow-hidden ${
                    createCaseStudyData?.bannerImg
                      ? "text-[#ffffff] placeholder:text-[#ffffff]"
                      : "text-[#000000] placeholder:text-[#000000]"
                  } text-[28px]`}
                  onInput={(e) => {
                    autoResize(headingRef)
                    handleNewCaseStudyInputs(e)
                  }}
                />
              </div>
            </div>
            <div className="w-[60%] relative flex justify-end items-center z-40 h-full">
              <div className="h-full w-[200px] flex justify-center items-center flex-col relative">
                <input
                  onChange={(e)=>{  
                    handleNewCaseStudyInputs(e)
                  }}
                  type="file"
                  name="bannerImg"
                  className="absolute left-0 top-0 h-full w-full z-30 opacity-0 cursor-pointer"
                />
                {!createCaseStudyData?.bannerImg && (
                  <div className="flex flex-col items-center justify-center">
                    <img src="/icons/upload.png" alt="" />
                    <h3 className="text-[#BD2F2C] mt-2 font-semibold">Upload Logo</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
