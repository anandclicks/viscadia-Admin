import React from "react";

const EventAndWebListingCard = ({ id, isOpen, onToggle }) => {
  const handleActionMenu = (evt) => {
    evt.stopPropagation();
    onToggle(id);
  };

  return (
    <div
      onClick={() => onToggle(null)}
      className="w-full h-[240px] my-5  rounded-[30px] flex fsTwo shadow-[0px_0px_3px_#0000000f] border border-[#f1f1f1]"
    >
      <img
        className="w-[28%] h-full rounded-[30px]"
        src="./testingImg/one.jpg"
        alt=""
      />
      <div className="w-[72%] h-full px-5 flex flex-col justify-center">
        <div className="w-full flex justify-between mb-2">
          <h2 className="text-[22px] font-semibold ">Intellus Institute 2025</h2>
          <div className="relative flex gap-3 mb-2">
            <button className="Published">Published</button>
            <button
              onClick={handleActionMenu}
              className="hover:text-[#BD2F2C] text-[30px] relative"
            >
              <i className="ri-more-2-fill"></i>
            </button>

            <div
              className={`${
                isOpen ? "opacity-100 block" : "opacity-0 hidden"
              } h-[200px] w-[170px] bg-white shadow-lg absolute left-[0px] mt-3 z-20 border rounded-xl border-[#0000001c] px-2`}
            >
              <button  className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
                Edit
              </button>
              <button className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
                Mark as Draft
              </button>
              <button className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
                Publish
              </button>
              <button className="w-full h-[20%] my-1 hover:bg-stone-50 hover:text-black font-semibold text-start px-2 border-b border-[#f8f8f8]">
                Preview
              </button>
            </div>
          </div>
        </div>
        <p className="text-[17px] leading-[20px]">
          The Intellus Institute 2025 is a premier gathering for healthcare
          insights and analytics professionals, bringing together leaders from
          pharma, biotech, and diagnostics to drive innovation and impact. The
          program features keynotes, interactive workshops, panel discussions,
          and networking, covering topics such as generative AI in research.
        </p>
      </div>
    </div>
  );
};

export default EventAndWebListingCard;
