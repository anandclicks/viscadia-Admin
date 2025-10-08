import React, { useEffect, useRef, useState } from "react";
import WhitePaperCard from "../common/WhitePaperCard";
import { commonGetApiCall, putCommonApiForEvnts, toCamelCase, uploadSingleImage } from "../../utils/reuseableFunctions";
import PageBuildingLoader from "../common/PageBuildingLoader";
import NoDataFound from "../common/NoDataFound";
import toast from "react-hot-toast";

const WhitePaperListing = () => {
  const [openCardId, setOpenCardId] = useState(null);
  const [allWhitePaper, setAllWhitePaper] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pdf, setPdf] = useState(null);
  const [whitePaperData, setWhitePaperData] = useState(null);
  const fileInputRef = useRef(null);

  const handleToggle = (id) => setOpenCardId((prev) => (prev === id ? null : id));

  useEffect(() => {
    const getAllData = async () => {
      try {
        setLoading(true);
        const res = await commonGetApiCall("/whitepaper");
        if (res?.success && res?.data?.length) setAllWhitePaper(res.data);
        else setAllWhitePaper([]);
      } catch {
        toast.error("Unable to load White Papers. Please try again.");
        setAllWhitePaper([]);
      } finally {
        setLoading(false);
      }
    };
    getAllData();
  }, []);

  const handleInputs = async (evt) => {
    const { type, name, files, value } = evt.target;
    if (type === "file" && files && files[0]) {
      const file = files[0];
      if (name === "pdf") setPdf(file);
      try {
        const url = await uploadSingleImage(files);
        setWhitePaperData((prev) => ({ ...prev, [name]: url }));
      } catch {
        toast.error("Failed to upload file");
      }
    } else {
      setWhitePaperData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleClearInput = (name) => {
    setWhitePaperData((prev) => ({ ...prev, [name]: name === "pdf" ? null : "" }));
    if (name === "pdf") {
      setPdf(null);
      fileInputRef.current.value = null;
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const t = toast.loading("Updating white paper...");
    const res = await putCommonApiForEvnts(`/whitepaper/${whitePaperData?.id}`, whitePaperData);
    if (res?.success) {
      toast.dismiss(t);
      toast.success("White Paper updated successfully");
      setAllWhitePaper((prev) =>
        prev.map((el) => (el.id === res.whitepaper.id ? { ...el, ...toCamelCase(res.whitepaper) } : el))
      );
      setWhitePaperData(null);
      setPdf(null);
    } else {
      toast.dismiss(t);
      toast.error("Couldn't update White Paper");
    }
  };

  if (loading) return <PageBuildingLoader />;
  if (!loading && allWhitePaper.length === 0)
    return <NoDataFound message="No white papers found" />;

  return (
    <>
      <div className="mt-5">
        {allWhitePaper.map((data, index) => (
          <WhitePaperCard
            key={index}
            id={index}
            data={data}
            setWhitePaperData={setWhitePaperData}
            isOpen={openCardId === index}
            onToggle={handleToggle}
          />
        ))}
      </div>

      {whitePaperData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-2xl shadow-xl w-[50%] min-h-[600px] p-6 relative">
            <div className="border-b border-gray-300 pb-4 flex justify-between items-center">
              <h2 className="text-[22px] font-medium text-black">Update White Paper</h2>
              <button type="button" onClick={() => setWhitePaperData(null)}>
                <img src="./closeDarkBtn.png" alt="Close" className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-wrap gap-10 mt-8">
              <div className="w-[45%]">
                <p className="text-[16px] font-medium text-gray-700">Heading</p>
                <div className="flex items-center mt-3 border border-gray-200 rounded-lg h-[45px] shadow-sm">
                  <input
                    required
                    type="text"
                    name="heading"
                    value={whitePaperData.heading}
                    onChange={handleInputs}
                    placeholder="Enter Heading"
                    className="flex-1 px-3 outline-none text-gray-700 placeholder:text-gray-400"
                  />
                  {whitePaperData.heading && (
                    <button type="button" onClick={() => handleClearInput("heading")} className="pr-3">
                      <img src="./closeDarkBtn.png" alt="Clear" className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>

              <div className="w-[45%]">
                <p className="text-[16px] font-medium text-gray-700">Sub-Heading</p>
                <div className="flex items-center mt-3 border border-gray-200 rounded-lg h-[45px] shadow-sm">
                  <input
                    required
                    type="text"
                    name="subHeading"
                    value={whitePaperData.subHeading}
                    onChange={handleInputs}
                    placeholder="Enter Sub-Heading"
                    className="flex-1 px-3 outline-none text-gray-700 placeholder:text-gray-400"
                  />
                  {whitePaperData.subHeading && (
                    <button type="button" onClick={() => handleClearInput("subHeading")} className="pr-3">
                      <img src="./closeDarkBtn.png" alt="Clear" className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>

              <div className="w-[45%]">
                <p className="text-[16px] font-medium text-gray-700">Upload PDF</p>
                <div className="flex items-center justify-between mt-3 border border-gray-200 rounded-lg h-[45px] shadow-sm px-3 relative">
                  <label className="flex items-center gap-3 cursor-pointer w-full">
                    <img src="./folder.png" alt="Upload" className="h-5 w-5" />
                    <span className="text-[14px] text-gray-600">{pdf ? "PDF Uploaded" : "Choose File"}</span>
                    <input ref={fileInputRef} type="file" name="pdf" onChange={handleInputs} className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
                  </label>
                  {pdf && (
                    <button type="button" onClick={() => handleClearInput("pdf")} className="ml-2">
                      <img src="./closeDarkBtn.png" alt="Clear" className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>

              <div className="w-[45%]">
                <div className="flex items-center justify-center border border-dashed border-gray-300 bg-[#bd2e2c11] h-[200px] rounded-lg relative overflow-hidden">
                  <input onChange={handleInputs} type="file" name="img" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
                  {whitePaperData?.img ? (
                    <img src={whitePaperData.img} alt="" className="h-full w-full object-contain" />
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <img src="/icons/upload.png" alt="Upload" className="h-[25%] w-[25%] object-contain" />
                      <p className="text-[#BD2F2C] text-[13px] mt-2">Upload Image</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full flex justify-end gap-4 mt-4">
                <button type="button" onClick={() => setWhitePaperData(null)} className="border border-gray-200 px-8 py-2 rounded-full text-gray-700 bg-white hover:bg-gray-100 transition">
                  Cancel
                </button>
                <button type="submit" className="grediantBg text-white px-8 py-2 rounded-full font-medium">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default WhitePaperListing;
