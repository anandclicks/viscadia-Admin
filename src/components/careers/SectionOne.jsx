import React, { useContext } from 'react'
import { CareersContext } from '../../../context/CareersContext'

const SectionOne = ({ref}) => {
  const {handleCareersInpust,createCareerData} = useContext(CareersContext)
  return (
    <div ref={ref} className="h-[260px] w-full bg-[#FFF8F8]">
      <div className="h-full w-full relative">
        <div className={`bg-[#BD2F2C] px-10 z-0 h-full w-full relative top-0 left-0 flex justify-between items-center`}>
          <div className="flex h-full w-full relative z-10">
            <div className="w-[40%] flex flex-col justify-center">
              <div className="w-full">
                <textarea
                 required
                 name="subHeading"
                 onInput={handleCareersInpust}
                  value={createCareerData?.subHeading}
                  placeholder="Sub Heading"
                  style={{ height: "30px" }}
                  className={`w-full outline-0 border-0 resize-none font-light placeholder:text-white placeholder:font-light overflow-hidden text-white text-[21px]`}
                />
              </div>
              <div className=" w-full">
                <textarea
                  required
                  placeholder="HEADING"
                  onInput={handleCareersInpust}
                  value={createCareerData?.heading}
                  name="heading"
                  style={{ height: "40px" }}
                  className={`w-full outline-0 placeholder:text-white text-white font-light placeholder:font-light border-0 resize-none overflow-hidden text-[28px]`}
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
