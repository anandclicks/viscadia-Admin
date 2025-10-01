
const Table = () => {
   const data = [
  { serial: 1, fullName: 'Sumit Kumar', email: 'SumitKumar22@gmail.com', phone: '98765432XX', role: 'admin', active: 1 },
  { serial: 2, fullName: 'Amit Sharma', email: 'AmitSharma@gmail.com', phone: '98765432YY', role: 'super admin', active: 0 },
  { serial: 3, fullName: 'Rajeev Mehta', email: 'RajeevMehta@gmail.com', phone: '98765432ZZ', role: 'hr', active: 1 },
  { serial: 4, fullName: 'Priya Gupta', email: 'PriyaGupta@gmail.com', phone: '98765433XX', role: 'admin', active: 0 },
  { serial: 5, fullName: 'Sanjay Verma', email: 'SanjayVerma@gmail.com', phone: '98765434YY', role: 'super admin', active: 1 },
  { serial: 6, fullName: 'Anjali Patel', email: 'AnjaliPatel@gmail.com', phone: '98765435ZZ', role: 'hr', active: 0 },
  { serial: 7, fullName: 'Rohit Kapoor', email: 'RohitKapoor@gmail.com', phone: '98765436XX', role: 'admin', active: 1 },
  { serial: 8, fullName: 'Nina Desai', email: 'NinaDesai@gmail.com', phone: '98765437YY', role: 'super admin', active: 0 },
  { serial: 9, fullName: 'Vikram Singh', email: 'VikramSingh@gmail.com', phone: '98765438ZZ', role: 'hr', active: 1 },
  { serial: 10, fullName: 'Meera Iyer', email: 'MeeraIyer@gmail.com', phone: '98765439XX', role: 'admin', active: 0 },
  { serial: 11, fullName: 'Ajay Reddy', email: 'AjayReddy@gmail.com', phone: '98765440YY', role: 'super admin', active: 1 },
  { serial: 12, fullName: 'Suman Kaur', email: 'SumanKaur@gmail.com', phone: '98765441ZZ', role: 'hr', active: 0 },
  { serial: 13, fullName: 'Karan Singh', email: 'KaranSingh@gmail.com', phone: '98765442XX', role: 'admin', active: 1 },
  { serial: 14, fullName: 'Neha Agarwal', email: 'NehaAgarwal@gmail.com', phone: '98765443YY', role: 'super admin', active: 0 },
  { serial: 15, fullName: 'Deepak Joshi', email: 'DeepakJoshi@gmail.com', phone: '98765444ZZ', role: 'hr', active: 1 },
  { serial: 16, fullName: 'Aarti Deshmukh', email: 'AartiDeshmukh@gmail.com', phone: '98765445XX', role: 'admin', active: 0 },
  { serial: 17, fullName: 'Ravi Prakash', email: 'RaviPrakash@gmail.com', phone: '98765446YY', role: 'super admin', active: 1 },
  { serial: 18, fullName: 'Maya Rani', email: 'MayaRani@gmail.com', phone: '98765447ZZ', role: 'hr', active: 0 },
  { serial: 19, fullName: 'Arjun Patel', email: 'ArjunPatel@gmail.com', phone: '98765448XX', role: 'admin', active: 1 },
  { serial: 20, fullName: 'Shweta Sharma', email: 'ShwetaSharma@gmail.com', phone: '98765449YY', role: 'super admin', active: 0 }
];

  return (
    <div className="border-[1px] border-stone-200 rounded-[20px] fsTwo">
      <div className="overflow-x-auto">
        <table className="min-w-full  rounded-lg">
          <thead className="">
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
            {/* Example Row */}
            {data?.map((el,index)=> (
             <tr key={index} className="border-t border-gray-200">
              <td className="px-4 py-4 text-[14px] font-medium text-black">
                <input type="checkbox" className='h-[20px] w-[20px]' name="" id="" />
                </td>
              <td className="px-4 py-4 text-[14px] font-medium text-black">{el?.serial}</td>
              <td className="px-4 py-4 text-[14px] font-medium text-black">{el?.fullName}</td>
              <td className="px-4 py-4 text-[14px] font-medium text-black">{el?.email}</td>
              <td className="px-4 py-4 text-[14px] font-medium text-black">{el?.phone}</td>
              <td className="px-4 py-4 text-[14px] font-medium text-black capitalize">{el?.role}</td>
              <td className="px-4 py-4 text-[14px] font-medium text-black">
              <div className="truncate block max-w-[150px] relative">
             <div className="relative">
                 <button type="button"  className={`w-[60px] transition-all duration-200 ${el?.active ? "grediantBg" : 'bg-gray-400'} h-full rounded-full p-1 cursor-pointer flex items-center`}>
                    <div className={`h-[20px] w-[20px] transition-all bg-white rounded-full ${el?.active ? "translate-x-0" : "translate-x-8"}`}></div>
                </button>
                </div>
             </div>
             </td>
            </tr>
        ))}
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
