import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import PageBuildingLoader from "../common/PageBuildingLoader";
import NoDataFound from "../common/NoDataFound";

const Table = () => {
  const [tableData, setTableData] = useState(null);
  const [popup, setPopup] = useState({ show: false, index: null, name: "", id: "", newState: null });

  const handleToggle = (index) => {
    const user = tableData[index];
    setPopup({ show: true, index, name: `${user.first_name} ${user.last_name}`, id: user?.id, newState: user.is_active ? 0 : 1 });
  };

  const confirmToggle = async () => {
    const t = toast.loading("Changing Account Status..!");
    try {
      const res = await axios.delete(`http://192.168.0.193:4005/v1/auth/user/${popup?.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (res?.data?.success) {
        toast.dismiss(t);
        toast.success("User Account Status changed Successfully!");
        const updatedData = [...tableData];
        updatedData[popup.index].is_active = popup.newState;
        setTableData(updatedData);
        setPopup({ show: false, index: null, id: "", name: "", newState: null });
      } else {
        toast.dismiss(t);
        toast.error("Couldn't change Account Status!");
      }
    } catch {
      toast.dismiss(t);
      toast.error("Error changing status!");
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://192.168.0.193:4005/v1/auth/allusers", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        if (res?.data?.success) setTableData(res.data?.users || []);
        else setTableData([]);
      } catch {
        setTableData([]);
      }
    };
    getData();
  }, []);

  return (
    <>
      {tableData === null && <PageBuildingLoader />}
      {tableData?.length > 0 && (
        <div className="border-[1px] border-stone-200 rounded-[20px] fsTwo relative">
          <div className="overflow-x-auto">
            <table className="min-w-full rounded-lg">
              <thead>
                <tr>
                  <th className="px-4 py-4 text-left text-[16px] font-semibold text-black">All.</th>
                  <th className="px-4 py-4 text-left text-[16px] font-semibold text-black">S.No.</th>
                  <th className="px-4 py-4 text-left text-[16px] font-semibold text-black">Full Name</th>
                  <th className="px-4 py-4 text-left text-[16px] font-semibold text-black">Email Address</th>
                  <th className="px-4 py-4 text-left text-[16px] font-semibold text-black">Phone No.</th>
                  <th className="px-4 py-4 text-left text-[16px] font-semibold text-black">Role</th>
                  <th className="px-4 py-4 text-left text-[16px] font-semibold text-black">Status</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((el, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-4 py-4 text-[14px] font-medium text-black"><input type="checkbox" className="h-[20px] w-[20px]" /></td>
                    <td className="px-4 py-4 text-[14px] font-medium text-black">{index + 1}</td>
                    <td className="px-4 py-4 text-[14px] font-medium text-black">{el.first_name + " " + el.last_name}</td>
                    <td className="px-4 py-4 text-[14px] font-medium text-black">{el.email_address}</td>
                    <td className="px-4 py-4 text-[14px] font-medium text-black">{el.phone_number}</td>
                    <td className="px-4 py-4 text-[14px] font-medium text-black capitalize">{el.role}</td>
                    <td className="px-4 py-4 text-[14px] font-medium text-black">
                      <div className="truncate block max-w-[150px] relative">
                        <button
                          type="button"
                          onClick={() => handleToggle(index)}
                          className={`w-[60px] transition-all duration-200 ${el.is_active ? "grediantBg" : "bg-gray-400"} h-full rounded-full p-1 cursor-pointer flex items-center`}
                        >
                          <div className={`h-[20px] w-[20px] transition-all bg-white rounded-full ${el.is_active ? "translate-x-8" : "translate-x-0"}`}></div>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {popup.show && (
            <div className="fixed inset-0 bg-[#00000028] bg-opacity-40 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <p className="text-[16px] font-medium mb-4">
                  Do you want to {popup.newState ? "activate" : "inactivate"} <span className="font-semibold">{popup.name}</span>?
                </p>
                <div className="flex justify-center gap-4">
                  <button onClick={confirmToggle} className="px-4 py-2 rounded-lg bg-[#BD2F2C] text-white hover:bg-[#b11d1b]">Yes</button>
                  <button onClick={() => setPopup({ show: false, index: null, name: "", newState: null })} className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400">Cancel</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {tableData?.length === 0 && <NoDataFound message="No users found"/>}
    </>
  );
};

export default Table;
