import React, { useContext, useState } from "react";
import { WebinarContext } from "../../../context/WebinarPageContext";

function SectionThree({ref}) {
  const [speakerStatus, setSpeakerStatus] = useState(false);
  const {hanldeWebinarInputsChanges,webinarCreateData} = useContext(WebinarContext)
  return (
    <div ref={ref}  className="min-h-[300px] w-full bg-white shadow mt-7 p-5">
     <div className="w-full flex justify-end">
     <div className="text-[30px] font-light">Webinar Video</div>
      <div className="px-10 h-[40px] w-[40%] flex justify-end gap-2 items-center">
        <p>{!speakerStatus ? "Unhide" : "Hide"}</p>
        <button
          onClick={() => setSpeakerStatus((prev) => !prev)}
          className={`w-[80px] transition-all duration-200 grediantBg h-full rounded-full p-1 cursor-pointer flex items-center`}
        >
          <div
            className={`h-[30px] w-[30px] transition-all bg-white rounded-full  ${
              speakerStatus ? "translate-x-0" : " translate-x-10"
            }`}
          ></div>
        </button>
      </div>
     </div>
     <div className="w-full h-[270px] flex justify-center items-center">
          <div className="h-[130px] w-[240px] bg-amber-200 relative">
            <div className="absolute border border-dashed border-[#BD2F2C] left-0 top-0 h-full w-full bg-[#FFF5F5] flex justify-center items-center flex-col">
              <img src="../icons/upload.png" alt="" />
              <h3 className="text-[#BD2F2C]  mt-2">Upload Video</h3>
            </div>
            {webinarCreateData?.webibarVideo && (
              <div className="absolute left-0 top-0 h-full overflow-hidden w-full bg-white flex justify-center items-center flex-col">
                <video autoPlay muted loop src={webinarCreateData?.webibarVideo} className="h-full w-full object-cover" alt="" />

              </div>
            )}
            <input onChange={(evt)=> hanldeWebinarInputsChanges(evt)} type="file" className="opacity-0 h-full w-full cursor-pointer relative z-20" name="webibarVideo" accept="video/*" />
          </div>
     </div>
    </div>
  );
}

export default SectionThree;
