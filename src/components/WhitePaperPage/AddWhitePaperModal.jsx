import React, { useState } from "react";

const AddWhitePaperModal = ({ setIsOpen }) => {
  const [whitePaperData, setWhitePaperData] = useState({
    heading: "",
    subHeading: "",
    pdf: null,
  });

  const handleInputs = (evt) => {
    const { type, name, files, value } = evt.target;
    setWhitePaperData((prev) => {
      const newState = { ...prev, [name]: type === "file" && files ? files[0] : value };
      console.log(newState);
      return newState;
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000034] bg-opacity-30">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[20px] shadow-lg h-[400px] w-[50%] p-6 relative"
      >
        <div className="border-b-[1px] border-stone-400 pb-4 flex w-full justify-between">
          <h2 className="text-[24px] font-semibold text-black">
            Add New White Paper
          </h2>
          <button type="button" onClick={() => setIsOpen(false)}>
            <img className="h-[30px] w-[30px]" src="./closeDarkBtn.png" alt="" />
          </button>
        </div>

        <div className="flex flex-wrap gap-10 mt-8">
          <div className="min-h-[50px] w-[40%]">
            <p className="text-[19px] font-[500] text-stone-700">Heading</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[45px] rounded-lg border-[1px] items-center border-stone-200 mt-3 flex">
              <input
                placeholder="Enter Heading"
                className="w-[90%] text-stone-700 placeholder:text-stone-500 h-full outline-none border-0 px-3"
                type="text"
                name="heading"
                onChange={handleInputs}
              />
              <button type="button">
                <img className="h-[20px] w-[20px]" src="./closeDarkBtn.png" alt="" />
              </button>
            </div>
          </div>

          <div className="min-h-[50px] w-[40%]">
            <p className="text-[19px] font-[500] text-stone-700">Sub-Heading</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[45px] rounded-lg border-[1px] items-center border-stone-200 mt-3 flex">
              <input
                placeholder="Enter Sub-Heading"
                className="w-[90%] text-stone-700 placeholder:text-stone-500 h-full outline-none border-0 px-3"
                type="text"
                name="subHeading"
                onChange={handleInputs}
              />
              <button type="button">
                <img className="h-[20px] w-[20px]" src="./closeDarkBtn.png" alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 mt-8">
          <div className="min-h-[50px] w-[40%]">
            <p className="text-[19px] font-[500] text-stone-700">Upload PDF</p>
            <div className="w-full justify-between px-1 shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[45px] rounded-lg border-[1px] items-center border-stone-200 mt-3 flex">
              <div className="w-[50%] flex items-center cursor-pointer relative h-full">
                <p className="ml-2 text-gray-600 z-0 cursor-pointer">Choose File</p>
                <input
                  className="w-full opacity-0 left-0 top-0 cursor-pointer absolute z-20 text-stone-700 placeholder:text-stone-500 h-full outline-none border-0 px-3"
                  type="file"
                  name="pdf"
                  onChange={handleInputs}
                />
              </div>
              <button type="button">
                <img className="h-[30px] mr-2" src="./folder.png" alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-end gap-5">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="bg-[#FFFFFF] border-[1px] border-[#E8E8E8] shadow hover:bg-[#e8e8e88e] transition-all p-2 rounded-full font-medium px-9 text-[17px] mt-5"
          >
            Cancel
          </button>
          <button
            type="button"
            className="grediantBg text-white p-2 rounded-full font-medium px-9 text-[17px] mt-5"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWhitePaperModal;
