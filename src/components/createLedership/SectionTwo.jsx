import React from "react";

const SectionTwo = () => {
  const autoResize = (e) => {
    e.target.style.height = "24px";
    e.target.style.height = e.target.scrollHeight + "px";
  };
  return (
    <div className="h-[250px] w-full bg-[#ECECEC] shadow mt-20 mb-10 flex ">
      <div className="h-full w-[50%] flex flex-col justify-center ps-7">
        <div className="w-full">
          <textarea
            placeholder="Experience"
            style={{ height: "30px" }}
            className={`w-full outline-0 placeholder:text-black text-black border-0 resize-none overflow-hidden text-[21px]`}
            onInput={(e) => {
              autoResize(e);
            }}
          />
        </div>
        <div className="w-full">
          <textarea
            placeholder="Enter Sub Heading"
            style={{ height: "30px" }}
            className={`w-full outline-0 placeholder:text-stone-600 text-text-stone-600-0 resize-none overflow-hidden text-[18px]`}
            onInput={(e) => {
              autoResize(e);
            }}
          />
        </div>
      </div>
      <div className="h-full w-[50%] flex flex-col justify-center">
        <div className="w-full pt-20">
          <textarea
            placeholder="Enter Title"
            style={{ height: "30px" }}
            className={`w-full outline-0 placeholder:text-stone-600 text-stone-600 border-0 resize-none overflow-hidden text-[21px]`}
            onInput={(e) => {
              autoResize(e);
            }}
          />
        </div>
        <div className="w-full">
          <textarea
            placeholder="Enter Company"
            style={{ height: "30px" }}
            className={`w-full outline-0 placeholder:text-stone-600 text-text-stone-600-0 resize-none overflow-hidden text-[18px]`}
            onInput={(e) => {
              autoResize(e);
            }}
          />
        </div>
        <button className="bg-[#BD2F2C] text-[#fff] w-fit p-[4px] rounded-full font-medium px-4 text-[13px]">
          <i className="ri-add-line"></i> Add More
        </button>
      </div>
    </div>
  );
};

export default SectionTwo;
