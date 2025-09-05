import { useState } from "react";

const Login = () => {
    const [passwordOn, setPasswordOn] = useState(false)
    
  return (
    <div className="min-h-screen w-full flex justify-center items-center px-4 py-8">
      <div className="w-full max-w-[1300px] shadow-lg flex flex-col md:flex-row rounded-2xl overflow-hidden">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
          <img
            className="h-[250px] md:h-[400px] object-contain"
            src="https://img.freepik.com/premium-vector/documents-with-check-mark-sign-3d-cartoon-style-icon-confirmed-accepted-statements-certificates-agreements-contracts-flat-vector-illustration-management-information-concept_74855-25979.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Login Illustration"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-6">
          <form action="" className="flex flex-col gap-6 w-full max-w-[350px]">
            <h2 className="text-center text-[24px] md:text-[30px] font-semibold">Admin Login</h2>
            
            <div>
              <p className="mb-2 text-sm">Enter Your Email Address!</p>
              <input
                type="text"
                placeholder="admin@example.com"
                className="h-[45px] w-full ps-3 outline-0 shadow-md rounded-full"
              />
            </div>
            
            <div>
              <p className="mb-2 text-sm">Enter Your Password!</p>
              <div className="h-[45px] w-full relative utline-0 overflow-hidden shadow-md rounded-full">
                <input
                type={`${passwordOn ? "text" : "password"}`}
                placeholder="••••••••"
                className="h-full w-full bg-transparent ps-3 outline-0 flex justify-center items-center"
              />
              <i onClick={()=> setPasswordOn((prev)=> !prev)} className={`${passwordOn ? "ri-eye-fill" : "ri-eye-off-fill"} absolute top-2 z-10 text-xl end-5 cursor-pointer`}></i>
              </div>
            </div>
            
            <input
              type="submit"
              value="Login"
              className="w-full cursor-pointer gredianBg text-white h-[45px] flex justify-center items-center rounded-full hover:bg-green-800 transition"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
