import React, { useEffect, useState } from "react";
import PageBuildingLoader from '../../components/common/PageBuildingLoader'
import { Link } from "react-router-dom";

const Event = () => {
  let data = localStorage.getItem("event")
  data = JSON.parse(data);
  
  return (
   <>
  <div className="pt-20 bg-white">
      {/* section one start  */}
      <div className="h-[370px] w-full relative flex">
        <div className="EventPagesectionOne w-full h-[370px] object-cover absolute z-10">
          <img
            className="h-full w-full object-cover"
            src="../images/SectionOneBg.png"
            alt="Background"
          />
        </div>

        {/* Left side logo + text */}
        <div className="w-[60%] h-full p-4 flex flex-col gap-4 relative z-20">
          <div className="w-[240px]">
            <div className="h-[180px] w-full relative">
              <div className="absolute left-0 top-0 h-full w-full  flex justify-center items-center flex-col">
                <img
                  src={data?.logo}
                  className="max-w-full max-h-full object-contain"
                  alt="Event Logo"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="h-[40px] w-full flex items-center">
              <h1 className="w-full text-[#133D65] text-[30px]">
                {data?.title}
              </h1>
            </div>

            <div className="mt-8 mb-3 flex gap-10">
              <div className="flex gap-2 min-w-[100px] items-center">
                <img className="h-[20px]" src="../icons/date.png" alt="Date" />
                <p className="text-[16px]">{data?.date}</p>
              </div>
              <div className="flex gap-2 min-w-[60%] items-center">
                <img
                  className="h-[20px]"
                  src="../icons/location.png"
                  alt="Location"
                />
                <p className="text-[16px]">{data?.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side main image */}
        <div className="w-[42%] h-full rightSide bg-amber-400 z-0 flex justify-end relative">
          <div className="absolute left-0 top-0 h-full w-full bg-[#FFF8F8] flex justify-center items-center flex-col">
            <img
              src={data?.image}
              className="h-full w-full object-cover"
              alt="Event"
            />
          </div>
        </div>
      </div>
      {/* section one end  */}

      {/* section two starts */}
      <div className="h-[380px] w-full shadow relative flex overflow-hidden">
        <div className="EventPagesectionOne w-full h-[101%] object-cover absolute z-10">
          <img
            className="h-full w-full object-cover"
            src="../images/sectionTwo.png"
            alt=""
          />
        </div>

        {/* Left side logo section */}
        <div className="w-[45%] h-full flex flex-col gap-10 relative">
          <div className="w-[100%] h-full">
            <div className="h-full w-full bg-amber-200 relative">
              <div className="absolute left-0 top-0 h-full w-full bg-[#FFF5F5] flex justify-center items-center flex-col">
                <img
                  src={data?.headingImage}
                  className="h-full w-full object-cover"
                  alt="Event Logo"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right side text section */}
        <div className="w-[60%] h-full rightSide bg-amber-400 flex items-center relative">
          <div className="w-[100%] relative z-10 flex justify-end     ">
            <div className="w-[90%] pb-[100px]">
              <div className="h-[60px] flex items-center">
                <h1 className="w-full text-white text-[31px] font-light">
                  {data?.heading}
                </h1>
              </div>
              <div className="h-[30px] ">
                <p className="text-[14px] text-white max-w-[80%]">
                {data?.subHeading}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section two ends */}

      {/* section three starts  */}
      <div className="h-[500px] w-full pt-5 shadow mb-8">
        <h2 className="text-[40px] font-light text-center">Speakers</h2>

        {/* Speakers */}
        <div className="flex min-h-[55%] justify-end px-10 gap-5 items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-5 h-full items-center justify-center min-w-[230px]">
              {/* Speaker 1 */}
              {data?.speaker?.map((sp,index)=>(
                 <div className="h-[160px] w-[160px] rounded-full overflow-hidden flex justify-center items-center">
                <img
                key={index}
                 src={sp?.image}
                  className="h-full w-full object-cover"
                  alt="Speaker 2"
                />
              </div>
              ))}
            </div>
          </div>

          {/* Speaker Details */}
          <div className="flex w-[45%] justify-between">
            <div>
              <div className="flex items-center my-2">
              {data?.speaker?.map((sp,indx)=> (
                  <h3 key={indx} className="text-[19px] me-2 text-[#BD2F2C]">
                  {sp?.fullName}
                </h3>
              ))}
              </div>

              <div className="flex items-center">
               {data?.speaker?.map((de,index)=>(
                <p key={index} className="text-[14px] text-black">{de?.designation}</p>
               ))}
              </div>

              <div className="flex items-center">
                <p className="text-[14px] text-black">
                 Tpic: {data?.speakerTopic}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[14px] text-black">
                  Date: {data?.speakerDate}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[14px] text-black">
                  Time:  {data?.speakerTime}
                </p>
              </div>

              <button className="grediantBg cursor-pointer text-white p-2 rounded-none px-8 text-[16px] mt-5">
                Agenda
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="w-full flex justify-center items-center mt-7">
          <p className="w-[90%] text-center text-[16px] text-black leading-relaxed">
          {data?.description}
          </p>
        </div>
      </div>
      {/* section three ends */}

      {/* section four  */}
         <div className="grid grid-cols-3 2xl:max-w-[1400px] md:max-w-[85%] mx-auto max gap-10 ">
              {data?.forecastingSpecialists?.map((person) => (
               <>
                {person?.image && person.fullName && (
                    <Link to={'/'}>
                    <div className="flex pb-3 hover:shadow-[0px_3px_6px_2px_rgba(0,_0,_0,_0.1)] flex-col items-center cursor-pointer">
                      <div className="relative w-full h-[260px] group overflow-hidden">
                        <img
                          src={person?.image}
                          alt={person?.fullName}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#BD3028]/60 to-[#BD3028]/30 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between">
                          <p className="text-[14px] leading-4">
                            {person?.introduction}
                          </p>
                          {person?.click && (
                            <span className="mt-4 text-[14px]">
                              {person?.click}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="mt-2 text-center">
                        <h2 className="text-[#BD302B] font-roboto text-[20px] font-normal">
                          {person?.fullName}
                        </h2>
                        <p className="text-black text-[14px] px-1 font-light">
                          {person?.designation}
                        </p>
                      </div>
                    </div>
                  </Link>
                )}
               </>
                ))}
            </div>
 
      {/* section four ends  */}
    </div>
   </>
  );
};

export default Event;
