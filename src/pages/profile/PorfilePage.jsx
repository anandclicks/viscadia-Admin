import { useContext } from "react";
import PageBuildingLoader from "../../components/common/PageBuildingLoader";
import { PorfileContext } from "../../../context/ProfileDetailsContext";
import { formatDate } from "../../utils/reuseableFunctions";

const PorfilePage = () => {
   const {loggedInUser} = useContext(PorfileContext)

  return (
    <>
    {!loggedInUser && <PageBuildingLoader/>}
    {loggedInUser && <div className="min-h-screen w-full">
      <div className="h-[80px] w-full fsTwo flex  justify-between border-b border-[#E8E8E8]">
        <div className="h-full flex gap-10 items-center">
          <h2 className="text-[22px] font-semibold">My Profile</h2>
        </div>
      </div>

      <div className="h-[100px] w-[100px] overflow-hidden bg-[url('/public/images/userPlceholder.webp')] mt-4 rounded-2xl shadow-[rgba(149,157,165,0.2)_0px_8px_24px] ">
        <img className="h-full w-full object-cover" src={loggedInUser?.profile_picture} alt="" />
      </div>

      <div className="pt-5 px-2 flex flex-wrap justify-between">
          <div className="min-h-[55px] w-[46%]">
            <p className="text-[20px] font-[500] text-stone-700">First Name</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={loggedInUser?.first_name || "NA"} className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" type="text" readOnly />
            </div>
          </div>

           <div className="min-h-[55px] w-[46%]">
            <p className="text-[20px] font-[500] text-stone-700">Last Name</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={loggedInUser?.last_name || "NA"} className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" type="text" readOnly />
            </div>
          </div>

             <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">Email Address</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={loggedInUser?.email_address || "NA"} className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" type="text" readOnly />
            </div>
          </div>

          <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">Date of Birth</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={formatDate(loggedInUser?.date_of_birth) || "NA"} className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" type="text" readOnly />
            </div>
          </div>

          <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">Phone Number</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={loggedInUser?.phone_number || "NA"} className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" type="text" readOnly />
            </div>
          </div>

          <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">Location</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={loggedInUser?.city + " , " + loggedInUser?.country || "NA"} className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" type="text" readOnly />
            </div>
          </div>

          <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">Country</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={loggedInUser?.country || "NA"} className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" type="text" readOnly />
            </div>
          </div>

          <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">City</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={loggedInUser?.city || "NA"} className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" type="text" readOnly />
            </div>
          </div>


          <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">Postal Code</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={loggedInUser?.postal_code || "NA"} className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" type="text" readOnly />
            </div>
          </div>

          <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">User Role</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={loggedInUser?.role || "NA"} className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" type="text" readOnly />
            </div>
          </div>
         
      </div>
    </div>}
    </>
  );
};

export default PorfilePage;
