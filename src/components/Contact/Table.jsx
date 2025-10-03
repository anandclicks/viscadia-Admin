import { useEffect, useState } from "react";
import { commonGetApiCall } from "../../utils/reuseableFunctions";
import PageBuildingLoader from "../common/PageBuildingLoader";

const Table = () => {
  const [tableData, setTableData] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State to store search input

  useEffect(() => {
    const getData = async () => {
      const res = await commonGetApiCall('/allforms?page=1&limit=1000');
      setTableData(res?.data || []);
    };
    getData();
  }, []);

  // Filter the table data based on search query
  const filteredData = tableData?.filter((el) => {
    const fullName = `${el?.form_data?.name || ""} ${el?.form_data?.first_name || ""} ${el?.form_data?.last_name || ""}`.toLowerCase();
    const email = el?.form_data?.email?.toLowerCase();
    const query = searchQuery.toLowerCase();
    
    return fullName.includes(query) || email.includes(query); // Check if query is in full name or email
  });

  return (
    <>
      <div className="min-h-[40px] py-5 fsTwo flex w-full justify-between">
        <div className="relative h-[45px] w-120 border-[1px] border-stone-300 rounded-full">
          <img
            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5"
            src="/searchIcon.png"
            alt=""
          />
          <input
            type="text"
            placeholder="Search by Name or Email..."
            className="h-full w-full pl-10 pr-4 rounded-full text-[16px] bg-white outline-0 placeholder-gray-400 transition-all duration-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          />
        </div>
        <button className="h-[40px] flex px-4 gap-2 items-center w-fit border-[1px] border-stone-200 rounded-full">
          <img className="h-[25px] object-contain" src="/icons/excel.png" alt="" />
          <p className="text-[14px] font-semibold">Export to Excel</p>
        </button>
      </div>
      <div className="border-[1px] border-stone-200 rounded-[20px] fsTwo">
        <div className="overflow-x-auto">
          {!tableData && <PageBuildingLoader />}
          {filteredData && filteredData.length > 0 && (
            <table className="min-w-full rounded-lg">
              <thead>
                <tr>
                  <th className="px-4 py-4 text-left text-[16px] font-semibold text-black">All.</th>
                  <th className="px-4 py-4 text-left text-[16px] font-semibold text-black">S.No.</th>
                  <th className="px-4 py-4 text-left text-[16px] font-semibold text-black">Full Name</th>
                  <th className="px-4 py-4 text-left text-[16px] font-semibold text-black">Email Address</th>
                  <th className="px-4 py-4 text-left text-[16px] font-semibold text-black">Company</th>
                  <th className="px-4 py-4 text-left text-[16px] font-semibold text-black">Message</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((el, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-4 py-4 text-[14px] font-medium text-black">
                      <input type="checkbox" className="h-[20px] w-[20px]" />
                    </td>
                    <td className="px-4 py-4 text-[14px] font-medium text-black">{index + 1}</td>
                    <td className="px-4 py-4 text-[14px] font-medium text-black">
                      {el?.form_data?.name && el?.form_data?.name}
                      {el?.form_data?.first_name &&
                        el?.form_data?.first_name &&
                        " " + el?.form_data?.first_name + " " + el?.form_data?.last_name}
                    </td>
                    <td className="px-4 py-4 text-[14px] font-medium text-black">{el?.form_data?.email}</td>
                    <td className="px-4 py-4 text-[14px] font-medium text-black">
                      <span className="truncate block max-w-[150px]" title={el?.form_data?.company || "NA"}>
                        {el?.form_data?.company || "NA"}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-[14px] font-medium text-black">
                      <span className="truncate block max-w-[150px]" title={el?.form_data?.message || "NA"}>
                        {el?.form_data?.message || "NA"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {filteredData && filteredData.length === 0 && (
            <p className="text-center text-gray-500 py-5">No results found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Table;
