import React, { useState } from "react";

const SectionThree = () => {
  const [speakersPreviewImg, setSpeakersPreviewImg] = useState([]);
  const handleSpeakersImage = (evt) => {
    const file = evt.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setLogoPreview(imageUrl);
    }
  };
  return (
    <div className="h-[500px] w-full mt-10 pt-10">
        <h2 className="text-[40px] font-light text-center">Speaker</h2>
      <div className="flex min-h-[80%] justify-center gap-5 items-center">
        <div>
          <div className="flex gap-2 h-full items-center w-[230px]">
            <div className="h-[200px] w-[200px] rounded-full border border-[#960000] border-dashed overflow-hidden flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center bg-[#9600001c] h-full w-full">
                <img src="../icons/upload.png" alt="" />
                <h3 className="text-[#960000] font-semibold mt-2">
                  Upload Logo
                </h3>
              </div>
              <img src="" alt="" />
            </div>
          </div>
          <button className="mainBg text-white p-2 rounded-full font-medium px-10 text-[21px] mt-5">
            <i className="ri-add-line"></i> Add More
          </button>
        </div>
        <div>
          <div className="flex items-center my-2">
            <input
              type="text"
              placeholder="Speaker Name"
              className="generalCssForInputs text-[23px] text-[#960000] placeholder:text-[#960000] "
            />
            <button className="mainBg text-white p-2 rounded-full  px-6 text-[13px]">
              <i className="ri-add-line"></i> Add More
            </button>
          </div>
          <div className="flex items-center my-2">
            <input
              type="text"
              placeholder="Designation"
              className="generalCssForInputs text-[23px] text-[#960000] placeholder:text-[#960000] "
            />
            <button className="mainBg text-white p-2 rounded-full  px-6 text-[13px]">
              <i className="ri-add-line"></i> Add More
            </button>
          </div>
          <div className="flex items-center my-2">
            <input
              type="text"
              placeholder="Topic"
              className="generalCssForInputs text-[23px] text-[#960000] placeholder:text-[#960000] "
            />
          </div>
          <div className="flex items-center my-2">
            <input
              type="text"
              placeholder="Date"
              className="generalCssForInputs text-[23px] text-[#960000] placeholder:text-[#960000] "
            />
          </div>
          <div className="flex items-center my-2">
            <input
              type="text"
              placeholder="Time"
              className="generalCssForInputs text-[23px] text-[#960000] placeholder:text-[#960000] "
            />
          </div>
           <button className="mainBg cursor-pointer text-white p-2 rounded-none px-10 text-[21px] mt-5">
          Agenda
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
