import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const EventAndWebFilter = ({active, setActive}) => {
  return (
    <div className='h-[80px] w-full fsTwo flex  justify-between border-b border-[#E8E8E8]'>
      <div className='h-full flex gap-10 items-center'>
        <h2 className='text-[25px] font-semibold'>Events & Webinars</h2>
        <div className='w-[250px] h-[45px] rounded-full border border-[#E8E8E8] flex relative'>
          <button onClick={()=> setActive(0)} className={`${active === 0 ? 'text-white font-medium' : "font-semibold"} z-10 h-full w-[50%] hover:bg-[#0000000a] transition-all rounded-full`}>Events</button>
          <button onClick={()=> setActive(1)} className={`${active === 1 ? 'text-white font-medium' : "font-semibold"} z-10 h-full w-[50%] hover:bg-[#0000000a]  transition-all rounded-full`}>Webinars</button>
          <div className={`${active === 1 ? 'translate-x-[100%]' : 'translate-x-[0%]'} h-full w-[50%] duration-250 activeTabs transition-all rounded-full absolute top-0 z-1`}></div>
        </div>
      </div>
      <div className='h-full flex items-center gap-3'>
         <Link to={'/event/create'} className={`z-10 h-[45px] border-1  min-w-[170px] hover:bg-[#e8e8e85e] flex justify-center items-center gap-2 border-[#E8E8E8] font-medium transition-all rounded-full`}>
          <img className='h-[15px]' src='./icons/plus.png'/> New Event</Link>
         <Link  to={'/event/webanar'} className={`z-10 h-[45px] border-1  min-w-[170px] hover:bg-[#e8e8e85e] flex justify-center items-center gap-2 border-[#E8E8E8] font-medium transition-all rounded-full`}>
          <img className='h-[15px]' src='./icons/plus.png'/> New Webinar</Link>
         <button className={`z-10 h-[45px] border-1  min-w-[50px] hover:bg-[#e8e8e85e] flex justify-center items-center gap-2 border-[#E8E8E8] font-medium transition-all rounded-full`}>
          <img className='h-[15px]' src='./icons/setting.png'/> </button>
      </div>
    </div>
  )
}

export default EventAndWebFilter
