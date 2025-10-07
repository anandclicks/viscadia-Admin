import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const PorfileContext = createContext({});

export const PorfileContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const redirect = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          toast.error("No token found, please log in.");
          redirect("/login");
          return;
        }

        const res = await axios.get("http://192.168.0.193:4005/v1/auth/whoiam", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data.success && res.data.user) {
          setLoggedInUser(res.data.user);
        } else {
          toast.error(res.data.message || "Something went wrong!");
          redirect("/login");
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong!");
        redirect("/login");
      }
    };

    getData();
  }, [redirect]);

  return (
    <PorfileContext.Provider value={{ loggedInUser }}>
      {children}
    </PorfileContext.Provider>
  );
};
