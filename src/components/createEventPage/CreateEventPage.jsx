import { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionFour from "./SectionFour";
import SectionThree from "./SectionThree";
import Navbar from "../common/Navbar";
import { EventPageContext } from "../../../context/EventPageContext";
import { commonGetApiCall, toCamelCase } from "../../utils/reuseableFunctions";
import toast from "react-hot-toast";
import PageBuildingLoader from "../common/PageBuildingLoader";

const CreateEventPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditingPage,setIsEditingPage] = useState(false)
  const [loading,setLoading] = useState(true)

  const redirect = useNavigate()

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

  // function for handling submit 
  const { handleSubmit,setCreateEventFormData,createEventFormData } = useContext(EventPageContext);

  // function for handling scrolling by button click 
  const [activeSection,setActiveSection] = useState(null)
    const sectionOneRef = useRef(null)
  const sectionTwoRef = useRef(null)
  const sectionThreeRef = useRef(null)
  const sectionFourRef = useRef(null)
  

  useEffect(()=>{
  const sectionRefs = [
    {ref : sectionOneRef, id : "sectionOne"},
    {ref : sectionTwoRef, id : "sectionTwo"},
    {ref : sectionThreeRef, id : "sectionThree"},
    {ref : sectionFourRef, id : "sectionFour"},
  ]
   const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        setActiveSection(entry.target.id)
      }
    })
   },{threshold : 0.7})

   sectionRefs.forEach(({ref,id})=>{
    if(ref.current){
      ref.current.id = id
      observer.observe(ref.current)
    }
   })
  },[loading]) 

  const handleScrolling = (ref)=>{
    ref.current.scrollIntoView({behavior: "smooth", block: "start"})
  }

  const handleEventStatus = (status)=>{
    setCreateEventFormData((prev)=> ({...prev,status : status}))
    setIsOpen(false)
  }




  // if this is a editing page 
  const {id} = useParams()
  useEffect(()=>{
   if(id){
     const getData = async()=>{
      let response = await commonGetApiCall(`/events/${id}`)
      if(response.success){
        let convertedData = toCamelCase(response?.data)
        setCreateEventFormData(convertedData)
        setIsEditingPage(true)
        setLoading(false)
      }else {
        redirect("/events-and-webinars")
        toast.error("Couldn't Fetch Event!")
        setLoading(false)
      }
    }
    getData()
   }else {
    setLoading(false)
   }
  },[])



  return (
    <>
    {loading && <PageBuildingLoader/>}
    {!loading && <div className="h-[100vh] w-full p-4">
      <Navbar />
      <div className="h-[calc(100%-70px)] w-full shadow bg-white rounded-[30px] overflow-hidden">
        <div className="h-[70px] px-4 flex items-center justify-between">
          <h2 className="text-[23px] font-semibold">Events</h2>
          <div className="h-full flex items-center gap-5">
            <div className="relative">
              <div onClick={toggleMenu} className="z-40 h-[45px] capitalize border min-w-[130px] hover:bg-[#e8e8e85e] flex justify-center items-center gap-2 border-[#E8E8E8] relative transition-all rounded-full cursor-pointer">
                {createEventFormData?.status === "live" ? "Public" : createEventFormData?.status} <img className="h-[10px]" src="/icons/aeroBottom.png" />
              </div>
              <div onClick={(e) => e.stopPropagation()} className={`${isOpen ? "opacity-100 block" : "opacity-0 hidden"} h-[150px] w-[170px] bg-white shadow-lg absolute left-[0px] mt-3 z-20 border rounded-xl border-[#0000001c] px-2`}>
                <button onClick={()=> handleEventStatus('draft')} className="w-full h-[28%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]">Mark as Draft</button>
                <button onClick={()=> handleEventStatus('undraft')}  className="w-full h-[28%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]">Undraft</button>
                <button onClick={()=> handleEventStatus('live')}  className="w-full h-[28%] my-1 hover:bg-stone-50 text-start px-2 border-b border-[#f8f8f8]">Publish</button>
              </div>
            </div>
            <Link to={'/events-and-webinars'} className="h-[40px] w-[40px] rounded-full">
              <img className="h-full w-full rounded-full object-cover" src="/icons/close.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="flex gap-2 h-[calc(100%-70px)] pb-3">
          <div className="w-[18%] h-full bg-white border-r border-stone-300">
            <ul>
              <li onClick={()=> handleScrolling(sectionOneRef)} className={`px-4 text-stone-600 flex items-center cursor-pointer text-[18px] h-[45px] ${activeSection === "sectionOne" && "activeEventPageSection"}`}>
                <button> Banner</button>
              </li>
              <li onClick={()=> handleScrolling(sectionTwoRef)} className={`px-4 text-stone-600 flex items-center cursor-pointer text-[18px] h-[45px] ${activeSection === "sectionTwo" && "activeEventPageSection"}`}>
                <button>About Conference</button>
              </li>
              <li onClick={()=> handleScrolling(sectionThreeRef)} className={`px-4 text-stone-600 flex items-center cursor-pointer text-[18px] h-[45px] ${activeSection === "sectionThree" && "activeEventPageSection"}`}>
                <button>Speaker</button>
              </li>
              <li onClick={()=> handleScrolling(sectionFourRef)} className={`px-4 text-stone-600 flex items-center cursor-pointer text-[18px] h-[45px] ${activeSection === "sectionFour" && "activeEventPageSection"}`}>
                <button>Our Forecasting</button>
              </li>
            </ul>
          </div>
          <form onSubmit={(evt)=> handleSubmit(evt,isEditingPage,id)} className="w-[82%] h-[100%] overflow-scroll p-3 outletWrapper">
            <SectionOne ref={sectionOneRef} />
            <SectionTwo ref={sectionTwoRef} />
            <SectionThree ref={sectionThreeRef} />
            <SectionFour ref={sectionFourRef} />
            <div className="flex w-full justify-end gap-5">
              <button className="bg-[#FFFFFF] border-[1px] border-[#E8E8E8] shadow hover:bg-[#e8e8e88e] transition-all p-2 rounded-full font-medium px-9 text-[17px] mt-5">Cancle</button>
              <input value={'Save'} type="submit" className="cursor-pointer grediantBg text-white p-2 rounded-full font-medium px-9 text-[17px] mt-5"/>
            </div>
          </form>
        </div>
      </div>
    </div>}
    </>
  );
};

export default CreateEventPage;
