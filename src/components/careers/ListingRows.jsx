import { useState } from "react";
import { Link } from "react-router-dom";

const ListingRows = ({ id, isOpen, onToggle, data, onAction }) => {
  const [careerStatus, setCareerStatus] = useState(data?.status || "draft");

  const handleActionMenu = (evt) => {
    evt.stopPropagation();
    onToggle(id);
  };

  const handleActionClick = (action) => {
    onAction(id, action);
    onToggle(id);
  };


  return (
    <div className="flex w-full justify-between items-center border-b border-stone-200 py-3">
      <p className="font-semibold text-[19px]">{data?.heading}</p>
      <div className="relative flex gap-3 mb-2">
        {careerStatus === "live" && (
          <button className="Published">Published</button>
        )}
        {careerStatus === "draft" && <button className="draft">Draft</button>}
        {careerStatus === "undraft" && (
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
          } min-h-[150px] w-[170px] bg-white shadow-lg absolute left-[-40px] mt-13 z-20 border rounded-xl border-[#0000001c] px-2`}
        >
          <Link to={`/edit/career/${data?.id}`} className="">
            <button className="h-[40px] w-full my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
              Edit
            </button>
          </Link>
          {careerStatus === "live" && (
            <>
              <button
                onClick={() => setCareerStatus("draft")}
                className="w-full h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]"
              >
                Mark as Draft
              </button>
              <button
                onClick={() => setCareerStatus("undraft")}
                className="w-full h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]"
              >
                Undraft
              </button>
            </>
          )}
          {careerStatus === "draft" && (
            <>
              <button
                onClick={() => setCareerStatus("undraft")}
                className="w-full h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]"
              >
                Undraft
              </button>
              <button
                onClick={() => setCareerStatus("live")}
                className="w-full h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]"
              >
                Publish
              </button>
            </>
          )}
          {careerStatus === "undraft" && (
            <>
              <button
                onClick={() => setCareerStatus("draft")}
                className="w-full h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]"
              >
                Mark as Draft
              </button>
              <button
                onClick={() => setCareerStatus("live")}
                className="w-full h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]"
              >
                Publish
              </button>
            </>
          )}

          <button className="">
            <Link to={`/preview/event/${data?.id}`} className="">
              <button className="w-[170px] h-[40px] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
                Preview
              </button>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingRows;
