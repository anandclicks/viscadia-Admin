import React, { useContext } from 'react'
import { CareersContext } from '../../../context/CareersContext'

const SectionTwo = ({ref}) => {
     const {handleCareersInpust,createCareerData,addObjsInSectionsTwo,functionForToggleStatus} = useContext(CareersContext)
  return (
    <div ref={ref} className='my-10 bg-[#F1F0F1] h-[290px] p-5 pt-7 relative'>
        <div className="px-10 flex justify-end gap-2 items-center absolute right-0 top-0 mt-5">
        <p>{addObjsInSectionsTwo?.sectionTwoStatus ? "Hide" : "Unhide"}</p>
        <button onClick={()=> functionForToggleStatus("sectionTwoStatus")} type="button"  className={`w-[80px] transition-all duration-200 ${createCareerData?.sectionTwoStatus ? "grediantBg" : 'bg-gray-400'} h-full rounded-full p-1 cursor-pointer flex items-center`}>
          <div className={`h-[30px] w-[30px] transition-all bg-white rounded-full ${createCareerData?.sectionTwoStatus ? "translate-x-0" : "translate-x-10"}`}></div>
        </button>
      </div>
        <h2 className='text-[30px] text-center text-[#BD2F2C]'>Principal, Integrated Insights</h2>
        <div className='w-full flex justify-center'>
            <textarea onInput={handleCareersInpust} value={createCareerData?.country} name="country" placeholder='Enter Country' className='placeholder:text-[21px] placeholder:text-center text-[21px] generalCssForInputs' id=""></textarea>
        </div>
         <div className=''>
            <textarea onInput={handleCareersInpust} value={createCareerData?.sectionTwoSubHeading} name="sectionTwoSubHeading" placeholder='Enter Sub Heading' className='placeholder:text-[21px] text-[21px] generalCssForInputs' id=""></textarea>
        </div>
    </div>
  )
}

export default SectionTwo
