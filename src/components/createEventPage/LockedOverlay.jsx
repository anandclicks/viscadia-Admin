import React from 'react'

const LockedOverlay = () => {
  return (
   <div className="absolute z-50 h-full w-full flex items-center justify-center 
              bg-stone/40 backdrop-blur-lg ">
    <div className="text-center text-[#ffffff] shadow-lg h-[80px] w-[80px] flex justify-center items-center rounded-full">
   <i className="ri-lock-2-fill text-[50px]"></i>
    </div>
  </div>
  )
}

export default LockedOverlay
