import React from 'react'

const LockedOverlay = () => {
  return (
   <div className="absolute z-50 h-full w-full flex-col flex items-center justify-center 
              bg-stone/40 backdrop-blur-lg ">
    <div className="text-center bg-white text-[#BD2F2C] shadow-lg h-[60px] w-[60px] flex justify-center items-center rounded-full">
   <i className="ri-lock-2-fill text-[30px]"></i>
    </div>
   <p className='mt-2 text-white bg-[#BD2F2C] px-4 py-1 text-[15px] rounded-full'>Locked By Owner!</p>

  </div>
  )
}

export default LockedOverlay
