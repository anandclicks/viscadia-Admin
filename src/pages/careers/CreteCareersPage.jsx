import React, { useEffect, useState, useRef, useContext } from "react";
import Navbar from "../../components/common/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import SectionOne from "../../components/careers/SectionOne";
import SectionTwo from "../../components/careers/SectionTwo";
import SectionThree from "../../components/careers/SectionThree";
import SectionFour from "../../components/careers/SectionFour";
import SectionFive from "../../components/careers/SectionFive";
import { CareersContext } from "../../../context/CareersContext";
import {
  commonGetApiCall,
  textareaAutoResize,
  toCamelCase,
} from "../../utils/reuseableFunctions";
import PageBuildingLoader from "../../components/common/PageBuildingLoader";

const CreteCareersPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditingPage, setIsEditingPage] = useState(false);
  const [loading, setLoading] = useState(true);
  const redirect = useNavigate();

  const { handleSubmit, createCareerData, setCareerData, handleCareersInpust } =
    useContext(CareersContext);
  const toggleMenu = (evt) => {
    evt.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const [activeSection, setActiveSection] = useState("sectionOne");
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
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
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

  // Effect to resize all textareas when data changes
  useEffect(() => {
    const textareas = document.querySelectorAll("textarea");
    textareas.forEach((ta) => textareaAutoResize(ta));
  }, [createCareerData]);

  // if this is a editing page
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const getData = async () => {
        let response = await commonGetApiCall(`/career/${id}`);
        if (response.success) {
          let convertedData = toCamelCase(response?.data);
          setCareerData(convertedData);
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
  }, []);


   const handleCareerStatus = (state) => {
    setCareerData((prev) => ({ ...prev, status: state }));
    setIsOpen(false);
  };

  return (
    <>
      {loading && <PageBuildingLoader />}
      {!loading && (
        <div className="h-[100vh] w-full p-4">
          <Navbar />
          <div className="h-[calc(100%-70px)] w-full shadow bg-white rounded-[30px] overflow-hidden">
            <div className="h-[70px] px-4 flex mb-2 items-center justify-between border-b-[1px] border-stone-200">
              <h2 className="text-[23px] font-semibold">New Career Page</h2>
              <div className="h-full flex items-center gap-5">
                <div className="relative">
                  <div
                    onClick={toggleMenu}
                    className="z-40 h-[45px] border min-w-[170px] capitalize hover:bg-[#e8e8e85e] flex justify-center items-center gap-2 border-[#E8E8E8] relative transition-all rounded-full cursor-pointer"
                  >
                    {createCareerData?.status === "live" ? "Publish" : createCareerData?.status}
                    <img className="h-[10px]" src="/icons/aeroBottom.png" />
                  </div>
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className={`${
                      isOpen ? "opacity-100 block" : "opacity-0 hidden"
                    } h-[150px] w-[170px] bg-white shadow-lg absolute left-[0px] mt-3 z-20 border rounded-xl border-[#0000001c] px-2`}
                  >
                    <button
                      type="button"
                      onClick={() => handleCareerStatus("draft")}
                      className="w-full h-[28%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]"
                    >
                      Mark as Draft
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCareerStatus("undraft")}
                      className="w-full h-[28%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]"
                    >
                      Undraft
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCareerStatus("live")}
                      className="w-full h-[28%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]"
                    >
                      Publish
                    </button>
                  </div>
                </div>
                <Link
                  to={"/careers"}
                  className="h-[40px] w-[40px] rounded-full"
                >
                  <img
                    className="h-full w-full rounded-full object-cover"
                    src="/icons/close.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="flex gap-2 h-[calc(100%-90px)] pb-2">
              <div className="w-[18%] h-full bg-white border-r border-stone-300">
                <ul>
                  <li
                    onClick={() => handleScrolling(sectionOneRef)}
                    className={`px-4 cursor-pointer text-stone-600 flex items-center text-[18px] h-[45px] ${
                      activeSection === "sectionOne"
                        ? "font-bold activeEventPageSection text-black"
                        : ""
                    }`}
                  >
                    <button>Banner</button>
                  </li>
                  <li
                    onClick={() => handleScrolling(sectionTwoRef)}
                    className={`px-4 cursor-pointer text-stone-600 flex items-center text-[18px] h-[45px] ${
                      activeSection === "sectionTwo"
                        ? "font-bold activeEventPageSection text-black"
                        : ""
                    }`}
                  >
                    <button>Principal, Integrated...</button>
                  </li>
                  <li
                    onClick={() => handleScrolling(sectionThreeRef)}
                    className={`px-4 cursor-pointer text-stone-600 flex items-center text-[18px] h-[45px] ${
                      activeSection === "sectionThree"
                        ? "font-bold activeEventPageSection text-black"
                        : ""
                    }`}
                  >
                    <button>Roles and Responsi...</button>
                  </li>
                  <li
                    onClick={() => handleScrolling(sectionFourRef)}
                    className={`px-4 cursor-pointer text-stone-600 flex items-center text-[18px] h-[45px] ${
                      activeSection === "sectionFour"
                        ? "font-bold activeEventPageSection text-black"
                        : ""
                    }`}
                  >
                    <button>qualifications</button>
                  </li>
                  <li
                    onClick={() => handleScrolling(sectionFiveRef)}
                    className={`px-4 cursor-pointer text-stone-600 flex items-center text-[18px] h-[45px] ${
                      activeSection === "sectionFive"
                        ? "font-bold activeEventPageSection text-black"
                        : ""
                    }`}
                  >
                    <button>Key Skills</button>
                  </li>
                </ul>
              </div>
              <form
                onSubmit={(evt) => handleSubmit(evt, isEditingPage, id)}
                className="w-[82%] h-full overflow-scroll p-3 outletWrapper"
              >
                <SectionOne ref={sectionOneRef} />
                <SectionTwo ref={sectionTwoRef} />
                <SectionThree ref={sectionThreeRef} />
                <SectionFour ref={sectionFourRef} />
                <SectionFive ref={sectionFiveRef} />
                <div>
                  <div className="min-h-[50px] min-w-[500px] py-10">
                    <p>Enter Page url</p>
                    <div className="flex items-center h-full">
                      <input
                        required
                        value={"https://viscadia.com/career/"}
                        readOnly
                        placeholder="https://viscadia.com/career/"
                        type="text"
                        className="text-[15px] w-[202px] border-r-0 text-black outline-0 border-[1px] py-2 pe-0 px-2 border-stone-300 placeholder:text-[#000]"
                        name="slug"
                        id=""
                      />
                      <input
                        required
                        placeholder="page-url-endpoint"
                        value={createCareerData?.slug}
                        onInput={handleCareersInpust}
                        type="text"
                        className="text-[15px] lowercase border-l-0 w-[400px] ps-0 text-black outline-0 border-[1px] py-2 px-2 border-stone-300 placeholder:text-[#a7a7a7]"
                        name="slug"
                        id=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-end gap-5">
                  <button
                    type="button"
                    className="bg-[#FFFFFF] border-[1px] border-[#E8E8E8] shadow hover:bg-[#e8e8e88e] transition-all p-2 rounded-full font-medium px-9 text-[17px] mt-5"
                  >
                    Cancle
                  </button>
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

export default CreteCareersPage;
