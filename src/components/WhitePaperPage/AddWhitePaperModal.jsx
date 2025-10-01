import React, { useState, useRef } from "react";
import { postCommonApi, uploadSingleImage } from "../../utils/reuseableFunctions";
import toast from "react-hot-toast";

const AddWhitePaperModal = ({ setIsOpen }) => {
  const [pdf, setPdf] = useState(null);
  const [whitePaperData, setWhitePaperData] = useState({ heading: "", subHeading: "", pdf: null });
  const fileInputRef = useRef(null);

  const handleInputs = async (evt) => {
    const { type, name, files, value } = evt.target;
    if (type === "file" && files && files[0]) {
      const file = files[0];
      setPdf(file);
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
    const res = await postCommonApi("whitepaper", whitePaperData, "White paper");
    if (res?.success) {
      toast.success("White paper Created Successfully");
      setWhitePaperData({ heading: "", subHeading: "", pdf: null });
      setPdf(null);
      setIsOpen(false);
    } else {
      toast.error("Couldn't Create White Paper!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000034] bg-opacity-30">
      <div onClick={e => e.stopPropagation()} className="bg-white rounded-[20px] shadow-lg min-h-[400px] w-[50%] p-6 relative">
        <div className="border-b-[1px] border-stone-400 pb-4 flex w-full justify-between">
          <h2 className="text-[22px] font-medium text-black">Add New White Paper</h2>
          <button type="button" onClick={() => setIsOpen(false)}>
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
                  <span className="text-gray-700 text-[14px]">{pdf ? "Pdf Uploaded" : "Choose File"}</span>
                  {pdf && <span className="text-gray-400 text-[14px]">{(pdf.size / 1024).toFixed(2)} KB</span>}
                </div>
                <input ref={fileInputRef} required type="file" name="pdf" onChange={handleInputs} className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
              </label>
              {pdf && <button type="button" onClick={() => handleClearInput("pdf")} className="ml-2"><img className="h-[20px] w-[20px]" src="./closeDarkBtn.png" alt="Clear" /></button>}
            </div>
          </div>

          <div className="flex w-full justify-end gap-5">
            <button type="button" onClick={() => setIsOpen(false)} className="bg-[#FFFFFF] border-[1px] border-[#E8E8E8] shadow hover:bg-[#e8e8e88e] transition-all p-2 rounded-full font-medium px-9 text-[16px] mt-5">Cancel</button>
            <button type="submit" className="grediantBg text-white p-2 rounded-full font-medium px-9 text-[16px] mt-5">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWhitePaperModal;
