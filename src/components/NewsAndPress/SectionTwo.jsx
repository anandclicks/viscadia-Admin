import React from "react";

const SectionTwo = ({ref}) => {
  const autoResize = (e) => {
    e.target.style.height = "30px";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <div ref={ref}>
      <div className="h-[280px] w-full shadow my-5">
        <div className="w-full p-4">
          <textarea
            placeholder="Enter Details"
            style={{ height: "30px" }}
            name=""
            className={`w-full outline-0 placeholder:text-stone-500 text-stone-500 border-0 resize-none overflow-hidden text-[21px]`}
            onInput={(e) => {
              autoResize(e);
            }}
          />
        </div>
        <div className="w-full p-4">
          <textarea
            placeholder="About Viscadia"
            style={{ height: "30px" }}
            name=""
            className={`w-full outline-0 placeholder:text-black text-text-black border-0 resize-none overflow-hidden text-[26px]`}
            onInput={(e) => {
              autoResize(e);
            }}
          />
          <textarea
            placeholder="Enter Details"
            style={{ height: "30px" }}
            name=""
            className={`w-full outline-0 placeholder:text-stone-500 text-stone-500 border-0 resize-none overflow-hidden text-[21px]`}
            onInput={(e) => {
              autoResize(e);
            }}
          />
        </div>
      </div>

      <div className="min-h-[220px] w-full flex shadow my-5">
        <div className="p-5 h-full w-[60%] pe-10">
          <textarea
            placeholder="Enter Details"
            style={{ height: "30px" }}
            name=""
            className={`w-full outline-0 placeholder:text-stone-500 text-stone-500 border-0 resize-none overflow-hidden text-[21px]`}
            onInput={(e) => {
              autoResize(e);
            }}
          />
        </div>
        <div className="min-h-[280px] w-[40%] py-5">
          <p className="text-[23px] text-black">Contact</p>
          <div className="mt-2">
            <textarea
              placeholder="Enter Hyper Link"
              style={{ height: "30px" }}
              name=""
              className={`w-full outline-0 placeholder:text-stone-500 text-stone-500 border-0 resize-none overflow-hidden text-[20px]`}
              onInput={(e) => {
                autoResize(e);
              }}
            />
          </div>

          <div className="mt-2">
           <p className="text-[20px] text-black">Viscadia Forecasting Confidence</p>
           <p className="text-[20px] text-black">Visit us on social media:</p>
            <textarea
              placeholder="Enter Hyper Link"
              style={{ height: "30px" }}
              name=""
              className={`w-full outline-0 placeholder:text-stone-500 text-stone-500 border-0 mt-2 resize-none overflow-hidden text-[18px]`}
              onInput={(e) => {
                autoResize(e);
              }}
            />
            <button className="bg-[#BD2F2C] text-[#fff] p-[4px] rounded-full font-medium px-4 text-[13px]">
                  <i className="ri-add-line"></i> Add More
                </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
