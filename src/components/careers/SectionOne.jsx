import React from 'react'

const SectionOne = () => {
  return (
    <div className="h-[260px] w-full bg-[#FFF8F8]">
      <div className="h-full w-full relative">
        {false && (
          <img
            className="absolute left-0 top-0 z-0 h-full w-full object-cover"
            src={""}
            alt=""
          />
        )}

        <div
          className={`bg-[#BD2F2C] px-10 z-0 h-full w-full relative top-0 left-0 flex justify-between items-center`}
        >
          <div className="flex h-full w-full relative z-10">
            <div className="w-[40%] flex flex-col justify-center">
              <div className="w-full">
                <textarea
                name="urlTitle"
                  value={""}
                  placeholder="Sub Heading"
                  style={{ height: "30px" }}
                  className={`w-full outline-0 border-0 resize-none placeholder:text-white placeholder:font-light overflow-hidden text-white text-[21px]`}
                />
              </div>
              <div className=" w-full">
                <textarea
                  placeholder="HEADING"
                  value={""}
                  name="mainSubtitle"
                  style={{ height: "40px" }}
                  className={`w-full outline-0 placeholder:text-white placeholder:font-light border-0 resize-none overflow-hidden text-[28px]`}
                />
              </div>
            </div>
            <div className="w-[60%] relative flex justify-end items-center z-40 h-full">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionOne
