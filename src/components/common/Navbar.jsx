import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { PorfileContext } from '../../../context/ProfileDetailsContext'

const Navbar = () => {
  const [notificationTab, setNotificationTab] = useState(false)
  const {loggedInUser} = useContext(PorfileContext)
  document.addEventListener("click",()=>{
    setNotificationTab(false)
  })
  return (
    <div className='h-18 w-full flex justify-between items-center bg-[#F4F1F2] '>
     <div className='flex items-center gap-5'>
      <button>
        <img className='h-[50px]' src="/logo.png" alt="" />
        </button>
      <div className='relative h-[45px] w-120'>
       <img className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5' src="/searchIcon.png" alt="" />
        <input
          type='text'
          placeholder='Search..'
          className='h-full w-full pl-10 pr-4  rounded-full  text-[16px] bg-white outline-0 placeholder-gray-400 transition-all duration-200'
        />
      </div>
     </div>
       <div className='flex gap-4 items-center'>
        
        <button onClick={(e) => {e.stopPropagation(); setNotificationTab((prev) => !prev)}} className='h-[50px] w-[50px] bg-white relative flex justify-center items-center rounded-full'>
          <img src="/icons/notificationIcon.png" alt="" />
          <div
          onClick={(e)=> e.stopPropagation()}
            className={`${
              notificationTab ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
            } min-h-[350px] w-80 bg-white shadow-lg absolute right-0 top-12 transition-all duration-200 rounded-xl border border-gray-100 p-4 z-90`}
          >
            <div className='w-full flex justify-end items-center mb-4'>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='p-3 bg-gray-50 rounded-lg'>
                <p className='text-sm font-medium'>Event is now live</p>
                <p className='text-xs text-gray-500'>5 minutes ago</p>
              </div>
              <div className='p-3 bg-gray-50 rounded-lg'>
                <p className='text-sm font-medium'>New user logged in</p>
                <p className='text-xs text-gray-500'>30 minutes ago</p>
              </div>
              <div className='p-3 bg-gray-50 rounded-lg'>
                <p className='text-sm font-medium'>User A deleted event 2</p>
                <p className='text-xs text-gray-500'>1 hour ago</p>
              </div>
            </div>
          </div>
        </button>
        <Link to={'/profile'} className='h-[50px] w-[50px] border-[2px] border-[#c50000] rounded-full relative'>
         <img
            className='h-[100%] w-[100%] object-cover rounded-full'
            src={loggedInUser?.profile_picture || "/images/userPlceholder.webp"}
            alt='Profile'
          />
          <div className='h-[15px] w-[15px] rounded-full bg-green-500 border border-white absolute bottom-[-2px] right-[0px]'></div>
       </Link>
       </div>
    </div>
  )
}

export default Navbar