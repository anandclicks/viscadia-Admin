import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { putCommonApiForEvnts, toCamelCase } from "../../utils/reuseableFunctions";
import { Link } from "react-router-dom";

const WhitePaperCard = ({ id, isOpen, onToggle, data, setWhitePaperData }) => {
  const [isActive, setIsActive] = useState(!!data?.is_active);

  useEffect(() => {
    setIsActive(!!data?.is_active);
  }, [data?.is_active]);

  const handleActionMenu = (e) => {
    e.stopPropagation();
    onToggle(id);
  };

  const toggleStatus = async (status) => {
    onToggle(null);
    const t = toast.loading("Updating status...");
    try {
      const res = await putCommonApiForEvnts(`/whitepaper/${data?.id}`, { ...data, is_active: status });
      toast.dismiss(t);
      if (res.success) {
        setIsActive(status);
        toast.success("Status updated successfully!");
      } else {
        toast.error("Couldn't update status!");
      }
    } catch {
      toast.dismiss(t);
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      {data ? (
        <div onClick={() => onToggle(null)} className="w-full min-h-[200px] my-5 rounded-[30px] flex fsTwo shadow-[0px_0px_3px_#0000000f] border border-[#f1f1f1]">
          <img className="w-[28%] max-h-[230px] rounded-[30px] object-cover" src={data?.img || "/imagePlaceholder.jpg"} alt={data?.title || ""} />
          <div className="w-[72%] h-full px-5 flex flex-col justify-start pt-5">
            <div className="w-full flex justify-between mb-2">
              <h2 className="text-[22px] font-semibold">{data?.heading}</h2>
              <div className="relative flex gap-3 mb-2">
                <button className={`${isActive ? "Published" : "draft"} px-3 py-1 rounded-full text-sm font-semibold`}>{isActive ? "Published" : "Draft"}</button>
                <button onClick={handleActionMenu} className="hover:text-[#BD2F2C] text-[30px] relative"><i className="ri-more-2-fill"></i></button>
                <div className={`${isOpen ? "opacity-100 block" : "opacity-0 hidden"} min-h-[120px] w-[170px] bg-white shadow-lg absolute left-[0px] mt-3 z-20 border rounded-xl border-[#0000001c] px-2 transition-all`} onClick={(e) => e.stopPropagation()}>
                  <button onClick={() => { setWhitePaperData(toCamelCase(data)); onToggle(null); }} type="button" className="h-[40px] w-full my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">Edit</button>
                  <button onClick={() => toggleStatus(!isActive)} className="w-full h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">{isActive ? "Mark as Draft" : "Publish"}</button>
                  <Link to={`/preview/white-paper/${data?.id}`}><button className="w-full h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2">Preview</button></Link>
                </div>
              </div>
            </div>
            <p className="text-[17px] leading-[20px]">{data?.sub_heading}</p>
          </div>
        </div>
      ) : (
        <div className="h-[100px] w-full flex items-center justify-center"><h2 className="text-center">No Data Found!</h2></div>
      )}
    </>
  );
};

export default WhitePaperCard;
