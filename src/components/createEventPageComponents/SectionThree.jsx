import React, { useState } from "react";

const SectionThree = () => {
  const [speakersPreviewImg, setSpeakersPreviewImg] = useState([{ name: "speaker1", url: "" }]);

  const handleSpeakersImage = (evt) => {
    const file = evt.target.files[0];
    const speakerName = evt.target.name;
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSpeakersPreviewImg((prev) =>
        prev.map((item) => (item.name === speakerName ? { ...item, url: imageUrl } : item))
      );
    }
  };

  const handleAddSpeaker = () => {
    setSpeakersPreviewImg((prev) => [...prev, { name: `speaker${prev.length + 1}`, url: "" }]);
  };

  return (
    <div className="h-[500px] w-full mt-10 pt-10 shadow mb-8">
      <h2 className="text-[40px] font-light text-center">Speaker</h2>
      <div className="flex min-h-[80%] justify-center gap-5 items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-2 h-full items-center justify-center min-w-[230px]">
            {speakersPreviewImg.map((el, index) => (
              <div key={index} className="h-[160px] relative w-[160px] rounded-full border border-[#960000] border-dashed overflow-hidden flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center relative bg-[#9600001c] h-full w-full">
                  {el?.url && <img className="h-full w-full object-cover absolute z-10" src={el.url} alt="" />}
                  <div className="relative flex flex-col justify-center items-center bg-[#FFF5F5] h-full w-full">
                    <img src="../icons/upload.png" alt="" />
                    <h3 className="text-[#960000] font-semibold mt-2">Upload Logo</h3>
                  </div>
                </div>
                <input onChange={handleSpeakersImage} type="file" className="h-full w-full z-20 absolute cursor-pointer opacity-0" name={`speaker${index + 1}`} />
              </div>
            ))}
          </div>
          <button className="grediantBg text-white p-2 rounded-full font-medium px-8 text-[15px] mt-5" onClick={handleAddSpeaker}>
            <i className="ri-add-line"></i> Add More
          </button>
        </div>
        <div>
          <div className="flex items-center my-2">
            <input type="text" placeholder="Speaker Name" className="generalCssForInputs w-[130px] text-[19px] text-[#960000] placeholder:text-[#960000]" />
            <button className="grediantBg text-white p-2 rounded-full px-6 text-[13px]"><i className="ri-add-line"></i> Add More</button>
          </div>
          <div className="flex items-center my-2">
            <input type="text" placeholder="Designation" className="generalCssForInputs w-[110px] text-[19px] text-black placeholder:text-black" />
            <button className="grediantBg text-white p-2 rounded-full px-6 text-[13px]"><i className="ri-add-line"></i> Add More</button>
          </div>
          <div className="flex items-center my-2">
            <input type="text" placeholder="Topic" className="generalCssForInputs text-[19px] text-black placeholder:text-black" />
          </div>
          <div className="flex items-center my-2">
            <input type="text" placeholder="Date" className="generalCssForInputs text-[19px] text-black placeholder:text-black" />
          </div>
          <div className="flex items-center my-2">
            <input type="text" placeholder="Time" className="generalCssForInputs text-[19px] text-black placeholder:text-black" />
          </div>
          <button className="grediantBg cursor-pointer text-white p-2 rounded-none px-8 text-[16px] mt-5">Agenda</button>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
