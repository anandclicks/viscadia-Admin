import React, { useState } from "react";
import { Link } from "react-router-dom";

const LeadershipFilterHeader = ({ active = false, setActive }) => {
  return (
    <div className="h-[80px] w-full fsTwo flex  justify-between border-b border-[#E8E8E8]">
      <div className="h-full flex gap-10 items-center">
        <h2 className="text-[22px] font-semibold">Leadership</h2>
      </div>
      <div className="h-full flex items-center gap-3">
        <Link
          to={"/create/leadership"}
          className={`z-10 h-[45px] border-1 px-5 min-w-[170px] hover:bg-[#e8e8e85e] flex justify-center items-center gap-2 border-[#E8E8E8] font-medium transition-all rounded-full`}
        >
          <img className="h-[15px]" src="./icons/plus.png" />
          New Leadership
        </Link>
        <button
          className={`z-10 h-[45px] border-1  min-w-[50px] hover:bg-[#e8e8e85e] flex justify-center items-center gap-2 border-[#E8E8E8] font-medium transition-all rounded-full`}
        >
          <img className="h-[15px]" src="./icons/setting.png" />
        </button>
      </div>
    </div>
  );
};

export default LeadershipFilterHeader;
