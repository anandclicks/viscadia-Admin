import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="h-full w-full px-2 pe-4 flex flex-col justify-between bg-[#F4F1F2]">
      <div className="w-full pt-3">
        <img src="./logo.png" alt="" />
        <div className="space-y-1">
          <NavLink to={"/"} className="flex items-center gap-3 px-2 py-2 text-[16px] cursor-pointer text-black rounded-lg duration-200 mt-2">
            {({ isActive }) => (
              <>
                <div className={`${isActive ? "activeTabs" : "bg-white"} rounded-full h-[55px] w-[55px] flex justify-center items-center shadowcus1`}>
                  <img src={`${isActive ? "./icons/homeWhite.png" : "./icons/home.png"}`} className="h-[25px] w-[25px]" alt="" />
                </div>
                <p className={`${isActive ? "opacity-100 font-semibold" : "opacity-70 text-black max-w-[60%]"}`}>Home Page</p>
              </>
            )}
          </NavLink>

          <NavLink to={"/news-and-press-releases"} className="flex items-center gap-3 px-2 py-2 text-[16px] cursor-pointer text-black rounded-lg duration-200 mt-2">
            {({ isActive }) => (
              <>
                <div className={`${isActive ? "activeTabs" : "bg-white"} rounded-full h-[55px] w-[55px] flex justify-center items-center shadowcus1`}>
                  <img src={`${isActive ? "./icons/newsPersonWhite.png" : "./icons/newsPerson.png"}`} className="h-[30px] w-[30px]  text-black" alt="" />
                </div>
                <p className={`${isActive ? "opacity-100 font-semibold" : "opacity-70 text-black max-w-[60%]"}`}>Latest News & Press Releases</p>
              </>
            )}
          </NavLink>

          <NavLink to={"/case-studies-and-white-papers"} className="flex items-center gap-3 px-2 py-2 text-[16px] cursor-pointer text-black rounded-lg duration-200 mt-2">
            {({ isActive }) => (
              <>
                <div className={`${isActive ? "activeTabs" : "bg-white"} rounded-full h-[55px] w-[55px] flex justify-center items-center shadowcus1`}>
                  <img src={`${isActive ? "./icons/caseStudy.png" : "./icons/caseStudy.png"}`} className="h-[30px] w-[30px]  text-black" alt="" />
                </div>
                <p className={`${isActive ? "opacity-100 font-semibold" : "opacity-70 text-black max-w-[60%]"}`}>Case Studies & White Papers</p>
              </>
            )}
          </NavLink>

           <NavLink to={"/leadership"} className="flex items-center gap-3 px-2 py-2 text-[16px] cursor-pointer text-black rounded-lg duration-200 mt-2">
            {({ isActive }) => (
              <>
                <div className={`${isActive ? "activeTabs" : "bg-white"} rounded-full h-[55px] w-[55px] flex justify-center items-center shadowcus1`}>
                  <img src={`${isActive ? "./icons/leadershipWhite.png" : "./icons/leadership.png"}`} className="h-[30px] w-[30px]  text-black" alt="" />
                </div>
                <p className={`${isActive ? "opacity-100 font-semibold" : "opacity-70 text-black max-w-[60%]"}`}>Leadership Page</p>
              </>
            )}
          </NavLink>

           <NavLink to={"/events-and-webinars"} className="flex items-center gap-3 px-2 py-2 text-[16px] cursor-pointer text-black rounded-lg duration-200 mt-2">
            {({ isActive }) => (
              <>
                <div className={`${isActive ? "activeTabs" : "bg-white"} rounded-full h-[55px] w-[55px] flex justify-center items-center shadowcus1`}>
                  <img src={`${isActive ? "./icons/eventWhite.png" : "./icons/event.png"}`} className="h-[30px] w-[30px]  text-black" alt="" />
                </div>
                <p className={`${isActive ? "opacity-100 font-semibold" : "opacity-70 text-black max-w-[60%]"}`}>Events & Webinars</p>
              </>
            )}
          </NavLink>

           <NavLink to={"/careers"} className="flex items-center gap-3 px-2 py-2 text-[16px] cursor-pointer text-black rounded-lg duration-200 mt-2">
            {({ isActive }) => (
              <>
                <div className={`${isActive ? "activeTabs" : "bg-white"} rounded-full h-[55px] w-[55px] flex justify-center items-center shadowcus1`}>
                  <img src={`${isActive ? "./icons/careersWhite.png" : "./icons/careers.png"}`} className="h-[30px] w-[30px]  text-black" alt="" />
                </div>
                <p className={`${isActive ? "opacity-100 font-semibold" : "opacity-70 text-black max-w-[60%]"}`}>Careers</p>
              </>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
