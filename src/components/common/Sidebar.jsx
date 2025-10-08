import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { PorfileContext } from "../../../context/ProfileDetailsContext";

const Sidebar = () => {
  const location = useLocation();
  const {loggedInUser} = useContext(PorfileContext)

  const links = [
    {
      to: "/",
      label: "Home Page",
      icon: "home",
      whiteIcon: "homeWhite",
    },
    {
      to: "/news-and-press-releases",
      label: "Latest News & Press Releases",
      icon: "newsPerson",
      whiteIcon: "newsPersonWhite",
    },
    {
      to: "/case-studies",
      label: "Case Studies & White Papers",
      icon: "caseStudy",
      whiteIcon: "caseStudyWhite",
    },
    {
      to: "/leadership",
      label: "Leadership Page",
      icon: "leadership",
      whiteIcon: "leadershipWhite",
    },
    {
      to: "/events-and-webinars",
      label: "Events & Webinars",
      icon: "event",
      whiteIcon: "eventWhite",
      extraActiveRoutes: ["/create/event"],
    },
    {
      to: "/careers",
      label: "Careers",
      icon: "careers",
      whiteIcon: "careersWhite",
    },
    {
      to: "/contacts",
      label: "Contacts",
      icon: "contacts",
      whiteIcon: "contactsWhite",
    },
    {
      to: "/users",
      label: "User’s",
      icon: "users",
      whiteIcon: "usersWhite",
    },
  ];

    const linksTwo = [
    {
      to: "/",
      label: "Home Page",
      icon: "home",
      whiteIcon: "homeWhite",
    },
    {
      to: "/news-and-press-releases",
      label: "Latest News & Press Releases",
      icon: "newsPerson",
      whiteIcon: "newsPersonWhite",
    },
    {
      to: "/case-studies",
      label: "Case Studies & White Papers",
      icon: "caseStudy",
      whiteIcon: "caseStudyWhite",
    },
    {
      to: "/leadership",
      label: "Leadership Page",
      icon: "leadership",
      whiteIcon: "leadershipWhite",
    },
    {
      to: "/events-and-webinars",
      label: "Events & Webinars",
      icon: "event",
      whiteIcon: "eventWhite",
      extraActiveRoutes: ["/create/event"],
    },
    {
      to: "/careers",
      label: "Careers",
      icon: "careers",
      whiteIcon: "careersWhite",
    },
    {
      to: "/contacts",
      label: "Contacts",
      icon: "contacts",
      whiteIcon: "contactsWhite",
    },
  ];

    const linksThree = [
    {
      to: "/careers",
      label: "Careers",
      icon: "careers",
      whiteIcon: "careersWhite",
    },
    {
      to: "/contacts",
      label: "Contacts",
      icon: "contacts",
      whiteIcon: "contactsWhite",
    },
  ];

   const linksFour = [
    {
      to: "/",
      label: "Home Page",
      icon: "home",
      whiteIcon: "homeWhite",
    },
    {
      to: "/news-and-press-releases",
      label: "Latest News & Press Releases",
      icon: "newsPerson",
      whiteIcon: "newsPersonWhite",
    },
    {
      to: "/case-studies",
      label: "Case Studies & White Papers",
      icon: "caseStudy",
      whiteIcon: "caseStudyWhite",
    },
    {
      to: "/leadership",
      label: "Leadership Page",
      icon: "leadership",
      whiteIcon: "leadershipWhite",
    },
    {
      to: "/events-and-webinars",
      label: "Events & Webinars",
      icon: "event",
      whiteIcon: "eventWhite",
      extraActiveRoutes: ["/create/event"],
    },
  ];

  const finalObjsForRender = loggedInUser?.role === "Super Admin" 
                              ? links : loggedInUser?.role === "Admin" 
                              ? linksTwo : loggedInUser?.role === "HR" 
                              ? linksThree : linksFour

  return (
    <div className="h-full overflow-scroll scrollbrNone w-full px-2 pe-4 flex flex-col justify-between bg-[#F4F1F2]">
      <div className="w-full pt-3">
        <div className="space-y-1">
          {finalObjsForRender?.map(({ to, label, icon, whiteIcon, extraActiveRoutes = [] }) => (
            <NavLink
              key={to}
              to={to}
              className="flex items-center gap-3 px-2 py-2 text-[16px] cursor-pointer text-black rounded-lg duration-200 mt-2"
            >
              {({ isActive }) => {
                const isExtraActive = extraActiveRoutes.includes(location.pathname);
                const isTabActive = isActive || isExtraActive;
                return (
                  <>
                    <div className={`${isTabActive ? "activeTabs" : "bg-white "} rounded-full h-[55px] w-[55px] flex justify-center items-center shadowcus1`}>
                      <img
                        src={`../icons/${isTabActive ? whiteIcon : icon}.png`}
                        className="h-[30px] w-[30px] object-contain"
                        alt={label}
                      />
                    </div>
                    <p className={`${isTabActive ? "opacity-100 font-semibold" : "opacity-70 text-black max-w-[60%]"} max-w-[60%]`}>{label}</p>
                  </>
                );
              }}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
