import React from "react";

const SectionOne = ({ ref }) => {
  const autoResize = (e) => {
    e.target.style.height = "24px";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <div ref={ref} className="min-h-[500px] w-full shadow my-3">
      <div className="p-5">
        <div className="w-full">
          <textarea
            placeholder="Enter Title"
            style={{ height: "30px" }}
            name=""
            className={`w-full outline-0 placeholder:text-black text-black border-0 resize-none overflow-hidden text-[23px]`}
            onInput={(e) => {
              autoResize(e);
            }}
          />
        </div>
        <div className="flex gap-2 justify-start">
          <div className="w-[150px] border-r-[1px] border-stone-400 h-[20px]">
            <textarea
              placeholder="Enter Month Date, Year"
              style={{ height: "25px" }}
              name=""
              className={`w-full outline-0 placeholder:text-black text-black border-0 resize-none overflow-hidden text-[14px]`}
              onInput={(e) => {
                autoResize(e);
              }}
            />
          </div>
          <div className=" border-r-[1px] border-stone-400 w-[95px] h-[20px]">
            <textarea
              placeholder="Press Release"
              style={{ height: "25px" }}
              name=""
              className={`w-full outline-0 placeholder:text-black text-black border-0 resize-none overflow-hidden text-[14px]`}
              onInput={(e) => {
                autoResize(e);
              }}
            />
          </div>
          <div className=" border-r-[1px] border-stone-400 w-[95px] h-[20px]">
            <textarea
              placeholder="2-minute read"
              style={{ height: "25px" }}
              name=""
              className={`w-full outline-0 placeholder:text-black text-black border-0 resize-none overflow-hidden text-[14px]`}
              onInput={(e) => {
                autoResize(e);
              }}
            />
          </div>
        </div>
      </div>

      <div className="h-[400px] w-full bg-[#FFF8F8] border-[1px] relative border-dashed border-[#BD2F2C]">
        <div className="px-10 pt-10 z-30 flex justify-end gap-2 items-center absolute top-0 end-0">
          <p className="text-white">{true ? "Hide" : "Unhide"}</p>
          <button
            type="button"
            onClick={() => handleSectionTwoStatus()}
            className={`w-[80px] transition-all duration-200 ${
              true ? "bg-[#BD2F2C]" : "bg-gray-400"
            } h-full rounded-full p-1 cursor-pointer flex items-center`}
          >
            <div
              className={`h-[30px] w-[30px] transition-all  rounded-full ${
                true
                  ? "translate-x-0 bg-[#fff]"
                  : "translate-x-10 bg-[#BD2F2C]" 
              }`}
            ></div>
          </button>
        </div>
        <div className="h-full w-full relative">
          <div className="flex h-full w-full relative z-10">
            <div className="h-full w-full flex justify-center items-center flex-col relative">
              <input
                type="file"
                name="bannerImg"
                className="absolute left-0 top-0 h-full w-full z-30 opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center justify-center">
                <img src="/icons/upload.png" alt="" />
                <h3 className="text-[#BD2F2C] mt-2 font-semibold">
                  Upload Logo
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
