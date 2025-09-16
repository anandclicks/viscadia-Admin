import React, { useContext, useState } from "react";
import { WebinarContext } from "../../../context/WebinarPageContext";

const SectionFour = ({ref}) => {
  const [speakerStatus,setSpeakerStatus] = useState(false)
  const { webinarCreateData,functionForAddingSpeakers,handleSpeakersChnages,hanldeWebinarInputsChanges} = useContext(WebinarContext)

  return (
    <div ref={ref}  className="h-[400px] w-full mt-10 pt-5 shadow mb-8">
      <div className="px-10  flex justify-end gap-2 items-center">
        <p>{!speakerStatus ? "Unhide" : "Hide"}</p>
        <button onClick={()=> setSpeakerStatus((prev)=> !prev)} className={`w-[80px] transition-all duration-200 grediantBg h-full rounded-full p-1 cursor-pointer flex items-center`}>
          <div className={`h-[30px] w-[30px] transition-all bg-white rounded-full  ${speakerStatus ? "translate-x-0" : " translate-x-10"}`}></div>
        </button>
      </div>
      <h2 className="text-[40px] font-light text-center">Speaker</h2>
      <div className="flex min-h-[25%] justify-end px-10 gap-5 items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-2 h-full items-center justify-center min-w-[230px]">
            {webinarCreateData?.speaker.map((el, index) => (
              <div key={index} className="h-[160px] relative w-[160px] rounded-full border border-[#BD2F2C] border-dashed overflow-hidden flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center relative bg-[#BD2F2C1c] h-full w-full">
                  {el?.url && <img className="h-full w-full object-cover absolute z-10" src="" alt="" />}
                  <div className="relative flex flex-col justify-center items-center bg-[#FFF5F5] h-full w-full">
                    <img src="../icons/upload.png" alt="" />
                    <h3 className="text-[#BD2F2C] mt-2">Upload Logo</h3>
                    {el.image && (
                    <img
                      src={URL.createObjectURL(el.image)}
                      className="w-full object-cover absolute z-10 h-full"
                      alt=""
                    />
                  )}
                  </div>
                </div>
                <input onChange={(evt)=> handleSpeakersChnages(evt,index)} type="file" className="h-full w-full z-20 absolute cursor-pointer opacity-0" name="image" />
              </div>
            ))}
          </div>
        
        </div>
        <div className="flex w-[55%] justify-between">
          <div>
            <div className="flex items-center my-2">
              {webinarCreateData?.speaker.map((el,index)=>(
               <div key={index} className="pe-2">
               <input type="text" onInput={(evt)=> handleSpeakersChnages(evt,index)} value={el.fullName} name="fullName" placeholder="Speaker Name" className="generalCssForInputs w-[130px] text-[19px] text-[#BD2F2C] placeholder:text-[#BD2F2C]" />
                {index !== webinarCreateData.speaker.length -1 && '& '}
                </div>
              ))}
          </div>
          <div className="flex items-center my-2">
            {webinarCreateData?.speaker.map((el,index)=> (
              <div key={index} className="pe-2">
                <input value={el.designation} onInput={(evt)=> handleSpeakersChnages(evt,index)} name="designation" type="text" placeholder="Designation" className="generalCssForInputs w-[110px] text-[19px] text-black placeholder:text-black" />
                {index !== webinarCreateData?.speaker?.length -1 && "&"}
                </div>
            ))}
          </div>
          
          </div>
          <div>
             <button onClick={functionForAddingSpeakers} className="grediantBg text-white p-2 rounded-full font-medium px-8 text-[15px] mt-5" >
            <i className="ri-add-line"></i> Add More
          </button>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-7">
         <textarea name="description" value={webinarCreateData?.description} onInput={(evt)=> hanldeWebinarInputsChanges(evt)} placeholder="Description" className="w-[70%] placeholder:text-center placeholder:text-black  outline-0 border-0" id=""></textarea>
      </div>
    </div>
  );
};

export default SectionFour;
