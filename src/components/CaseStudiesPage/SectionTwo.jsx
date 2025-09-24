import React from "react";

const SectionTwo = () => {
  const autoResize = (ref) => {
    if (ref.current) {
      ref.current.style.height = "30px";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  };
  return (
    <div className="relative h-[460px]">
      <div className="h-[330px] flex w-full bg-white shadow my-8 relative z-20">
        <div className="h-full w-[35%] bg-[#FFF8F8]">
          <div className="flex h-full w-full relative border border-dashed border-[#BD2F2C] flex-col items-center justify-center">
            <input
              className="h-full w-full opacity-0 cursor-pointer left-0 top-0 absolute z-20"
              type="file"
              name=""
              id=""
            />
            <img src="/icons/upload.png" alt="" />
            <h3 className="text-[#BD2F2C] mt-2 font-semibold">Upload Logo</h3>
          </div>
        </div>
        <div className="w-[65%] h-full p-14">
          <textarea
            placeholder="Enter Heading"
            className="w-full h-[44px] placeholder:text-black text-black outline-0 border-0 resize-none overflow-hidden text-[28px]"
            name=""
            id=""
          ></textarea>
          <div className="flex items-center h-[40px]">
            <div className="h-[30px] flex items-center gap-2 my-1">
              <input
                onLoad={autoResize}
                onInput={autoResize}
                placeholder="Enter Sub Heading"
                className="w-[80%] h-full outline-0 border-0 text-black placeholder:text-black text-[18px] font-light"
                name="keyPoint"
                type="text"
              />
            </div>

            <button className="bg-[#BD2F2C] text-[#fff] p-[4px] rounded-full font-medium px-4 text-[13px] ">
              <i className="ri-add-line"></i> Add More
            </button>
          </div>
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
