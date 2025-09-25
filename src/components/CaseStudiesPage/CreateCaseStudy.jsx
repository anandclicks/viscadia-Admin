import { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import { EventPageContext } from "../../../context/EventPageContext";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import Chellenges from "./Chellenges";
import Apporach from "./Apporach";
import Outcomes from "./Outcomes";
import { NewCaseStudyContext } from "../../../context/NewCaseStudyContext";

const CreateCaseStudy = () => {
  const {createCaseStudyData,setCreateStudyData} = useContext(NewCaseStudyContext)
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

  const [activeSection, setActiveSection] = useState(null);
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null);
  const sectionFourRef = useRef(null);
  const sectionFiveRef = useRef(null);

  const sectionRef = [
    { ref: sectionOneRef, id: "sectionOne" },
    { ref: sectionTwoRef, id: "sectionTwo" },
    { ref: sectionThreeRef, id: "sectionThree" },
    { ref: sectionFourRef, id: "sectionFour" },
    { ref: sectionFiveRef, id: "sectionFive" },
  ];

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,  
      }
    );

    sectionRef.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.id = id;
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRef.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const handleScrolling = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };


  const handleStatusChange = (status)=>{
    setCreateStudyData((prev)=> ({...prev,status : status}))
    setIsOpen(false)
  }


  return (
    <div className="h-[100vh] w-full p-4">
      <Navbar />
      <div className="h-[calc(100%-70px)] w-full shadow bg-white rounded-[30px] overflow-hidden">
        {/* Header */}
        <div className="h-[70px] px-4 flex items-center justify-between">
          <h2 className="text-[23px] font-semibold">Events</h2>
          <div className="h-full flex items-center gap-5">
            <div className="relative">
              <div
                onClick={toggleMenu}
                className="z-40 h-[45px] border capitalize min-w-[170px] hover:bg-[#e8e8e85e] flex justify-center items-center gap-2 border-[#E8E8E8] relative transition-all rounded-full cursor-pointer"
              >
                {createCaseStudyData.status === "live" ? "Publish" : createCaseStudyData.status} <img className="h-[10px]" src="../icons/aeroBottom.png" />
              </div>
              <div
                onClick={(e) => e.stopPropagation()}
                className={`${isOpen ? "opacity-100 block" : "opacity-0 hidden"} h-[150px] w-[170px] bg-white shadow-lg absolute left-[0px] mt-3 z-40 border rounded-xl border-[#0000001c] px-2`}
              >
                <button onClick={()=> handleStatusChange("draft")} className="w-full h-[28%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]">Mark as Draft</button>
                <button onClick={()=> handleStatusChange("live")} className="w-full h-[28%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]">Publish</button>
                <button onClick={()=> handleStatusChange("undraft")} className="w-full h-[28%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]">Undraft</button>
                <button  className="w-full h-[28%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]">Preview</button>
              </div>
            </div>
            <Link to={'/case-studies'} className="h-[40px] w-[40px] rounded-full">
              <img className="h-full w-full rounded-full object-cover" src="../icons/close.png" alt="" />
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-2 h-[calc(100%-70px)] pb-2">
          {/* Sidebar */}
          <div className="w-[18%] h-full bg-white border-r border-stone-300">
            <ul>
              <li onClick={() => handleScrolling(sectionOneRef)} className={`px-4 flex items-center text-[18px] h-[45px] cursor-pointer ${activeSection === "sectionOne" ? "activeEventPageSection" : "text-stone-600"}`}>Banner</li>
              <li onClick={() => handleScrolling(sectionTwoRef)} className={`px-4 flex items-center text-[18px] h-[45px] cursor-pointer ${activeSection === "sectionTwo" ? "activeEventPageSection" : "text-stone-600"}`}>Section 2</li>
              <li onClick={() => handleScrolling(sectionThreeRef)} className={`px-4 flex items-center text-[18px] h-[45px] cursor-pointer ${activeSection === "sectionThree" ? "activeEventPageSection" : "text-stone-600"}`}>Challenges</li>
              <li onClick={() => handleScrolling(sectionFourRef)} className={`px-4 flex items-center text-[18px] h-[45px] cursor-pointer ${activeSection === "sectionFour" ? "activeEventPageSection" : "text-stone-600"}`}>Approach</li>
              <li onClick={() => handleScrolling(sectionFiveRef)} className={`px-4 flex items-center text-[18px] h-[45px] cursor-pointer ${activeSection === "sectionFive" ? "activeEventPageSection" : "text-stone-600"}`}>Outcomes</li>
            </ul>
          </div>

          {/* Scrollable Content */}
          <div className="w-[82%] h-full overflow-scroll p-3 outletWrapper">
            <SectionOne ref={sectionOneRef} />
            <SectionTwo ref={sectionTwoRef} />
            <Chellenges ref={sectionThreeRef} />
            <Apporach ref={sectionFourRef} />
            <Outcomes ref={sectionFiveRef} />

            {/* Action Buttons */}
            <div className="flex w-full justify-end gap-5 mt-5">
              <button className="bg-[#FFFFFF] border-[1px] border-[#E8E8E8] shadow hover:bg-[#e8e8e88e] transition-all p-2 rounded-full font-medium px-9 text-[17px]">Cancel</button>
              <button  className="grediantBg text-white p-2 rounded-full font-medium px-9 text-[17px]">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCaseStudy;
