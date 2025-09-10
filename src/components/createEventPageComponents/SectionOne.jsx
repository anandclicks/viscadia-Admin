import React, { useContext, useState } from "react";
const SectionOne = () => {
  const [logoPreview, setLogoPreview] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const handleLogoChange = (evt) => {
    const file = evt.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setLogoPreview(imageUrl);
    }
  };
  const handleImageChange = (evt) => {
    const file = evt.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };
  return (
    <div className="h-[340px] w-full shadow relative flex">
      <div className="EventPagesectionOne w-full h-[340px] object-cover absolute z-10">
        <img className="h-full w-full object-cover" src="../images/SectionOneBg.png" alt="" />
      </div>
      <div className="w-[60%] h-full p-4  flex flex-col gap-10 relative z-20">
        <div className="w-[240px]">
          <div className="h-[130px] border border-dashed border-[#960000] w-full bg-amber-200 relative">
            <div className="absolute left-0 top-0 h-full w-full bg-[#FFF5F5] flex justify-center items-center flex-col">
              <img src="../icons/upload.png" alt="" />
              <h3 className="text-[#960000] font-semibold mt-2">Upload Logo</h3>
            </div>
            {logoPreview && (
              <div className="absolute left-0 z-10 top-0 h-full overflow-hidden w-full bg-white flex justify-center items-center flex-col">
                <img src={logoPreview} className="max-w-full max-h-full object-contain" alt="" />
              </div>
            )}
            <input onChange={handleLogoChange} type="file" className="opacity-0 h-full w-full cursor-pointer relative z-20" accept="image/*" name="" id="" />
          </div>
          <p className="text-[13px] mt-2 font-medium text-end">Upload JPG/PNG · Max 5MB</p>
        </div>
        <div className="">
          <div className="h-[40px] w-full">
            <input placeholder="Enter Title Name" className="w-full h-full outline-0 border-0 text-[#133D65] placeholder:text-[#133D65]  text-[21px]" type="text" name="" id="" />
          </div>
          <div className="mt-5 mb-3 flex gap-10 ">
            <div className="flex gap-2 min-w-[100px]">
              <img className="h-[20px]" src="../icons/date.png" alt="" />
              <input type="text" className="generalCssForInputs h-[20px] text-[15px] placeholder:font-medium" placeholder="September 10-12-2025" name="date" id="" />
            </div>
            <div className="flex gap-2 min-w-[60%]">
              <img className="h-[20px]" src="../icons/location.png" alt="" />
              <input type="text" className="generalCssForInputs h-[20px] text-[15px] placeholder:font-medium w-full" placeholder="Add Location" name="date" id="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[42%] border-dashed border-[#960000] border h-full rightSide  bg-amber-400 z-0 flex justify-end relative">
        <div className="absolute left-0 top-0 h-full w-full bg-[#FFF8F8] flex justify-center items-center flex-col">
          <img src="../icons/upload.png" alt="" />
          <h3 className="text-[#960000] font-semibold mt-2">Upload Image</h3>
        </div>
        {imagePreview && (
          <div className=" left-0 z-10 top-0 h-full overflow-hidden w-full bg-white flex justify-center items-center flex-col">
            <img src={imagePreview} className="h-full w-full  object-cover" alt="" />
          </div>
        )}
      </div>
      <input onChange={handleImageChange} type="file" className="opacity-0 h-full end-0 cursor-pointer absolute z-10 w-[40%]" accept="image/*" name="" id="" />
    </div>
  );
};
export default SectionOne;
