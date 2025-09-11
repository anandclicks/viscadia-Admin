import { useContext } from "react";
import { WebinarContext } from "../../../context/WebinarPageContext";

const SectionTwo = () => {
   const {
    hanldeWebinarInputsChanges,
    webinarCreateData,
    functionForAddingPoints,
    functionForAddingSpeakers
  } = useContext(WebinarContext)
    console.log(webinarCreateData);
  
  return (
    <div className="h-[270px] w-full shadow relative flex mt-10 overflow-hidden">
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
            {webinarCreateData?.imageTwo && (
              <div className="absolute left-0 top-0 h-full overflow-hidden w-full bg-white flex justify-center items-center flex-col">
                <img src={URL.createObjectURL(webinarCreateData?.imageTwo)} className="h-full w-full object-cover" alt="" />
              </div>
            )}
            <input onChange={(evt)=> hanldeWebinarInputsChanges(evt)} type="file" className="opacity-0 h-full w-full cursor-pointer relative z-20" name="imageTwo" accept="image/*" />
          </div>
        </div>
      </div>
      <div className="w-[60%] h-full rightSide bg-amber-400 flex items-center relative">
        <div className="w-[100%] relative z-10 flex justify-end">
          <div className="w-[80%]">
            <div className="h-[60px]">
              <input placeholder="HEADING" className="w-full h-full outline-0 border-0 text-white placeholder:text-white text-[31px] font-light" name="heading" type="text" />
            </div>
           <div>
             {webinarCreateData?.keyPoints.map((_,index)=>(
             <div key={index} className="h-[30px] flex items-center gap-2 my-1">
             <img className="h-[80%] object-cover" src="../icons/keyPoints.png" alt="" /> <input placeholder="Key Points" className="w-[80%] h-full outline-0 border-0 text-white placeholder:text-white text-[21px] font-light" name="subHeading" type="text" />
            </div>
           ))}
            
            <button onClick={functionForAddingPoints} className="bg-white text-black p-2 rounded-full font-medium px-8 text-[13px] mt-5">
          <i className="ri-add-line"></i> Add More
        </button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionTwo;
