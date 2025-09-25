const SectionThree = () => {
  return (
    <div className="h-full w-full grid grid-cols-3 gap-10 ps-5">
      {Array(3)
        .fill({})
        .map((_, index) => (
          <div key={index} className="h-full">
            <div className="h-[150px] w-[150px] rounded-full bg-[#FFF8F8] overflow-hidden border border-dashed border-[#BD2F2C]">
              <div className="flex h-full w-full relative flex-col items-center justify-center">
                <input
                  className="h-full w-full opacity-0 cursor-pointer left-0 top-0 absolute z-20"
                  type="file"
                  name="img"
                />
                <div className="h-full w-full flex flex-col justify-center items-center">
                  <img src="/icons/upload.png" alt="" />
                  <h3 className="text-[#BD2F2C] mt-2 font-semibold">
                    Upload Logo
                  </h3>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <textarea
                className="h-[40px] w-full outline-0 border-0 resize-none overflow-hidden placeholder:text-[#000000] text-[#000000] text-[25px]"
                placeholder="Heading"
              />

              <div>
                {/* Static key points */}
                <div className="flex items-start gap-2">
                  <textarea
                    placeholder="Key Points"
                    className="h-[24px] w-full outline-0 border-0 resize-none overflow-hidden placeholder:text-[#000] text-[#000] text-[16px]"
                  />
                </div>

                {/* Button kept for UI consistency, but no functionality */}
                <button className="bg-[#BD2F2C] mt-2 text-[#fff] p-[4px] rounded-full font-medium px-4 text-[13px]">
                  <i className="ri-add-line"></i> Add More
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SectionThree;
