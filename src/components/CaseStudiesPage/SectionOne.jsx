import { useState, useRef } from "react";

const SectionOne = () => {
  const [isImage, setIsImage] = useState(null);
  const subHeadingRef = useRef(null);
  const headingRef = useRef(null);

  const handleImageChange = (evt) => {
    setIsImage(evt.target.files[0]);
    console.log(isImage);
  };

  const autoResize = (ref) => {
    if (ref.current) {
      ref.current.style.height = "30px"; // reset to initial height
      ref.current.style.height = ref.current.scrollHeight + "px"; // expand to content
    }
  };

  return (
    <div className="h-[260px] w-full bg-[#FFF8F8] border-[1px] border-dashed border-[#BD2F2C]">
      <div className="h-full w-full relative">
        {isImage && (
          <img
            className="absolute left-0 top-0 z-0 h-full w-full object-cover"
            src={URL.createObjectURL(isImage)}
            alt=""
          />
        )}

        <div
          className={`overlay ${
            isImage && "bg-[#00000086]"
          } px-10 z-0 h-full w-full relative top-0 left-0 flex justify-between items-center`}
        >
          <div className="flex h-full w-full relative z-10">
            <div className="w-[40%] flex flex-col justify-center">
              <div className="w-full">
                <textarea
                  ref={subHeadingRef}
                  placeholder="Sub Heading"
                  style={{ height: "30px" }}
                  className={`w-full outline-0 border-0 resize-none overflow-hidden ${
                    isImage
                      ? "text-[#ffffff] placeholder:text-[#ffffff]"
                      : "text-[#000000] placeholder:text-[#000000]"
                  } text-[21px]`}
                  onInput={() => autoResize(subHeadingRef)}
                />
              </div>
              <div className=" w-full">
                <textarea
                  ref={headingRef}
                  placeholder="Enter Heading"
                  style={{ height: "40px" }}
                  className={`w-full outline-0 border-0 resize-none overflow-hidden ${
                    isImage
                      ? "text-[#ffffff] placeholder:text-[#ffffff]"
                      : "text-[#000000] placeholder:text-[#000000]"
                  } text-[28px]`}
                  onInput={() => autoResize(headingRef)}
                />
              </div>
            </div>
            <div className="w-[60%] relative flex justify-end items-center z-40 h-full">
              <div className="h-full w-[200px] flex justify-center items-center flex-col relative">
                <input
                  onChange={handleImageChange}
                  type="file"
                  className="absolute left-0 top-0 h-full w-full z-30 opacity-0 cursor-pointer"
                />
                {!isImage && (
                  <div className="flex flex-col items-center justify-center">
                    <img src="/icons/upload.png" alt="" />
                    <h3 className="text-[#BD2F2C] mt-2 font-semibold">Upload Logo</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
