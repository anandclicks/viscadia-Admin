import { Link } from "react-router-dom";
import Navbar from "../common/Navbar.jsx";
import { useContext, useEffect, useRef, useState } from "react";
import SectionOne from "./SectionOne.jsx";
import SectionTwo from "./SectionTwo.jsx";
import SectionThree from "./SectionThree.jsx";
import { LeadershipContext } from "../../../context/LeadershipContext.jsx";

const CreateLeadership = () => {``
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (evt) => { evt.stopPropagation(); setIsOpen((prev) => !prev); };
  const {handleSubmit,setCreateLeadershipData} = useContext(LeadershipContext)

  const [activeSection, setActiveSection] = useState(null);
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null);
  const sectionRef = [
    { ref: sectionOneRef, id: "sectionOne" },
    { ref: sectionTwoRef, id: "sectionTwo" },
    { ref: sectionThreeRef, id: "sectionThree" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
      },
      { threshold: 0.4 }
    );
    sectionRef.forEach(({ ref, id }) => { if (ref.current) { ref.current.id = id; observer.observe(ref.current); } });
    return () => { sectionRef.forEach(({ ref }) => { if (ref.current) observer.unobserve(ref.current); }); };
  }, []);

  const handleScrolling = (ref) => { ref.current?.scrollIntoView({ behavior: "smooth", block: "start" }); };



    const handleLeadershipStatus = (state) => {
    setCreateLeadershipData((prev) => ({ ...prev, status: state }));
    setIsOpen(false);
  };

  return (
    <div className="h-[100vh] w-full p-4">
      <Navbar />
      <div className="h-[calc(100%-70px)] w-full shadow bg-white rounded-[30px] overflow-hidden">
        <div className="h-[70px] px-4 flex items-center justify-between">
          <h2 className="text-[23px] font-semibold">New Leadership Page</h2>
          <div className="h-full flex items-center gap-5">
            <div className="relative">
              <div onClick={toggleMenu} className="z-40 h-[45px] border min-w-[170px] capitalize hover:bg-[#e8e8e85e] flex justify-center items-center gap-2 border-[#E8E8E8] relative transition-all rounded-full cursor-pointer">
                Draft
                <img className="h-[10px]" src="/icons/aeroBottom.png" />
              </div>
              <div onClick={(e) => e.stopPropagation()} className={`${isOpen ? "opacity-100 block" : "opacity-0 hidden"} h-[150px] w-[170px] bg-white shadow-lg absolute left-[0px] mt-3 z-20 border rounded-xl border-[#0000001c] px-2`}>
                <button type="button" onClick={() => handleLeadershipStatus("draft")} className="w-full h-[28%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]">Mark as Draft</button>
                <button type="button" onClick={() => handleLeadershipStatus("undraft")} className="w-full h-[28%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]">Undraft</button>
                <button type="button" onClick={() => handleLeadershipStatus("live")} className="w-full h-[28%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]">Publish</button>
              </div>
            </div>
            <Link to={"/leadership"} className="h-[40px] w-[40px] rounded-full">
              <img className="h-full w-full rounded-full object-cover" src="../icons/close.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="flex gap-2 h-[calc(100%-70px)] pb-2">
          <div className="w-[18%] h-full bg-white border-r border-stone-300">
            <ul>
              <li onClick={() => handleScrolling(sectionOneRef)} className={`px-4 cursor-pointer text-stone-600 flex items-center text-[18px] h-[45px] ${activeSection === "sectionOne" ? "font-bold activeEventPageSection text-black" : ""}`}><button>Banner</button></li>
              <li onClick={() => handleScrolling(sectionTwoRef)} className={`px-4 cursor-pointer text-stone-600 flex items-center text-[18px] h-[45px] ${activeSection === "sectionTwo" ? "font-bold activeEventPageSection text-black" : ""}`}><button>Experience</button></li>
              <li onClick={() => handleScrolling(sectionThreeRef)} className={`px-4 cursor-pointer text-stone-600 flex items-center text-[18px] h-[45px] ${activeSection === "sectionThree" ? "font-bold activeEventPageSection text-black" : ""}`}><button>Section Three</button></li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="w-[82%] h-full overflow-scroll p-3 outletWrapper">
            <div ref={sectionOneRef}><SectionOne /></div>
            <div ref={sectionTwoRef}><SectionTwo /></div>
            <div ref={sectionThreeRef}><SectionThree /></div>
            <div className="flex w-full justify-end gap-5">
              <button className="bg-[#FFFFFF] border-[1px] border-[#E8E8E8] shadow hover:bg-[#e8e8e88e] transition-all p-2 rounded-full font-medium px-9 text-[17px] mt-5">Cancle</button>
              <button className="grediantBg text-white p-2 rounded-full font-medium px-9 text-[17px] mt-5">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateLeadership;
