import React, { useState } from "react";
import { putCommonApiForEvnts } from "../../utils/reuseableFunctions"; // assuming same API util
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const LeadershipCard = ({ isOpen, onToggle, index, data }) => {
  const [status, setStatus] = useState(data?.status);

  const handleStatusApiCall = async (newStatus) => {
    let t = toast.loading("Status updating!");
    let id = data?.id;
    let res = await putCommonApiForEvnts(`/leadership/${id}`, { status: newStatus });
    if (res.success) {
      toast.dismiss(t);
      toast.success("Status Updated Successfully");
      setStatus(newStatus);
      onToggle(null)
    } else {
      toast.dismiss(t);
      toast.error("Couldn't Update!");
      onToggle(null)
    }
  };

  return (
    <div className="h-[320px] w-full rounded-2xl">
      <div className="h-[70%] w-full overflow-hidden rounded-2xl relative">
        {status === "live" && <button className="publishTwo absolute top-0 end-0 m-1">Published</button>}
        {status === "draft" && <button className="draftTwo absolute top-0 end-0 m-1">Draft</button>}
        {status === "undraft" && <button className="opacity-0 draft absolute top-0 end-0 m-1">undraft</button>}
        <img
          className="w-full mb-10"
          src={data?.banner_image || "/images/userPlceholder.webp"}
          alt=""
        />
      </div>
      <div className="h-[30%] w-full flex flex-col pt-3 items-center relative">
        

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggle(index);
          }}
          className="hover:text-[#BD2F2C] absolute end-0 text-[30px] top-0"
        >
          <i className="ri-more-2-fill"></i>
        </button>

        <div
          onClick={(e) => e.stopPropagation()}
          className={`${
            isOpen ? "opacity-100 block" : "opacity-0 hidden"
          } h-[200px] w-[170px] bg-white shadow-lg absolute right-[0px] mt-3 z-20 border rounded-xl border-[#0000001c] px-2`}
        >
          <button className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
            Edit
          </button>
          {status === "live" && (
            <>
              <button
                onClick={() => handleStatusApiCall("draft")}
                className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]"
              >
                Mark as Draft
              </button>
              <button
                onClick={() => handleStatusApiCall("undraft")}
                className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]"
              >
                Undraft
              </button>
            </>
          )}
          {status === "draft" && (
            <>
              <button
                onClick={() => handleStatusApiCall("undraft")}
                className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]"
              >
                Undraft
              </button>
              <button
                onClick={() => handleStatusApiCall("live")}
                className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]"
              >
                Publish
              </button>
            </>
          )}
          {status === "undraft" && (
            <>
              <button
                onClick={() => handleStatusApiCall("draft")}
                className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]"
              >
                Mark as Draft
              </button>
              <button
                onClick={() => handleStatusApiCall("live")}
                className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]"
              >
                Publish
              </button>
            </>
          )}
          <Link to={`/preview/leadership/${data?.id}`}>
          <button className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
            Preview
          </button>
          </Link>
        </div>

        <h2 className="text-[22px] text-[#BD2F2C]">{data?.banner_heading || "NA"}</h2>
        <p className="text-[20px] text-gray-600">{data?.designation || "NA"}</p>
      </div>
    </div>
  );
};

export default LeadershipCard;
