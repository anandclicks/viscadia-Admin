import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import Navbar from "../../components/common/Navbar";
import SectionOne from "../../components/NewsAndPress/SectionOne";
import SectionTwo from "../../components/NewsAndPress/SectionTwo";
import PageBuildingLoader from "../../components/common/PageBuildingLoader.jsx";
import { NewsAndPressContext } from "../../../context/NewsAndPressContext";
import { commonGetApiCall, textareaAutoResize, toCamelCase } from "../../utils/reuseableFunctions.js";
import toast from "react-hot-toast";

const CreatePressReleases = () => {
  const [isEditingPage, setIsEditingPage] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("sectionOne");
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const sectionRef = [{ ref: sectionOneRef, id: "sectionOne" }, { ref: sectionTwoRef, id: "sectionTwo" }];
  const { createPaperAndPressData, setCreatePaperAndPressData, handleSubmit } = useContext(NewsAndPressContext);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      let highestRatio = 0, activeId = "sectionOne";
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > highestRatio && !isScrolling) {
          highestRatio = entry.intersectionRatio; activeId = entry.target.id;
        }
      });
      if (highestRatio > 0) setActiveSection(activeId);
    }, { threshold: [0.2, 0.4, 0.6, 0.8], rootMargin: "0px 0px -20% 0px" });

    const observeSections = () => {
      sectionRef.forEach(({ ref, id }) => { if (ref.current) { ref.current.id = id; observer.observe(ref.current); } });
    };

    const checkInitialVisibility = () => {
      let found = false;
      for (const { ref, id } of sectionRef) {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect(), viewportHeight = window.innerHeight;
          if (rect.top >= 0 && rect.top <= viewportHeight * 0.6 && rect.height > 0) { setActiveSection(id); found = true; break; }
        }
      }
      if (!found) setActiveSection("sectionOne");
    };

    const timer = setTimeout(() => { observeSections(); checkInitialVisibility(); }, 300);
    window.addEventListener("scroll", checkInitialVisibility);
    window.addEventListener("resize", checkInitialVisibility);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", checkInitialVisibility);
      window.removeEventListener("resize", checkInitialVisibility);
      sectionRef.forEach(({ ref }) => { if (ref.current) observer.unobserve(ref.current); });
    };
  }, [isScrolling]);

  const handleScrolling = (ref, sectionId) => {
    setIsScrolling(true);
    setActiveSection(sectionId);
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => setIsScrolling(false), 500);
  };

  const toggleMenu = (evt) => { evt.stopPropagation(); setIsOpen((prev) => !prev); };
  const handlePresStatus = (status) => { setCreatePaperAndPressData((prev) => ({ ...prev, status })); setIsOpen(false); };
  useEffect(() => { const textareas = document.querySelectorAll("textarea"); textareas.forEach((ta) => textareaAutoResize(ta)); }, [createPaperAndPressData]);

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const getData = async () => {
        let response = await commonGetApiCall(`/article/${id}`);
        if (response.success) {
          let convertedData = toCamelCase(response?.data);
          setCreatePaperAndPressData(convertedData);
          setIsEditingPage(true);
          setLoading(false);
        } else {
          toast.error("Couldn't fetch press release!");
          setLoading(false);
        }
      };
      getData();
    } else setLoading(false);
  }, [id]);

  return (
    <>
      {loading && <PageBuildingLoader />}
      {!loading && (
        <div className="h-[100vh] w-full p-4">
          <Navbar />
          <div className="h-[calc(100%-70px)] w-full shadow bg-white rounded-[30px] overflow-hidden">
            <div className="h-[70px] px-4 flex mb-2 items-center justify-between border-b-[1px] border-stone-200">
              <h2 className="text-[23px] font-semibold">{isEditingPage ? "Edit News & Press Release" : "New News & Press Release"}</h2>
              <div className="h-full flex items-center gap-5">
                <div className="relative">
                  <div onClick={toggleMenu} className="z-40 h-[45px] border min-w-[170px] capitalize hover:bg-[#e8e8e85e] flex justify-center items-center gap-2 border-[#E8E8E8] relative transition-all rounded-full cursor-pointer">
                    {createPaperAndPressData?.status === "live" ? "Publish" : createPaperAndPressData?.status}
                    <img className="h-[10px]" src="/icons/aeroBottom.png" />
                  </div>
                  <div onClick={(e) => e.stopPropagation()} className={`${isOpen ? "opacity-100 block" : "opacity-0 hidden"} h-[150px] w-[170px] bg-white shadow-lg absolute left-[0px] mt-3 z-20 border rounded-xl border-[#0000001c] px-2`}>
                    <button type="button" onClick={() => handlePresStatus("draft")} className="w-full h-[28%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]">Mark as Draft</button>
                    <button type="button" onClick={() => handlePresStatus("undraft")} className="w-full h-[28%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]">Undraft</button>
                    <button type="button" onClick={() => handlePresStatus("live")} className="w-full h-[28%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]">Publish</button>
                  </div>
                </div>
                <Link to={"/news-and-press-releases"} className="h-[40px] w-[40px] rounded-full"><img className="h-full w-full rounded-full object-cover" src="/icons/close.png" alt="" /></Link>
              </div>
            </div>
            <div className="flex gap-2 h-[calc(100%-90px)] pb-2">
              <div className="w-[18%] h-full bg-white border-r border-stone-300">
                <ul>
                  <li onClick={() => handleScrolling(sectionOneRef, "sectionOne")} className={`px-4 cursor-pointer text-stone-600 flex items-center text-[18px] h-[45px] ${activeSection === "sectionOne" ? "font-bold activeEventPageSection text-black" : ""}`}><button>Banner</button></li>
                  <li onClick={() => handleScrolling(sectionTwoRef, "sectionTwo")} className={`px-4 cursor-pointer text-stone-600 flex items-center text-[18px] h-[45px] ${activeSection === "sectionTwo" ? "font-bold activeEventPageSection text-black" : ""}`}><button>Section Two</button></li>
                </ul>
              </div>
              <form onSubmit={(evt) => handleSubmit(evt, isEditingPage, id)} className="w-[82%] h-full overflow-scroll p-3 outletWrapper">
                <div ref={sectionOneRef} id="sectionOne"><SectionOne /></div>
                <div ref={sectionTwoRef} id="sectionTwo"><SectionTwo /></div>
                <div className="flex w-full justify-end gap-5">
                  <Link to={'/news-and-press-releases'} className="bg-[#FFFFFF] border-[1px] border-[#E8E8E8] shadow hover:bg-[#e8e8e88e] transition-all p-2 rounded-full font-medium px-9 text-[17px] mt-5">Cancel</Link>
                  <button className="grediantBg text-white p-2 rounded-full font-medium px-9 text-[17px] mt-5">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CreatePressReleases;
