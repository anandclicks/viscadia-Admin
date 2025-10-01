
const Table = () => {
    const data = [
  { serial: 1, fullName: 'Sumit Kumar', email: 'SumitKumar22@gmail.com', phone: '98765432XX', company: 'Health Plus Solutions', message: 'Lorem Ipsum...' },
  { serial: 2, fullName: 'Amit Sharma', email: 'AmitSharma@gmail.com', phone: '98765432YY', company: 'Tech Innovators', message: 'This is a sample message.' },
  { serial: 3, fullName: 'Rajeev Mehta', email: 'RajeevMehta@gmail.com', phone: '98765432ZZ', company: 'Global Networks', message: 'We are interested in your services.' },
  { serial: 4, fullName: 'Priya Gupta', email: 'PriyaGupta@gmail.com', phone: '98765433XX', company: 'Creative Designs', message: 'Looking forward to collaborating.' },
  { serial: 5, fullName: 'Sanjay Verma', email: 'SanjayVerma@gmail.com', phone: '98765434YY', company: 'Ecom Solutions', message: 'Need assistance with a project.' },
  { serial: 6, fullName: 'Anjali Patel', email: 'AnjaliPatel@gmail.com', phone: '98765435ZZ', company: 'Innovatech', message: 'Inquire about your pricing plans.' },
  { serial: 7, fullName: 'Rohit Kapoor', email: 'RohitKapoor@gmail.com', phone: '98765436XX', company: 'MedTech Inc.', message: 'Let’s schedule a meeting soon.' },
  { serial: 8, fullName: 'Nina Desai', email: 'NinaDesai@gmail.com', phone: '98765437YY', company: 'Home Solutions', message: 'I would like to discuss partnership.' },
  { serial: 9, fullName: 'Vikram Singh', email: 'VikramSingh@gmail.com', phone: '98765438ZZ', company: 'Techno Hub', message: 'Exploring options for collaboration.' },
  { serial: 10, fullName: 'Meera Iyer', email: 'MeeraIyer@gmail.com', phone: '98765439XX', company: 'Fashion Forward', message: 'Need help with our website.' },
  { serial: 11, fullName: 'Ajay Reddy', email: 'AjayReddy@gmail.com', phone: '98765440YY', company: 'Consulting Group', message: 'We are working on a new project.' },
  { serial: 12, fullName: 'Suman Kaur', email: 'SumanKaur@gmail.com', phone: '98765441ZZ', company: 'Smart Tech', message: 'Looking for a reliable partner.' },
  { serial: 13, fullName: 'Karan Singh', email: 'KaranSingh@gmail.com', phone: '98765442XX', company: 'Luxury Brands', message: 'I have some inquiries about your services.' },
  { serial: 14, fullName: 'Neha Agarwal', email: 'NehaAgarwal@gmail.com', phone: '98765443YY', company: 'Creative Labs', message: 'Interested in potential collaboration.' },
  { serial: 15, fullName: 'Deepak Joshi', email: 'DeepakJoshi@gmail.com', phone: '98765444ZZ', company: 'Global Trade', message: 'We need a solution for a new venture.' },
  { serial: 16, fullName: 'Aarti Deshmukh', email: 'AartiDeshmukh@gmail.com', phone: '98765445XX', company: 'Designers Studio', message: 'Looking for digital marketing help.' },
  { serial: 17, fullName: 'Ravi Prakash', email: 'RaviPrakash@gmail.com', phone: '98765446YY', company: 'Automotive Solutions', message: 'Have a project I would like to discuss.' },
  { serial: 18, fullName: 'Maya Rani', email: 'MayaRani@gmail.com', phone: '98765447ZZ', company: 'Fashion Global', message: 'Seeking advice on e-commerce strategies.' },
  { serial: 19, fullName: 'Arjun Patel', email: 'ArjunPatel@gmail.com', phone: '98765448XX', company: 'Tech World', message: 'Would like to book a consultation.' },
  { serial: 20, fullName: 'Shweta Sharma', email: 'ShwetaSharma@gmail.com', phone: '98765449YY', company: 'Innovative Labs', message: 'I have a project proposal to discuss.' }
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
              <th className="px-4 py-4 text-left text-[16px] font-semibold text-black">Company</th>
              <th className="px-4 py-4 text-left text-[16px] font-semibold text-black">Message</th>
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
              <td className="px-4 py-4 text-[14px] font-medium text-black">{el?.company}</td>
              <td className="px-4 py-4 text-[14px] font-medium text-black">
                <span
                  className="truncate block max-w-[150px]"
                  title="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                >
                  {el?.message}
                </span>
              </td>
            </tr>
                ))}
          
            {/* Repeat the rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
