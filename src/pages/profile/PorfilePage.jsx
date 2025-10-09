import { useContext } from "react";
import PageBuildingLoader from "../../components/common/PageBuildingLoader";
import { PorfileContext } from "../../../context/ProfileDetailsContext";
import { formatDate } from "../../utils/reuseableFunctions";
import NoDataFound from "../../components/common/NoDataFound";

const PorfilePage = () => {
  const { loggedInUser } = useContext(PorfileContext);

  if (!loggedInUser) return <PageBuildingLoader />;

  if (Object.keys(loggedInUser).length === 0) return <NoDataFound message="User data not found" />;

  return (
    <div className="min-h-screen w-full">
      <div className="h-[80px] w-full fsTwo flex justify-between border-b border-[#E8E8E8]">
        <h2 className="text-[22px] font-semibold">My Profile</h2>
      </div>

      <div className="h-[100px] w-[100px] overflow-hidden bg-[url('/public/images/userPlceholder.webp')] mt-4 rounded-2xl shadow-[rgba(149,157,165,0.2)_0px_8px_24px]">
        <img className="h-full w-full object-cover" src={loggedInUser?.profile_picture || "/images/userPlceholder.webp"} alt="Profile" />
      </div>

      <div className="pt-5 px-2 flex flex-wrap justify-between">
        {[
          { label: "First Name", value: loggedInUser?.first_name },
          { label: "Last Name", value: loggedInUser?.last_name },
          { label: "Email Address", value: loggedInUser?.email_address },
          { label: "Date of Birth", value: formatDate(loggedInUser?.date_of_birth) },
          { label: "Phone Number", value: loggedInUser?.phone_number },
          { label: "Location", value: loggedInUser?.city + " , " + loggedInUser?.country },
          { label: "Country", value: loggedInUser?.country },
          { label: "City", value: loggedInUser?.city },
          { label: "Postal Code", value: loggedInUser?.postal_code },
          { label: "User Role", value: loggedInUser?.role },
        ].map((field, index) => (
          <div key={index} className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">{field.label}</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input
                value={field.value || "NA"}
                className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3"
                type="text"
                readOnly
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PorfilePage;
