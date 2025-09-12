import { useContext } from "react";
import { WebinarContext } from "../../../context/WebinarPageContext";

const SectionOne = () => {
  const {hanldeWebinarInputsChanges,webinarCreateData} = useContext(WebinarContext)
  
  return (
    <div className="h-[340px] w-full shadow relative flex">
      <div className="EventPagesectionOne w-full h-[340px] object-cover absolute z-10">
        <img className="h-full w-full object-cover" src="../images/SectionOneBg.png" alt="" />
      </div> 
      <div className="w-[60%] pt-10 h-full px-7 flex flex-col gap-10 relative z-20">
        <div className="">
          <div className="h-[40px] w-full">
            <input onInput={(evt)=> hanldeWebinarInputsChanges(evt)} value={webinarCreateData?.headingOne}  placeholder="Enter Heading" className="w-full h-full outline-0 border-0 text-[#000000] placeholder:text-[#000000]  text-[30px]" type="text" name="headingOne" id="" />
          </div>
            <textarea  onInput={(evt)=> hanldeWebinarInputsChanges(evt)} value={webinarCreateData?.subHeadingOne} placeholder="Enter Heading" className="w-full mt-3 outline-0 border-0 text-[#000000] placeholder:text-[#000000] placeholder:font-light  text-[20px]" type="text" name="subHeading" id=""></textarea>
          <button className="grediantBg cursor-pointer text-white p-2 rounded-none px-8 text-[16px] ">View Webinar</button>
        </div>
      </div>
      <div className="w-[42%] border-dashed border-[#960000] border h-full rightSide  bg-amber-400 z-0 flex justify-end relative">
        <div className="absolute left-0 top-0 h-full w-full bg-[#FFF8F8] flex justify-center items-center flex-col">
          <img src="../icons/upload.png" alt="" />
          <h3 className="text-[#960000]  mt-2">Upload Image</h3>
        </div>
        {webinarCreateData?.imageOne && (
          <div className=" left-0 z-10 top-0 h-full overflow-hidden w-full bg-white flex justify-center items-center flex-col">
            <img src={URL.createObjectURL(webinarCreateData?.imageOne)} className="h-full w-full  object-cover" alt="" />
          </div>
        )}
      </div>
      <input onChange={(evt)=> hanldeWebinarInputsChanges(evt)}  type="file" className="opacity-0 h-full end-0 cursor-pointer absolute z-10 w-[40%]" accept="image/*" name="imageOne" id="" />
    </div>
  );
};
export default SectionOne;
