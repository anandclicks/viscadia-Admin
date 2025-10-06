
const PorfilePage = () => {
   
  return (
    <div className="min-h-screen w-full">
      <div className="h-[80px] w-full fsTwo flex  justify-between border-b border-[#E8E8E8]">
        <div className="h-full flex gap-10 items-center">
          <h2 className="text-[22px] font-semibold">My Profile</h2>
        </div>
      </div>

      <div className="h-[100px] w-[100px] overflow-hidden bg-amber-300 mt-4 rounded-2xl shadow-[rgba(149,157,165,0.2)_0px_8px_24px] ">
        <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3UjosF-j3Ss0503ak8hGQb-PX4DjCRAQGbg&s" alt="" />
      </div>

      <div className="pt-5 px-2 flex flex-wrap justify-between">
          <div className="min-h-[55px] w-[46%]">
            <p className="text-[20px] font-[500] text-stone-700">First Name</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={"Anand"} placeholder="Enter Sub-Heading" className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" type="text" readOnly />
            </div>
          </div>

           <div className="min-h-[55px] w-[46%]">
            <p className="text-[20px] font-[500] text-stone-700">Last Name</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={"Clicks"} placeholder="Enter Sub-Heading" className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" type="text" readOnly />
            </div>
          </div>

             <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">Email Address</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={"anand@gmail.com"} placeholder="Enter Sub-Heading" className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" type="text" readOnly />
            </div>
          </div>

             <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">Date of Birth</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={"11-12-2005"} placeholder="Enter Sub-Heading" className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" type="text" readOnly />
            </div>
          </div>

          <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">Phone Number</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={"999-999-999"} placeholder="Enter Sub-Heading" className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" type="text" readOnly />
            </div>
          </div>

          <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">Location</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={"New delhi, indai"} placeholder="Enter Sub-Heading" className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" type="text" readOnly />
            </div>
          </div>

          <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">Country</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={"India"} placeholder="Enter Sub-Heading" className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" type="text" readOnly />
            </div>
          </div>

          <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">City</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={"New Delhi"} placeholder="Enter Sub-Heading" className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" type="text" readOnly />
            </div>
          </div>


          <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">Postal Code</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={"110063"} placeholder="Enter Sub-Heading" className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" type="text" readOnly />
            </div>
          </div>

          <div className="min-h-[55px] w-[46%] mt-7">
            <p className="text-[20px] font-[500] text-stone-700">User Role</p>
            <div className="w-full shadow-[rgba(149,157,165,0.2)_0px_8px_24px] h-[55px] rounded-lg border-[1px] items-center border-stone-200 mt-2 flex">
              <input value={"HR"} placeholder="Enter Sub-Heading" className="w-[90%] text-stone-700 placeholder:text-stone-500 placeholder:text-[14px] h-full outline-none border-0 px-3" type="text" readOnly />
            </div>
          </div>
         
      </div>
    </div>
  );
};

export default PorfilePage;
