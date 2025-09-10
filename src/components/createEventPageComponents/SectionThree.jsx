import React, { useContext, useState } from "react";
import { EventPageContext } from "../../../context/EventPageContext";

const SectionThree = () => {
  const [speakerStatus,setSpeakerStatus] = useState(false)

  const [speakersPreviewImg, setSpeakersPreviewImg] = useState([{ name: "speaker1", url: "" }]);
  const handleSpeakersImage = (evt) => {
    const file = evt.target.files[0];
    const speakerName = evt.target.name;
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSpeakersPreviewImg((prev) =>
        prev.map((item) => (item.name === speakerName ? { ...item, url: imageUrl } : item)));
    }
  };

  const handleAddSpeaker = () => {
    setSpeakersPreviewImg((prev) => [...prev, { name: `speaker${prev.length + 1}`, url: "" }]);
  };

  // getting value and funtion to add data into gloabla context variable 
  const {createEventFormData, setCreateEventFormData} = useContext(EventPageContext)

  return (
    <div className="h-[500px] w-full mt-10 pt-5 shadow mb-8">
      <div className="px-10  flex justify-end gap-2 items-center">
        <p>{!speakerStatus ? "Unhide" : "Hide"}</p>
        <button onClick={()=> setSpeakerStatus((prev)=> !prev)} className={`w-[80px] transition-all duration-200 grediantBg h-full rounded-full p-1 cursor-pointer flex items-center`}>
          <div className={`h-[30px] w-[30px] transition-all bg-white rounded-full  ${speakerStatus ? "translate-x-0" : " translate-x-10"}`}></div>
        </button>
      </div>
      <h2 className="text-[40px] font-light text-center">Speaker</h2>
      <div className="flex min-h-[55%] justify-end px-10 gap-5 items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-2 h-full items-center justify-center min-w-[230px]">
            {speakersPreviewImg.map((el, index) => (
              <div key={index} className="h-[160px] relative w-[160px] rounded-full border border-[#960000] border-dashed overflow-hidden flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center relative bg-[#9600001c] h-full w-full">
                  {el?.url && <img className="h-full w-full object-cover absolute z-10" src={el.url} alt="" />}
                  <div className="relative flex flex-col justify-center items-center bg-[#FFF5F5] h-full w-full">
                    <img src="../icons/upload.png" alt="" />
                    <h3 className="text-[#960000] mt-2">Upload Logo</h3>
                  </div>
                </div>
                <input onChange={handleSpeakersImage} type="file" className="h-full w-full z-20 absolute cursor-pointer opacity-0" name={`speaker${index + 1}`} />
              </div>
            ))}
          </div>
        
        </div>
        <div className="flex w-[55%] justify-between">
          <div>
            <div className="flex items-center my-2">
            <input type="text" placeholder="Speaker Name" className="generalCssForInputs w-[130px] text-[19px] text-[#960000] placeholder:text-[#960000]" />
          </div>
          <div className="flex items-center my-2">
            <input type="text" placeholder="Designation" className="generalCssForInputs w-[110px] text-[19px] text-black placeholder:text-black" />
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
          <div>
                  <button className="grediantBg text-white p-2 rounded-full font-medium px-8 text-[15px] mt-5" onClick={handleAddSpeaker}>
            <i className="ri-add-line"></i> Add More
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
