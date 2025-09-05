import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"

const MainLayout = () => {
  return (
      <div className='h-[100vh] w-full flex p-3 bg-[#F4F1F2]'>
     <div className='w-[22%] h-full bg-[#F4F1F2]'>
       <Sidebar/>
     </div>
      <div className='w-[88%] h-full bg-[#F4F1F2]'>
        <Navbar/>
        <div className='h-[calc(100%-70px)] w-full bg-white outletWrapper rounded-2xl overflow-scroll p-5'>
          {<Outlet/>}
        </div>
      </div>
    </div>
  )
}

export default MainLayout
