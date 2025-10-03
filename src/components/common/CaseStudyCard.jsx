import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { putCommonApiForEvnts } from "../../utils/reuseableFunctions";
import { Link } from "react-router-dom";

const CaseStudyCard = ({ id, isOpen, onToggle, data }) => {
  const [caseStatus, setCaseStatus] = useState(data?.status || "draft");
  useEffect(() => {
    setCaseStatus(data?.status || "draft");
  }, [data?.status]);

  const handleActionMenu = (evt) => {
    evt.stopPropagation();
    onToggle(id);
  };

  const handleStatusApiCall = async (status) => {
    onToggle(null);
    let t = toast.loading("Status updating!");
    let res = await putCommonApiForEvnts(`/casestudy/${data?.id}`, { status });
    if (res.success) {
      toast.dismiss(t);
      toast.success("Status Updated Successfully");
      setCaseStatus(status);
    } else {
      toast.dismiss(t);
      toast.error("Couldn't Update!");
    }
  };

  return (
    <>
      {data && (
        <div
          onClick={() => onToggle(null)}
          className="w-full h-[200px] my-5 rounded-[30px] flex fsTwo shadow-[0px_0px_3px_#0000000f] border border-[#f1f1f1]"
        >
          <img
            className="w-[28%] h-full rounded-[30px]"
            src={data?.img || "/imagePlaceholder.jpg"}
            alt={data?.title || ""}
          />
          <div className="w-[72%] h-full px-5 flex flex-col justify-start pt-5">
            <div className="w-full flex justify-between mb-2">
              <h2 className="text-[22px] font-semibold">{data?.title}</h2>
              <div className="relative flex gap-3 mb-2">
                {caseStatus === "live" && (
                  <button className="Published">Published</button>
                )}
                {caseStatus === "draft" && (
                  <button className="draft">Draft</button>
                )}
                {caseStatus === "undraft" && (
                  <button className="opacity-0 draft">undraft</button>
                )}

                <button
                  onClick={handleActionMenu}
                  className="hover:text-[#BD2F2C] text-[30px] relative"
                >
                  <i className="ri-more-2-fill"></i>
                </button>

                <div
                  className={`${
                    isOpen ? "opacity-100 block" : "opacity-0 hidden"
                  } min-h-[150px] w-[170px] bg-white shadow-lg absolute left-[0px] mt-3 z-20 border rounded-xl border-[#0000001c] px-2`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link to={`/edit/case-study/${data?.id}`}>
                    <button className="h-[40px] w-full my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
                      Edit
                    </button>
                  </Link>

                  {caseStatus === "live" && (
                    <>
                      <button
                        onClick={() => handleStatusApiCall("draft")}
                        className="w-full h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]"
                      >
                        Mark as Draft
                      </button>
                      <button
                        onClick={() => handleStatusApiCall("undraft")}
                        className="w-full h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]"
                      >
                        Undraft
                      </button>
                    </>
                  )}

                  {caseStatus === "draft" && (
                    <>
                      <button
                        onClick={() => handleStatusApiCall("undraft")}
                        className="w-full h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]"
                      >
                        Undraft
                      </button>
                      <button
                        onClick={() => handleStatusApiCall("live")}
                        className="w-full h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]"
                      >
                        Publish
                      </button>
                    </>
                  )}

                  {caseStatus === "undraft" && (
                    <>
                      <button
                        onClick={() => handleStatusApiCall("draft")}
                        className="w-full h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]"
                      >
                        Mark as Draft
                      </button>
                      <button
                        onClick={() => handleStatusApiCall("live")}
                        className="w-full h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]"
                      >
                        Publish
                      </button>
                    </>
                  )}

                  <Link to={`/preview/case-study/${data?.id}`}>
                    <button className="w-[170px] h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
                      Preview
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <p className="text-[17px] leading-[20px]">{data?.main_subtitle}</p>
          </div>
        </div>
      )}
      {!data && (
        <div className="h-[100px] w-full flex items-center justify-center">
          <h2 className="text-center">No Data Found!</h2>
        </div>
      )}
    </>
  );
};

export default CaseStudyCard;
