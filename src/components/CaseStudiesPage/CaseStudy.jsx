import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import { EventPageContext } from "../../../context/EventPageContext";
import SectionOne from "./SectionOne";

const CaseStudy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (evt) => {
    evt.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false);
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const {handleSubmit} = useContext(EventPageContext)

  return (
    <div className="h-[100vh] w-full p-4">
      <Navbar />
      <div className="h-[calc(100%-70px)] w-full shadow bg-white rounded-[30px] overflow-hidden">
        <div className="h-[70px] px-4 flex items-center justify-between">
          <h2 className="text-[23px] font-semibold">Events</h2>

          <div className="h-full flex items-center gap-5">
            <div className="relative">
              <div
                onClick={toggleMenu}
                className="z-40 h-[45px] border min-w-[170px] hover:bg-[#e8e8e85e] flex justify-center items-center gap-2 border-[#E8E8E8] relative transition-all rounded-full cursor-pointer"
              >
                Mark as Draft{" "}
                <img className="h-[10px]" src="../icons/aeroBottom.png" />
              </div>

              <div
                onClick={(e) => e.stopPropagation()}
                className={`${
                  isOpen ? "opacity-100 block" : "opacity-0 hidden"
                } h-[200px] w-[170px] bg-white shadow-lg absolute left-[0px] mt-3 z-20 border rounded-xl border-[#0000001c] px-2`}
              >
                <button className="w-full h-[20%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]">
                  Edit
                </button>
                <button className="w-full h-[20%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]">
                  Mark as Draft
                </button>
                <button className="w-full h-[20%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]">
                  Publish
                </button>
                <button className="w-full h-[20%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]">
                  Preview
                </button>
              </div>
            </div>
            <Link to={'/case-studies'} className="h-[40px] w-[40px] rounded-full"><img className="h-full w-full rounded-full object-cover" src="../icons/close.png" alt="" /></Link>
          </div>
        </div>

        <div className="flex gap-2 h-full pb-20">
          <div className="w-[18%] h-full bg-white border-r border-stone-300">
            <ul>
              <li className="px-4 text-stone-600 flex items-center text-[18px] h-[45px] activeEventPageSection">
                Banner
              </li>
              <li className="px-4 text-stone-600 flex items-center text-[18px] h-[45px]">
                Section 2
              </li>
              <li className="px-4 text-stone-600 flex items-center text-[18px] h-[45px]">
                Challenges
              </li>
              <li className="px-4 text-stone-600 flex items-center text-[18px] h-[45px]">
                Approach
              </li>
              <li className="px-4 text-stone-600 flex items-center text-[18px] h-[45px]">
                Ourcomes
              </li>
            </ul>
          </div>
          <div className="w-[82%] h-full overflow-scroll p-3 outletWrapper">
           <SectionOne/>
            {/* <div className="flex w-full justify-end gap-5">
            <button className="bg-[#FFFFFF] border-[1px] border-[#E8E8E8] shadow hover:bg-[#e8e8e88e] transition-all p-2 rounded-full font-medium px-9 text-[17px] mt-5" >
              Cancle
              </button>
            <button onClick={handleSubmit} className="grediantBg text-white p-2 rounded-full font-medium px-9 text-[17px] mt-5" >
              Save
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
