import React, { useContext } from 'react'
import { CareersContext } from '../../../context/CareersContext'

const SectionFour = ({ref}) => {
  const { createCareerData, addKeyPointsInArray, handleTextsChange, handleObjInpusChanges, addObjsInSectionsTwo, functionForToggleStatus } = useContext(CareersContext)

  return (
    <div ref={ref} className='min-h-[350px] bg-[#F1F0F1] flex-col my-10 flex justify-between w-full shadow relative p-5'>
      <div className="px-10 flex justify-end gap-2 items-center absolute right-0 top-0 mt-5">
        <p>{createCareerData?.qualificationsStatus ? "Hide" : "Unhide"}</p>
        <button onClick={() => functionForToggleStatus("qualificationsStatus")} type="button" className={`w-[80px] transition-all duration-200 ${createCareerData?.qualificationsStatus ? "grediantBg" : 'bg-gray-400'} h-full rounded-full p-1 cursor-pointer flex items-center`}>
          <div className={`h-[30px] w-[30px] transition-all bg-white rounded-full ${createCareerData?.qualificationsStatus ? "translate-x-0" : "translate-x-10"}`}></div>
        </button>
      </div>
      <div className='flex justify-center flex-col items-center'>
        <img className='h-[70px]' src="/careers/imgeOne.png" alt="" />
        <h2 className='text-[#BD2F2C] text-[28px] mt-2 uppercase'>qualifications</h2>
      </div>
      <div className='flex flex-col justify-center items-center'>
        {createCareerData?.qualifications?.map((el, minIndex) => (
          <div key={minIndex} className='flex flex-col justify-center items-center'>
            <textarea name="subHeading" value={el?.subHeading} onInput={(e) => handleObjInpusChanges(e, "qualifications", minIndex)} placeholder='Enter Sub Heading' className='placeholder:text-[21px] text-[21px] h-[40px] placeholder:text-black placeholder:text-center generalCssForInputs' />
            <div>
              {el?.keyPoints?.map((text, index) => (
                <div key={index} className='flex gap-2'>
                  <img src="/caseStudy/dot.png" className="mt-1 h-[10px] w-[10px] object-contain" alt="" />
                  <textarea name="text" value={text} onInput={(e) => handleTextsChange(e, "qualifications", minIndex, index)} placeholder="Key Points" className="h-[24px] w-full outline-0 border-0 resize-none overflow-hidden placeholder:text-[#000] text-[#000] text-[14px]" />
                </div>
              ))}
              <button type='button' onClick={() => addKeyPointsInArray('qualifications', minIndex)} className='bg-[#BD2F2C] text-[#fff] p-[4px] rounded-full font-medium px-4 mt-2 mb-7 text-[13px]'>Add More</button>
            </div>
          </div>
        ))}
        <button onClick={() => addObjsInSectionsTwo("qualifications")} type='button' className='bg-[#BD2F2C] flex items-center gap-2 text-[#fff] p-[6px] rounded-full font-medium px-6 text-[17px] mb-7'>
          <img className='h-[10px]' src="/icons/plusWhite.png" alt="" /> Add More
        </button>
      </div>
    </div>
  )
}

export default SectionFour
