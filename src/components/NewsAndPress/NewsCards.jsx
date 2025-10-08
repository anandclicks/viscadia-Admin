import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { putCommonApiForEvnts } from "../../utils/reuseableFunctions";

const NewsCards = ({ id, isOpen, onToggle, data }) => {
  const [newsStatus, setNewsStatus] = useState(data?.status);

  const handleActionMenu = (evt) => {
    evt.stopPropagation();
    onToggle(id);
  };

  const handleStatusApiCall = async (status) => {
    const t = toast.loading("Updating status...");
    const newsId = data?.id;
    const res = await putCommonApiForEvnts(`/article/${newsId}`, { status });
    toast.dismiss(t);

    if (res.success) {
      toast.success("Status updated successfully!");
      setNewsStatus(status);
    } else {
      toast.error(res?.message || "Failed to update status!");
    }
  };

  return (
    <>
      {data && (
        <div
          onClick={() => onToggle(null)}
          className="w-full h-[220px] my-5 rounded-[30px] flex fsTwo shadow-[0px_0px_3px_#0000000f] border border-[#f1f1f1]"
        >
          <img
            className="w-[28%] h-full rounded-[30px] object-cover"
            src={data?.section_one_image || "/imagePlaceholder.jpg"}
            alt={data?.title || "News image"}
          />
          <div className="w-[72%] h-full px-5 flex flex-col justify-center">
            <div className="w-full flex justify-between mb-2">
              <h2 className="text-[22px] font-semibold">{data?.title}</h2>

              <div className="relative flex gap-3 mb-2">
                {newsStatus === "live" && <button className="Published">Published</button>}
                {newsStatus === "draft" && <button className="draft">Draft</button>}
                {newsStatus === "undraft" && (
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
                >
                  <Link to={`/edit/news-and-press-releases/${data?.id}`} className="">
                    <button className="h-[40px] w-full my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
                      Edit
                    </button>
                  </Link>

                  {newsStatus === "live" && (
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

                  {newsStatus === "draft" && (
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

                  {newsStatus === "undraft" && (
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

                  {/* <Link to={`/preview/news-and-press-releases/${data?.id}`} className="">
                    <button className="w-full h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
                      Preview
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>

            <p className="text-[17px] leading-[20px]">{data?.section_two_details}</p>
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

export default NewsCards;
