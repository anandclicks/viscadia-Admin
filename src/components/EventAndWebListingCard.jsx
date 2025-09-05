import React, { useState } from "react";

const EventAndWebListingCard = () => {
    const [isActionMenuOpen, setisActionMenuOpen] = useState(false)
    const handleActionMenu = (evt)=>{
        console.log(evt);
        
        evt.stopPropagation()
        setisActionMenuOpen(true)
    }
  return (
    <div onClick={()=> setisActionMenuOpen(false)} className="w-full h-[200px]  rounded-[30px] flex fsTwo shadow-[0px_0px_3px_#0000000f] border border-[#f1f1f1]">
      <img
        className="w-[25%] h-full rounded-[30px]"
        src="./testingImg/one.jpg"
        alt=""
      />
      <div className="w-[75%] h-full px-5 flex flex-col justify-center">
        <div className="w-full flex justify-between mb-2">
            <h2 className="text-[25px] font-semibold ">Intellus Institute 2025</h2>
           <div className="relative">
             <button onClick={(evt)=> handleActionMenu(evt)} className="hover:text-[#BE2F2B] text-[30px] relative">
                <i className="ri-more-2-fill"></i>
            </button>
            <div className={`${isActionMenuOpen ? "opacity-100 block" : "opacity-0 hidden"} h-[200px] w-[170px] bg-white shadow-lg absolute left-[-150px] border rounded-xl border-[#0000001c] px-2`}>
                    <button className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">Edit</button>
                    <button className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">Mark as Draft</button>
                    <button className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">Publish</button>
                    <button className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">Preview</button>
             </div>
           </div>
        </div>
        <p className="text-[17px] leading-[20px]">
          The Intellus Institute 2025 is a premier gathering for healthcare
          insights and analytics professionals, bringing together leaders from
          pharma, biotech, and diagnostics to drive innovation and impact. The
          program features keynotes, interactive workshops, panel discussions,
          and networking, covering topics such as generative AI in research,
          integrated insights for strategic decision-making, cultural
          considerations in healthcare communication, and real-world evidence
          integration.
        </p>
      </div>
    </div>
  );
};

export default EventAndWebListingCard;
