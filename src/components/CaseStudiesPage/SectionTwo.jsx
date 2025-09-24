import React, { useContext, useState } from "react";
import { NewCaseStudyContext } from "../../../context/NewCaseStudyContext";

const SectionTwo = () => {
  const {
    handleNewCaseStudyInputs,
    handleKeyPointsChange,
    createCaseStudyData,
    functionForAddingPoints,
  } = useContext(NewCaseStudyContext);

  const [previewImg, setPreviewImg] = useState("");

  const autoResize = (ref) => {
    if (ref.current) {
      ref.current.style.height = "30px";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  };
  return (
    <div className="relative h-[460px]">
      <div className="h-[330px] flex w-full bg-white shadow my-8 relative z-20">
        <div className="h-full w-[35%] bg-[#FFF8F8] relative">
          <div className="h-full w-full absolute left-0 top-0 z-20">
            <input
              onChange={(e) => {
                handleNewCaseStudyInputs(e);
                setPreviewImg(e.target.files[0]);
              }}
              className="h-full w-full opacity-0 cursor-pointer left-0 top-0 absolute z-20"
              type="file"
              name="img"
              id=""
            />
          </div>
          <div className="flex h-full w-full relative border border-dashed border-[#BD2F2C] flex-col items-center justify-center">
            {/* preview image  */}
            {previewImg && (
              <img
                className="h-full w-full object-cover"
                src={URL.createObjectURL(previewImg)}
                alt=""
              />
            )}

            {/* placholder text  */}
            {!previewImg && (
              <div className="h-full w-full flex flex-col justify-center items-center">
                <img src="/icons/upload.png" alt="" />
                <h3 className="text-[#BD2F2C] mt-2 font-semibold">
                  Upload Logo
                </h3>
              </div>
            )}
          </div>
        </div>
        <div className="w-[65%] h-full p-14">
          <textarea
            placeholder="Enter Heading"
            className="w-full h-[44px] placeholder:text-black text-black outline-0 border-0 resize-none overflow-hidden text-[28px]"
            name="title"
            onInput={handleNewCaseStudyInputs}
            id=""
          ></textarea>
          <div className="flex flex-col min-h-[40px]">
            {createCaseStudyData?.texts?.map((data, index) => (
              <div key={index} className="h-[30px] flex items-center gap-2 ">
                <input
                  onLoad={autoResize}
                  onInput={autoResize}
                  value={data}
                  onChange={(evt) => handleKeyPointsChange(evt, index)}
                  placeholder="Enter Sub Heading"
                  className="w-[80%] h-full outline-0 border-0 text-black placeholder:text-black text-[18px] font-light"
                  name="texts"
                  type="text"
                />
              </div>
            ))}
          </div>
          <button
            onClick={(e) => {
              functionForAddingPoints(e);
            }}
            className="bg-[#BD2F2C] text-[#fff] p-[4px] rounded-full font-medium px-4 text-[13px] "
          >
            <i className="ri-add-line"></i> Add More
          </button>
        </div>
      </div>
      <div className="bg-[#F8F8F8] h-[150px] flex items-end pb-5 absolute bottom-[0px] left-0">
        <p className="text-[24px] font-light text-center text-[#BD2F2C]">
          Assisted the client in evaluating the product's potential across
          various patient segments and equipped the forecast for a successful
          launch planning
        </p>
      </div>
    </div>
  );
};

export default SectionTwo;
