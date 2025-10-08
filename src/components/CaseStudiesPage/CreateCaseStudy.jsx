import { useState, useEffect, useContext, useRef, useLayoutEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../common/Navbar";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import Chellenges from "./Chellenges";
import Apporach from "./Apporach";
import Outcomes from "./Outcomes";
import { NewCaseStudyContext } from "../../../context/NewCaseStudyContext";
import { commonGetApiCall, textareaAutoResize, toCamelCase } from "../../utils/reuseableFunctions";
import PageBuildingLoader from "../common/PageBuildingLoader";

const CreateCaseStudy = () => {
  const { createCaseStudyData, setCreateStudyData, handleSubmit, handleNewCaseStudyInputs } = useContext(NewCaseStudyContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditingPage, setIsEditingPage] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const redirect = useNavigate();

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

  useEffect(() => { const handleClickOutside = () => setIsOpen(false); window.addEventListener("click", handleClickOutside); return () => window.removeEventListener("click", handleClickOutside); }, []);

  const handleScrolling = (ref) => ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  const handleStatusChange = (status) => { setCreateStudyData((prev) => ({ ...prev, status })); setIsOpen(false); };

  const { id } = useParams();
  useEffect(() => {
    if (!id) return setLoading(false);
    const getData = async () => {
      try {
        const response = await commonGetApiCall(`/casestudy/${id}`);
        if (response.success) { setCreateStudyData(toCamelCase(response.caseStudy)); setIsEditingPage(true); }
        else redirect("/case-studies");
      } catch { redirect("/case-studies"); }
      finally { setLoading(false); }
    };
    getData();
  }, [id]);

  useLayoutEffect(() => {
    if (loading) return;
    const container = document.querySelector(".outletWrapper");
    if (!container) return;
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); }); },
      { root: container, threshold: 0.4 }
    );
    sectionRef.forEach(({ ref, id }) => { if (ref.current) { ref.current.id = id; observer.observe(ref.current); } });
    const firstVisible = sectionRef.find(({ ref }) => ref.current);
    if (firstVisible) setActiveSection(firstVisible.id);
    return () => sectionRef.forEach(({ ref }) => ref.current && observer.unobserve(ref.current));
  }, [loading, createCaseStudyData]);

  useEffect(() => { const textareas = document.querySelectorAll("textarea"); textareas.forEach((ta) => textareaAutoResize(ta)); }, [createCaseStudyData]);

  if (loading) return <PageBuildingLoader />;

  return (
    <div className="h-[100vh] w-full p-4">
      <Navbar />
      <div className="h-[calc(100%-70px)] w-full shadow bg-white rounded-[30px] overflow-hidden">
        <div className="h-[70px] px-4 flex items-center justify-between">
          <h2 className="text-[23px] font-semibold">Events</h2>
          <div className="h-full flex items-center gap-5">
            <div className="relative">
              <div onClick={(e) => { e.stopPropagation(); setIsOpen((prev) => !prev); }} className="z-40 h-[45px] border capitalize min-w-[170px] hover:bg-[#e8e8e85e] flex justify-center items-center gap-2 border-[#E8E8E8] relative transition-all rounded-full cursor-pointer">
                {createCaseStudyData?.status === "live" ? "Publish" : createCaseStudyData?.status}
                <img className="h-[10px]" src="/icons/aeroBottom.png" />
              </div>
              <div onClick={(e) => e.stopPropagation()} className={`${isOpen ? "opacity-100 block" : "opacity-0 hidden"} h-[150px] w-[170px] bg-white shadow-lg absolute left-0 mt-3 z-40 border rounded-xl border-[#0000001c] px-2`}>
                <button onClick={() => handleStatusChange("draft")} className="w-full h-[28%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]">Mark as Draft</button>
                <button onClick={() => handleStatusChange("live")} className="w-full h-[28%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]">Publish</button>
                <button onClick={() => handleStatusChange("undraft")} className="w-full h-[28%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]">Undraft</button>
              </div>
            </div>
            <Link to="/case-studies" className="h-[40px] w-[40px] rounded-full"><img className="h-full w-full rounded-full object-cover" src="/icons/close.png" alt="" /></Link>
          </div>
        </div>

        <div className="flex gap-2 h-[calc(100%-70px)] pb-2">
          <div className="w-[18%] h-full bg-white border-r border-stone-300">
            <ul>
              {sectionRef.map(({ id, ref }, index) => (
                <li key={id} onClick={() => handleScrolling(ref)} className={`px-4 flex items-center text-[18px] h-[45px] cursor-pointer ${activeSection === id ? "activeEventPageSection" : "text-stone-600"}`}>
                  {["Banner", "Section 2", "Challenges", "Approach", "Outcomes"][index]}
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={(e) => handleSubmit(e, isEditingPage, id)} className="w-[82%] h-full overflow-scroll p-3 outletWrapper">
            <SectionOne ref={sectionOneRef} />
            <SectionTwo ref={sectionTwoRef} />
            <Chellenges ref={sectionThreeRef} />
            <Apporach ref={sectionFourRef} />
            <Outcomes ref={sectionFiveRef} />

            <div className="min-h-[50px] min-w-[500px] py-10">
              <p>Enter Page URL</p>
              <div className="flex items-center h-full">
                <input required value={"https://viscadia.com/casestudy/"} readOnly placeholder="https://viscadia.com/casestudy/" type="text" className="text-[15px] w-[228px] border-r-0 text-black outline-0 border-[1px] py-2 pe-0 px-2 border-stone-300 placeholder:text-[#000]" />
                <input required placeholder="page-url-endpoint" value={createCaseStudyData?.slug} onInput={handleNewCaseStudyInputs} type="text" className="text-[15px] lowercase border-l-0 w-[400px] ps-0 text-black outline-0 border-[1px] py-2 px-2 border-stone-300 placeholder:text-[#a7a7a7]" />
              </div>
            </div>

            <div className="flex w-full justify-end gap-5 mt-5">
              <button type="button" className="bg-white border border-gray-300 shadow hover:bg-gray-100 transition-all p-2 rounded-full font-medium px-9 text-[17px]">Cancel</button>
              <button type="submit" className="grediantBg text-white p-2 rounded-full font-medium px-9 text-[17px]">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCaseStudy;
