import React, { useContext, useState } from "react";
import { EventPageContext } from "../../../context/EventPageContext";
const SectionTwo = () => {
  const [headingImage, setHeadingImage] = useState(null);
  const handleHeadingImageChange = (evt) => {
    const file = evt.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setHeadingImage(imageUrl);
    }
  };
  
  const {handleEventInputfiledsChanges,createEventFormData} = useContext(EventPageContext)
  
  return (
    <div className="h-[310px] w-full shadow relative flex mt-10 overflow-hidden">
      <div className="EventPagesectionOne w-full h-[101%] object-cover absolute z-10">
        <img className="h-full w-full object-cover" src="../images/sectionTwo.png" alt="" />
      </div>
      <div className="w-[45%] h-full flex flex-col gap-10 relative">
        <div className="w-[100%] h-full">
          <div className="h-full w-full bg-amber-200 relative">
            <div className="absolute border border-dashed border-[#960000] left-0 top-0 h-full w-full bg-[#FFF5F5] flex justify-center items-center flex-col">
              <img src="../icons/upload.png" alt="" />
              <h3 className="text-[#960000]  mt-2">Upload Logo</h3>
            </div>
            {headingImage && (
              <div className="absolute left-0 top-0 h-full overflow-hidden w-full bg-white flex justify-center items-center flex-col">
                <img src={headingImage} className="h-full w-full object-cover" alt="" />
              </div>
            )}
            <input onChange={(evt)=> {
              handleHeadingImageChange(evt)
              handleEventInputfiledsChanges(evt)
            }} type="file" className="opacity-0 h-full w-full cursor-pointer relative z-20" name="headingImage" accept="image/*" />
          </div>
        </div>
      </div>
      <div className="w-[60%] h-full rightSide bg-amber-400 flex items-center relative">
        <div className="w-[100%] relative z-10 flex justify-end">
          <div className="w-[90%]">
            <div className="h-[60px]">
              <input onInput={handleEventInputfiledsChanges} value={createEventFormData?.heading} placeholder="HEADING" className="w-full h-full outline-0 border-0 text-white placeholder:text-white text-[31px] font-light" name="heading" type="text" />
            </div>
            <div className="h-[30px]">
              <input onInput={handleEventInputfiledsChanges} value={createEventFormData?.subHeading} placeholder="Sub Heading" className="w-full h-full outline-0 border-0 text-white placeholder:text-white text-[25px] font-light" name="subHeading" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionTwo;
