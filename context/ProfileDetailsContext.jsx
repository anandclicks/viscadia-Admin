import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import PageBuildingLoader from "../src/components/common/PageBuildingLoader";

export const PorfileContext = createContext({});

export const PorfileContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const redirect = useNavigate();
  const location = useLocation();

  const roleAccessRules = {
    "Super Admin": ["/"],
    Admin: [
      "/",
      "/events-and-webinars",
      "/case-studies",
      "/leadership",
      "/careers",
      "/news-and-press-releases",
      "/contacts",
      "/profile",
    ],
    HR: [
      "/careers",
      "/contacts",
      "/create/new-career",
      "/edit/career",
      "/preview/career/",
      "/profile",
    ],
    Marketing: [
      "/",
      "/events-and-webinars",
      "/case-studies",
      "/leadership",
      "/news-and-press-releases",
      "/profile",
      "/preview/event",
      "/preview/webinar",
      "/preview/case-study",
      "/preview/career",
      "/edit/event",
      "/edit/webinar",
      "/edit/case-study",
     
    ],
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          if (location.pathname !== "/login")
            toast.error("No token found, please log in.");
          redirect("/login");
          setLoading(false);
          return;
        }

        const res = await axios.get(
          "http://192.168.0.193:4005/v1/auth/whoiam",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (res.data.success && res.data.user) {
          setLoggedInUser(res.data.user);
        } else {
          toast.error(res.data.message || "Something went wrong!");
          redirect("/login");
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong!");
        redirect("/login");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [redirect, location.pathname]);

  useEffect(() => {
    if (!loggedInUser) return;
    if (location.pathname === "/login") return;

    const userRole = loggedInUser.role;
    const allowedRoutes = roleAccessRules[userRole] || [];
    const currentPath = location.pathname;

    if (!allowedRoutes.some((route) => currentPath.startsWith(route))) {
      toast.error("You do not have access to this page");
      redirect(allowedRoutes[0] || "/", { replace: true });
    }
  }, [location.pathname, loggedInUser, redirect]);

  if (loading && location.pathname !== "/login") return <PageBuildingLoader />;

  return (
    <PorfileContext.Provider value={{ loggedInUser }}>
      {!loggedInUser && location.pathname !== "/login" && (
        <PageBuildingLoader />
      )}
      {children}
    </PorfileContext.Provider>
  );
};
