import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const adminOptions = [
    {
      heading: "Forecast with Confidence",
      subheading:
        "Manage forecasting models, user roles, and system settings efficiently in one place.",
      image: "/loginSliderImage/one.png",
    },
    {
      heading: "Your Admin Hub",
      subheading:
        "Control user access, monitor data trends, and optimize workflows seamlessly.",
      image: "/loginSliderImage/two.png",
    },
    {
      heading: "Smart Admin Tools",
      subheading:
        "Access analytics, manage users, and configure system settings effortlessly.",
      image: "/loginSliderImage/three.png",
    },
    {
      heading: "Welcome to Viscadia Admin",
      subheading:
        "Oversee forecasting operations, automate tasks, and gain actionable insights.",
      image: "/loginSliderImage/four.png",
    },
    {
      heading: "Manage, Monitor, Optimize",
      subheading:
        "From users to data models, control every aspect of your forecasting platform.",
      image: "/loginSliderImage/one.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Preload all slider images once
  useEffect(() => {
    adminOptions.forEach((option) => {
      const img = new Image();
      img.src = option.image;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % adminOptions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in...");
    try {
      const res = await axios.post(
        "http://192.168.0.193:4005/v1/auth/login",
        { email, password }
      );

      const data = res.data;

      if (data.success && data.token && data.user) {
        toast.dismiss(toastId);
        toast.success("Logged in successfully!");
        localStorage.setItem("token", data.token);

        // Role-based redirect
        const role = data.user.role?.toLowerCase();
        if (role === "hr") navigate("/careers");
        else if (role === "marketing" || role === "sales")
          navigate("/events-and-webinars");
        else navigate("/"); // Admin & Super Admin go to main dashboard
      } else {
        toast.dismiss(toastId);
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="md:max-w-[70%] bg-white 2xl:max-w-[1300px] h-[100vh] mx-auto p-5 flex">
      <div
        className="h-full w-[55%] rounded-2xl overflow-hidden bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${adminOptions[currentSlide].image})` }}
      >
        <div className="h-full w-full flex items-end">
          <div className="text-white px-5 mb-5 h-[200px] flex flex-col justify-between items-start">
            <div>
              <h2 className="text-[35px] font-medium">
                {adminOptions[currentSlide].heading}
              </h2>
              <p className="text-[20px] font-light leading-7">
                {adminOptions[currentSlide].subheading}
              </p>
            </div>
            <p className="text-center w-full flex justify-center">
              @ 2025 Viscadia, All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <div className="h-full w-[45%] flex flex-col pt-8 items-center">
        <img className="w-[60%]" src="./logo.png" alt="" />
        <div className="w-full flex justify-center items-center flex-col pt-3">
          <h3 className="text-[#BD2F2C] text-[35px] font-medium">
            Welcome Back!
          </h3>
          <p className="text-[20px] text-center font-medium text-[#4A4A4A]">
            Let’s get you Log in
          </p>
        </div>

        <form onSubmit={handleLogin} className="pt-7 w-full px-6">
          <div className="min-h-[50px] w-[100%]">
            <p className="text-[17px] font-[500] text-stone-700">Email ID</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[45px] rounded-lg border-[1px] items-center border-stone-200 mt-3 flex">
              <input
                required
                placeholder="Enter Email ID"
                className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {email && (
                <button
                  type="button"
                  className="pr-3"
                  onClick={() => setEmail("")}
                >
                  <img
                    className="h-[20px] w-[20px]"
                    src="./closeDarkBtn.png"
                    alt="Clear"
                  />
                </button>
              )}
            </div>
          </div>

          <div className="min-h-[50px] w-[100%] mt-5">
            <p className="text-[17px] font-[500] text-stone-700">Password</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[45px] rounded-lg border-[1px] items-center border-stone-200 mt-3 flex">
              <input
                required
                placeholder="Enter Password"
                className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="pr-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img
                  className="h-[20px] w-[20px]"
                  src={
                    showPassword
                      ? "/loginSliderImage/eyeOf.png"
                      : "/loginSliderImage/eyeOn.png"
                  }
                  alt="Toggle Password"
                />
              </button>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="text-[13px]">
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            className="grediantBg w-full mt-5 text-white p-2 rounded-xl font-medium px-9 text-[17px]"
          >
            Log in
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
