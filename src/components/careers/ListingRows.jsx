import React from "react";
import { Link } from "react-router-dom";

const ListingRows = ({ id, isOpen, onToggle, data, onAction }) => {
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
      <div className="relative flex items-center">
        <button className="w-fit px-6 text-[#37ad00] font-semibold bg-[#3ab70025] py-2 rounded-full text-[12px]">
          Published
        </button>
        <button
          onClick={handleActionMenu}
          className="hover:text-[#BD2F2C] text-[30px] relative"
        >
          <i className="ri-more-2-fill"></i>
        </button>

        <div
          onClick={(e) => e.stopPropagation()}
          className={`${
            isOpen ? "opacity-100 block" : "opacity-0 hidden"
          } h-[200px] w-[170px] bg-white shadow-lg absolute left-[-50px] top-13 z-20 border rounded-xl border-[#0000001c] px-2 transition-all duration-300`}
        >
          <Link to={`/edit/career/${data?.id}`}>
          <button className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
            Edit
          </button>
          </Link>
          <button
            onClick={() => handleActionClick("draft")}
            className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]"
          >
            Mark as Draft
          </button>
          <button
            onClick={() => handleActionClick("publish")}
            className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]"
          >
            Publish
          </button>
          <button
            onClick={() => handleActionClick("preview")}
            className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]"
          >
            Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingRows;
