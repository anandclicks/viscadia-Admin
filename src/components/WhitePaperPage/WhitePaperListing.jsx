import React, { useEffect, useRef, useState } from "react";
import CaseStudyAndWhitePaperCard from "../common/CaseStudyCard";
import WhitePaperCard from "../common/WhitePaperCard";
import { commonGetApiCall, putCommonApiForEvnts, toCamelCase, uploadSingleImage } from "../../utils/reuseableFunctions";
import { data } from "react-router-dom";
import PageBuildingLoader from "../common/PageBuildingLoader";
import toast from "react-hot-toast";

const WhitePaperListing = () => {
  const [openCardId, setOpenCardId] = useState(null);
 const [allWhitePaper,setAllWhitePaper] = useState(null)

  const handleToggle = (id) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };
  useEffect(()=>{
      const getAllData = async()=>{
        let res = await commonGetApiCall('/whitepaper')
        if(res.success){
          setAllWhitePaper([...res?.data])
        }
        else{
          toast.error(data?.message || "Unable to load White Paper. Please try again.");
        }
      }
      getAllData()
    },[])


    // functions for edit 

  const [pdf, setPdf] = useState(null);
  const [whitePaperData, setWhitePaperData] = useState(null);
  const fileInputRef = useRef(null);

  const handleInputs = async (evt) => {
    const { type, name, files, value } = evt.target;
    if (type === "file" && files && files[0]) {
      const file = files[0];
      if(name === "pdf"){
        setPdf(file)
      }
      try {
        const url = await uploadSingleImage(files);
        setWhitePaperData(prev => ({ ...prev, [name]: url }));
      } catch {
        toast.error("Failed to upload PDF");
      }
    } else {
      setWhitePaperData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleClearInput = (name) => {
    setWhitePaperData(prev => ({ ...prev, [name]: name === "pdf" ? null : "" }));
    if (name === "pdf") {
      setPdf(null);
      fileInputRef.current.value = null;
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let t= toast.loading("Updating white paper..")
    const res = await putCommonApiForEvnts(`/whitepaper/${whitePaperData?.id}`, whitePaperData);
    if (res?.success) {
      toast.dismiss(t)
      toast.success("White paper Created Successfully");
     setAllWhitePaper((prev) => {
  return prev.map((el) => {
    if (el.id === res.whitepaper.id) {
      return { ...el, ...toCamelCase(res.whitepaper) };
    }
    return el;
  });
});

      setWhitePaperData(null);
      setPdf(null);
      setIsOpen(false);
    } else {
      toast.dismiss(t)
      toast.error("Couldn't Create White Paper!");
    }
  };
  
  return (
  <>
  {!allWhitePaper && <PageBuildingLoader/>}
    <div className="mt-5">
      {allWhitePaper?.map((data, index) => (
        <WhitePaperCard
          key={index}
          setWhitePaperData={setWhitePaperData}
          id={index}
          data={data}
          isOpen={openCardId === index}
          onToggle={handleToggle}
        />
      ))}
    </div>



    {whitePaperData && 
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000034] bg-opacity-30">
      <div onClick={e => e.stopPropagation()} className="bg-white rounded-[20px] shadow-lg min-h-[600px] w-[50%] p-6 relative">
        <div className="border-b-[1px] border-stone-400 pb-4 flex w-full justify-between">
          <h2 className="text-[22px] font-medium text-black">Update White Paper</h2>
          <button type="button" onClick={() => setWhitePaperData(null)}>
            <img className="h-[30px] w-[30px]" src="./closeDarkBtn.png" alt="Close" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-wrap gap-10 mt-0 pt-10">
          <div className="min-h-[50px] w-[40%]">
            <p className="text-[17px] font-[500] text-stone-700">Heading</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[45px] rounded-lg border-[1px] items-center border-stone-200 mt-3 flex">
              <input required placeholder="Enter Heading" className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" type="text" name="heading" value={whitePaperData.heading} onChange={handleInputs} />
              {whitePaperData.heading && <button type="button" onClick={() => handleClearInput("heading")} className="pr-3"><img className="h-[20px] w-[20px]" src="./closeDarkBtn.png" alt="Clear" /></button>}
            </div>
          </div>

          <div className="min-h-[50px] w-[40%]">
            <p className="text-[17px] font-[500] text-stone-700">Sub-Heading</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[45px] rounded-lg border-[1px] items-center border-stone-200 mt-3 flex">
              <input required placeholder="Enter Sub-Heading" className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" type="text" name="subHeading" value={whitePaperData.subHeading} onChange={handleInputs} />
              {whitePaperData.subHeading && <button type="button" onClick={() => handleClearInput("subHeading")} className="pr-3"><img className="h-[20px] w-[20px]" src="./closeDarkBtn.png" alt="Clear" /></button>}
            </div>
          </div>

          <div className="min-h-[50px] w-[40%] mt-0">
            <p className="text-[16px] font-[500] text-stone-700">Upload PDF</p>
            <div className="w-full justify-between px-3 shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[45px] rounded-lg border-[1px] items-center border-stone-200 mt-3 flex relative">
              <label className="flex items-center gap-3 cursor-pointer w-full">
                <img className="h-[25px] w-[25px]" src="./folder.png" alt="Upload" />
                <div className="flex flex-col">
                  <span className="text-gray-700 text-[14px]">{true ? "Pdf Uploaded" : "Choose File"}</span>
                </div>
                <input ref={fileInputRef} type="file" name="pdf" onChange={handleInputs} className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
              </label>
              {pdf && <button type="button" onClick={() => handleClearInput("pdf")} className="ml-2"><img className="h-[20px] w-[20px]" src="./closeDarkBtn.png" alt="Clear" /></button>}
            </div>
          </div>

          <div className="min-h-[50px] w-[40%] mt-0">
           <div className="flex bg-[#bd2e2c11] border-dashed border-[1px] h-[200px] w-full relative flex-col items-center justify-center">
                <input onChange={handleInputs} className="h-full w-full opacity-0 cursor-pointer left-0 top-0 absolute z-20" type="file" name="img" 
                 />
                {whitePaperData?.img ? (
                  <img className="h-[200px] w-full object-scale-down"  src={whitePaperData?.img} alt="" />
                ) : (
                  <div className="h-full w-full flex flex-col justify-center items-center">
                    <img className="h-[20%] w-[20%] object-contain" src="/icons/upload.png" alt="" />
                    <h3 className="text-[#BD2F2C] mt-2 text-[13px]">Upload Image</h3>
                  </div>
                )}
              </div>
          </div>

          <div className="flex w-full justify-end gap-5">
            <button type="button" onClick={() => setWhitePaperData(null)} className="bg-[#FFFFFF] border-[1px] border-[#E8E8E8] shadow hover:bg-[#e8e8e88e] transition-all p-2 rounded-full font-medium px-9 text-[16px] mt-5">Cancel</button>
            <button type="submit" className="grediantBg text-white p-2 rounded-full font-medium px-9 text-[16px] mt-5">Save</button>
          </div>
        </form>
      </div>
    </div>
    }
     
  </> 
  );
};

export default WhitePaperListing;
