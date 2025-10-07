import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toCamelCase, uploadSingleImage } from "../utils/reuseableFunctions";
let payload = {
    first_name: "",
    last_name: "",
    email_address: "",
    date_of_birth: "",
    phone_number: "",
    city: "",
    country: "",
    postal_code: "",
    userRole: "",
    password: "",
  }
const ProfilePage = () => {
  const [profileData, setProfileData] = useState({...payload});
  const redirect = useNavigate();

  const handleInputChange = async(e) => {
    const { name, value,type,files } = e.target;
    if(type === "file" && files && files[0]){
        let url = await uploadSingleImage(files)
        setProfileData((prev) => ({ ...prev, [name]: url }));
    }else {
    setProfileData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const t = toast.loading('Creating New Profile...!')
      const token = localStorage.getItem("token");
      if (!token) {
        toast.dismiss(t)
        toast.error("No token found, please log in.");
        redirect("/login");
        return;
      }
      const res = await axios.post("http://192.168.0.193:4005/v1/auth/register", toCamelCase(profileData), {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data.success) {
        toast.dismiss(t)
        toast.success("Profile created successfully!");
        setProfileData({...payload})
        redirect("/users");
      } else {
        toast.dismiss(t)
        toast.error(res.data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <>
      <div className="min-h-screen w-full">
        <div className="h-[80px] w-full fsTwo flex justify-between border-b border-[#E8E8E8]">
          <div className="h-full flex gap-10 items-center">
            <h2 className="text-[22px] font-semibold">Create Profile</h2>
          </div>
        </div>
        <div className="h-[100px] w-[100px] relative overflow-hidden bg-[url('/public/images/userPlceholder.webp')] mt-4 rounded-2xl shadow-[rgba(149,157,165,0.2)_0px_8px_24px]">
        <input type="file" name="profileImage" className="h-full cursor-pointer w-full opacity-0 z-10 absolute top-0 left-0" onInput={handleInputChange} />
          <img className="h-full w-full object-cover" src={profileData?.profileImage || "/public/images/userPlceholder.webp"} alt="Profile Placeholder" />
        </div>
        <form onSubmit={handleSubmit} className="pt-5 px-2 flex flex-wrap justify-between">
          <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">First Name</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={profileData.first_name} onChange={handleInputChange} name="first_name" type="text" required className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" />
            </div>
          </div>
          <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">Last Name</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={profileData.last_name} onChange={handleInputChange} name="last_name" type="text" required className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" />
            </div>
          </div>
          <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">Email Address</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={profileData.email_address} onChange={handleInputChange} name="email_address" type="email" required className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" />
            </div>
          </div>
          <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">Password</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={profileData.password} onChange={handleInputChange} name="password" type="text" required className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" />
            </div>
          </div>
          <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">Date of Birth</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={profileData.date_of_birth} onChange={handleInputChange} name="date_of_birth" type="date" required className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" />
            </div>
          </div>
          <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">Phone Number</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={profileData.phone_number} onChange={handleInputChange} name="phone_number" type="text" required className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" />
            </div>
          </div>
          <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">City</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={profileData.city} onChange={handleInputChange} name="city" type="text" required className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" />
            </div>
          </div>
          <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">Country</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={profileData.country} onChange={handleInputChange} name="country" type="text" required className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" />
            </div>
          </div>
          <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">Postal Code</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={profileData.postal_code} onChange={handleInputChange} name="postal_code" type="text" required className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" />
            </div>
          </div>
          <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">Role</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={profileData.userRole} onChange={handleInputChange} name="userRole" type="text" required className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" />
            </div>
          </div>
          <div className="flex w-full justify-end gap-5">
            <Link to={'/users'} className="bg-[#FFFFFF] border-[1px] border-[#E8E8E8] shadow hover:bg-[#e8e8e88e] transition-all p-2 rounded-full font-medium px-9 text-[17px] mt-5">Cancle</Link>
            <input value={'Save'} type="submit" className="cursor-pointer grediantBg text-white p-2 rounded-full font-medium px-9 text-[17px] mt-5" />
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfilePage;
