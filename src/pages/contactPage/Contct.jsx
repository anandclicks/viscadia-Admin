import React from "react";
import Table from "../../components/Contact/Table";

const Contact = () => {
  return (
    <div>
      <div className="min-h-[40px] py-5 w-full fsTwo border-b border-b-stone-300">
        <h2 className="text-[22px] font-semibold">Contacts</h2>
      </div>
      <div className="min-h-[40px] py-5 fsTwo flex w-full justify-between">
        <div className="relative h-[45px] w-120 border-[1px] border-stone-300 rounded-full">
          <img
            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5"
            src="/searchIcon.png"
            alt=""
          />
          <input
            type="text"
            placeholder="Search Contacts..."
            className="h-full w-full pl-10 pr-4  rounded-full  text-[16px] bg-white outline-0 placeholder-gray-400 transition-all duration-200"
          />
        </div>
        <button className="h-[40px] flex px-4 gap-2 items-center w-fit border-[1px] border-stone-200 rounded-full">
            <img className="h-[25px] object-contain" src="/icons/excel.png" alt="" />
            <p className="text-[14px] font-semibold">Export to Excel</p>
        </button>
      </div>

      <Table/>
     

    </div>
  );
};

export default Contact;
