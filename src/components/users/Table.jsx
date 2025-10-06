import React from "react";

const Table = () => {
  const data = [
    { serial: 1, fullName: 'Sumit Kumar', email: 'SumitKumar22@gmail.com', phone: '98765432XX', role: 'admin', active: 1 },
    { serial: 2, fullName: 'Amit Sharma', email: 'AmitSharma@gmail.com', phone: '98765432YY', role: 'super admin', active: 0 },
    { serial: 3, fullName: 'Rajeev Mehta', email: 'RajeevMehta@gmail.com', phone: '98765432ZZ', role: 'hr', active: 1 },
    { serial: 4, fullName: 'Priya Gupta', email: 'PriyaGupta@gmail.com', phone: '98765433XX', role: 'admin', active: 0 },
    { serial: 5, fullName: 'Sanjay Verma', email: 'SanjayVerma@gmail.com', phone: '98765434YY', role: 'super admin', active: 1 },
    { serial: 6, fullName: 'Anjali Patel', email: 'AnjaliPatel@gmail.com', phone: '98765435ZZ', role: 'hr', active: 0 }
  ];
  const [tableData, setTableData] = React.useState(data);
  const [popup, setPopup] = React.useState({ show: false, index: null, name: "", newState: null });

  const handleToggle = (index) => {
    const user = tableData[index];
    setPopup({ show: true, index, name: user.fullName, newState: user.active ? 0 : 1 });
  };

  const confirmToggle = () => {
    const updatedData = [...tableData];
    updatedData[popup.index].active = popup.newState;
    setTableData(updatedData);
    setPopup({ show: false, index: null, name: "", newState: null });
  };

  return (
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
                <td className="px-4 py-4 text-[14px] font-medium text-black">{el.serial}</td>
                <td className="px-4 py-4 text-[14px] font-medium text-black">{el.fullName}</td>
                <td className="px-4 py-4 text-[14px] font-medium text-black">{el.email}</td>
                <td className="px-4 py-4 text-[14px] font-medium text-black">{el.phone}</td>
                <td className="px-4 py-4 text-[14px] font-medium text-black capitalize">{el.role}</td>
                <td className="px-4 py-4 text-[14px] font-medium text-black">
                  <div className="truncate block max-w-[150px] relative">
                    <button type="button" onClick={() => handleToggle(index)} className={`w-[60px] transition-all duration-200 ${el.active ? "grediantBg" : "bg-gray-400"} h-full rounded-full p-1 cursor-pointer flex items-center`}>
                      <div className={`h-[20px] w-[20px] transition-all bg-white rounded-full ${el.active ? "translate-x-8" : "translate-x-0"}`}></div>
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
            <p className="text-[16px] font-medium mb-4">Do you want to {popup.newState ? "activate" : "inactivate"} <span className="font-semibold">{popup.name}</span>?</p>
            <div className="flex justify-center gap-4">
              <button onClick={confirmToggle} className="px-4 py-2 rounded-lg bg-[#BD2F2C] text-white hover:bg-[#b11d1b]">Yes</button>
              <button onClick={() => setPopup({ show: false, index: null, name: "", newState: null })} className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
