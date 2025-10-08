import { Link, useParams } from "react-router-dom";
import Navbar from "../common/Navbar.jsx";
import { useContext, useEffect, useRef, useState } from "react";
import SectionOne from "./SectionOne.jsx";
import SectionTwo from "./SectionTwo.jsx";
import SectionThree from "./SectionThree.jsx";
import { LeadershipContext } from "../../../context/LeadershipContext.jsx";
import { commonGetApiCall, textareaAutoResize, toCamelCase } from "../../utils/reuseableFunctions.js";
import PageBuildingLoader from "../common/PageBuildingLoader.jsx";

const CreateLeadership = () => {
  const [isEditingPage, setIsEditingPage] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("sectionOne"); // Default active section
  const [isScrolling, setIsScrolling] = useState(false);

  const { handleSubmit, setCreateLeadershipData, createLeadershipData } = useContext(LeadershipContext);
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null);

  const sectionRef = [
    { ref: sectionOneRef, id: "sectionOne" },
    { ref: sectionTwoRef, id: "sectionTwo" },
    { ref: sectionThreeRef, id: "sectionThree" }
  ];

  // IntersectionObserver to track sections in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let highestRatio = 0;
        let activeId = "sectionOne"; // Default to sectionOne
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > highestRatio && !isScrolling) {
            highestRatio = entry.intersectionRatio;
            activeId = entry.target.id;
          }
        });
        if (highestRatio > 0) {
          setActiveSection(activeId);
        }
      },
      { threshold: [0.2, 0.4, 0.6, 0.8], rootMargin: "0px 0px -20% 0px" } // Multiple thresholds for better detection
    );

    const observeSections = () => {
      sectionRef.forEach(({ ref, id }) => {
        if (ref.current) {
          ref.current.id = id;
          observer.observe(ref.current);
        }
      });
    };

    // Initial visibility check
    const checkInitialVisibility = () => {
      let found = false;
      for (const { ref, id } of sectionRef) {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          if (
            rect.top >= 0 &&
            rect.top <= viewportHeight * 0.6 &&
            rect.height > 0 // Ensure section has height
          ) {
            setActiveSection(id);
            found = true;
            break;
          }
        }
      }
      // Fallback to sectionOne if no section is found
      if (!found) {
        setActiveSection("sectionOne");
      }
    };

    // Delay observation to ensure DOM is ready
    const timer = setTimeout(() => {
      observeSections();
      checkInitialVisibility();
    }, 300); // 300ms delay for reliability

    // Re-run check on scroll and resize
    window.addEventListener("scroll", checkInitialVisibility);
    window.addEventListener("resize", checkInitialVisibility);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", checkInitialVisibility);
      window.removeEventListener("resize", checkInitialVisibility);
      sectionRef.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [isScrolling]);

  // Handle click on tabs and scroll to section
  const handleScrolling = (ref, sectionId) => {
    setIsScrolling(true);
    setActiveSection(sectionId);
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    // Stop ignoring observer after scroll
    setTimeout(() => setIsScrolling(false), 500);
  };

  const toggleMenu = (evt) => {
    evt.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleLeadershipStatus = (state) => {
    setCreateLeadershipData((prev) => ({ ...prev, status: state }));
    setIsOpen(false);
  };

  useEffect(() => {
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((ta) => textareaAutoResize(ta));
  }, [createLeadershipData]);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const getData = async () => {
        let response = await commonGetApiCall(`/leadership/${id}`);
        if (response.success) {
          let convertedData = toCamelCase(response?.data);
          setCreateLeadershipData(convertedData);
          setIsEditingPage(true);
          setLoading(false);
        } else {
          redirect("/events-and-webinars");
          toast.error("Couldn't Fetch Event!");
          setLoading(false);
        }
      };
      getData();
    } else {
      setLoading(false);
    }
  }, [id]);

  return (
    <>
      {loading && <PageBuildingLoader />}
      {!loading && (
        <div className="h-[100vh] w-full p-4">
          <Navbar />
          <div className="h-[calc(100%-70px)] w-full shadow bg-white rounded-[30px] overflow-hidden">
            <div className="h-[70px] px-4 flex items-center justify-between">
              <h2 className="text-[23px] font-semibold">New Leadership Page</h2>
              <div className="h-full flex items-center gap-5">
                <div className="relative">
                  <div
                    onClick={toggleMenu}
                    className="z-40 h-[45px] border min-w-[170px] capitalize hover:bg-[#e8e8e85e] flex justify-center items-center gap-2 border-[#E8E8E8] relative transition-all rounded-full cursor-pointer"
                  >
                    {createLeadershipData?.status === "live"
                      ? "Publish"
                      : createLeadershipData?.status}
                    <img className="h-[10px]" src="/icons/aeroBottom.png" />
                  </div>
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className={`${isOpen ? "opacity-100 block" : "opacity-0 hidden"} h-[150px] w-[170px] bg-white shadow-lg absolute left-[0px] mt-3 z-20 border rounded-xl border-[#0000001c] px-2`}
                  >
                    <button
                      type="button"
                      onClick={() => handleLeadershipStatus("draft")}
                      className="w-full h-[28%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]"
                    >
                      Mark as Draft
                    </button>
                    <button
                      type="button"
                      onClick={() => handleLeadershipStatus("undraft")}
                      className="w-full h-[28%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]"
                    >
                      Undraft
                    </button>
                    <button
                      type="button"
                      onClick={() => handleLeadershipStatus("live")}
                      className="w-full h-[28%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]"
                    >
                      Publish
                    </button>
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
                  <li
                    onClick={() => handleScrolling(sectionOneRef, "sectionOne")}
                    className={`px-4 cursor-pointer text-stone-600 flex items-center text-[18px] h-[45px] ${
                      activeSection === "sectionOne" ? "font-bold activeEventPageSection text-black" : ""
                    }`}
                  >
                    <button>Banner</button>
                  </li>
                  <li
                    onClick={() => handleScrolling(sectionTwoRef, "sectionTwo")}
                    className={`px-4 cursor-pointer text-stone-600 flex items-center text-[18px] h-[45px] ${
                      activeSection === "sectionTwo" ? "font-bold activeEventPageSection text-black" : ""
                    }`}
                  >
                    <button>Experience</button>
                  </li>
                  <li
                    onClick={() => handleScrolling(sectionThreeRef, "sectionThree")}
                    className={`px-4 cursor-pointer text-stone-600 flex items-center text-[18px] h-[45px] ${
                      activeSection === "sectionThree" ? "font-bold activeEventPageSection text-black" : ""
                    }`}
                  >
                    <button>Section Three</button>
                  </li>
                </ul>
              </div>
              <form onSubmit={(evt) => handleSubmit(evt, isEditingPage, id)} className="w-[82%] h-full overflow-scroll p-3 outletWrapper">
                <div ref={sectionOneRef} id="sectionOne"><SectionOne /></div>
                <div ref={sectionTwoRef} id="sectionTwo"><SectionTwo /></div>
                <div ref={sectionThreeRef} id="sectionThree"><SectionThree /></div>
                <div className="flex w-full justify-end gap-5">
                  <Link to={'/leadership'} className="bg-[#FFFFFF] border-[1px] border-[#E8E8E8] shadow hover:bg-[#e8e8e88e] transition-all p-2 rounded-full font-medium px-9 text-[17px] mt-5">
                    Cancel
                  </Link>
                  <button className="grediantBg text-white p-2 rounded-full font-medium px-9 text-[17px] mt-5">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateLeadership;