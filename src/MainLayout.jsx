import { Outlet } from "react-router-dom"
import Sidebar from "./components/common/Sidebar"
import Navbar from "./components/common/Navbar"

const MainLayout = () => {
  return (
      <div className='h-[100vh] w-full  p-3 bg-[#F4F1F2]'>
        <div><Navbar/></div>
   <div className="flex h-[calc(100%-70px)]">
      <div className='w-[19%] h-full bg-[#F4F1F2]'>
       <Sidebar/>
     </div>
      <div className='w-[81%] h-full bg-[#F4F1F2]'>
        <div className='h-full w-full bg-white outletWrapper rounded-2xl overflow-scroll p-5'>
          {<Outlet/>}
        </div>
   </div>
      </div>
    </div>
  )
}

export default MainLayout
