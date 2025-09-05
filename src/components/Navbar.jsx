import { useState } from 'react'

const Navbar = () => {
  const [notificationTab, setNotificationTab] = useState(false)
  return (
    <div className='h-18 w-full px-4 flex justify-between items-center bg-[#F4F1F2] '>
      <div className='relative h-[40px] w-120'>
       <img className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5' src="./searchIcon.png" alt="" />
        <input
          type='text'
          placeholder='Search..'
          className='h-full w-full pl-10 pr-4  rounded-full  text-[16px] bg-white outline-0 placeholder-gray-400 transition-all duration-200'
        />
      </div>
       <div className='flex gap-4 items-center'>
        <button className='h-[50px] w-[50px] bg-white flex justify-center items-center rounded-full'>
          <img src="./icons/notificationIcon.png" alt="" />
        </button>
        <button className='h-[50px] w-[50px] bg-white flex justify-center items-center rounded-full'>
          <img src="./icons/settingIcon.png" alt="" />
        </button>
        <button className='h-[50px] w-[50px] border-[2px] border-[#c50000] rounded-full relative'>
         <img
            className='h-[100%] w-[100%] object-cover rounded-full'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3UjosF-j3Ss0503ak8hGQb-PX4DjCRAQGbg&s'
            alt='Profile'
          />
          <div className='h-[15px] w-[15px] rounded-full bg-green-500 border border-white absolute bottom-[-2px] right-[0px]'></div>
       </button>
       </div>
    </div>
  )
}

export default Navbar