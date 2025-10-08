import React, { useContext, forwardRef } from "react";
import { NewsAndPressContext } from "../../../context/NewsAndPressContext";

const SectionOne = forwardRef((props, ref) => {
  const { handlePaperAndPressInputs, createPaperAndPressData, setCreatePaperAndPressData } = useContext(NewsAndPressContext);
  const autoResize = (e) => { e.target.style.height = "24px"; e.target.style.height = e.target.scrollHeight + "px"; };
  const handleSectionOneStatus = () => setCreatePaperAndPressData((prev) => ({ ...prev, sectionOneStatus: !prev?.sectionOneStatus }));
  console.log(createPaperAndPressData);
  
  return (
    <div ref={ref} className="min-h-[500px] w-full shadow my-3">
      <div className="p-5">
        <div className="w-full">
          <textarea
          required
            placeholder="Enter Title"
            style={{ height: "30px" }}
            name="title"
            value={createPaperAndPressData?.title}
            className="w-full outline-0 placeholder:text-black text-black border-0 resize-none overflow-hidden text-[23px]"
            onInput={(e) => { autoResize(e); handlePaperAndPressInputs(e); }}
          />
        </div>
        <div className="flex gap-2 justify-start">
          <div className="w-[150px] border-r-[1px] border-stone-400 h-[20px]">
            <textarea
            required
              placeholder="Enter Month Date, Year"
              style={{ height: "25px" }}
              name="date"
              value={createPaperAndPressData?.date}
              className="w-full outline-0 placeholder:text-black text-black border-0 resize-none overflow-hidden text-[14px]"
              onInput={(e) => { autoResize(e); handlePaperAndPressInputs(e); }}
            />
          </div>
          <div className="border-r-[1px] border-stone-400 w-[95px] h-[20px]">
            <textarea
              required
              placeholder="Press Release"
              style={{ height: "25px" }}
              name="type"
              value={createPaperAndPressData?.type}
              className="w-full outline-0 placeholder:text-black text-black border-0 resize-none overflow-hidden text-[14px]"
              onInput={(e) => { autoResize(e); handlePaperAndPressInputs(e); }}
            />
          </div>
          <div className="border-r-[1px] border-stone-400 w-[95px] h-[20px]">
            <textarea
              required
              placeholder="2-minute read"
              style={{ height: "25px" }}
              name="duration"
              value={createPaperAndPressData?.duration}
              className="w-full outline-0 placeholder:text-black text-black border-0 resize-none overflow-hidden text-[14px]"
              onInput={(e) => { autoResize(e); handlePaperAndPressInputs(e); }}
            />
          </div>
        </div>
      </div>
      <div className="h-[400px] w-full bg-[#FFF8F8] border-[1px] relative border-dashed border-[#BD2F2C]">
        <div className="px-10 pt-10 z-30 flex justify-end gap-2 items-center absolute top-0 end-0">
          <p className="text-white">{createPaperAndPressData?.sectionOneStatus ? "Hide" : "Unhide"}</p>
          <button
            type="button"
            onClick={handleSectionOneStatus}
            className={`w-[80px] transition-all duration-200 ${createPaperAndPressData?.sectionOneStatus ? "bg-[#BD2F2C]" : "bg-gray-400"} h-full rounded-full p-1 cursor-pointer flex items-center`}
          >
            <div className={`h-[30px] w-[30px] transition-all rounded-full ${createPaperAndPressData?.sectionOneStatus ? "translate-x-0 bg-[#fff]" : "translate-x-10 bg-[#BD2F2C]"}`}></div>
          </button>
        </div>
        <div className="h-full w-full relative">
          <div className="flex h-full w-full relative z-10">
            <div className="h-full w-full flex justify-center items-center flex-col relative">
              <input onInput={handlePaperAndPressInputs} required={!createPaperAndPressData?.sectionOneImage && true} type="file" name="sectionOneImage" className="absolute left-0 top-0 h-full w-full z-30 opacity-0 cursor-pointer" />
             {!createPaperAndPressData?.sectionOneImage &&  <div className="flex flex-col items-center justify-center">
                <img src="/icons/upload.png" alt="" />
                <h3 className="text-[#BD2F2C] mt-2 font-semibold">Upload Logo</h3>
              </div>}
              {createPaperAndPressData?.sectionOneImage && <img className="h-full w-full object-contain" src={createPaperAndPressData?.sectionOneImage}/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SectionOne;
