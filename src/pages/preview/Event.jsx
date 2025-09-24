import React, { useEffect, useState } from "react";
import PageBuildingLoader from "../../components/common/PageBuildingLoader";
import { Link, useNavigate, useParams } from "react-router-dom";
import { commonGetApiCall } from "../../utils/reuseableFunctions";
import toast from "react-hot-toast";

const Event = () => {
  const redirect = useNavigate()
  const [pageData, setPageData] = useState();
  const [loading,setloading] = useState(true)
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      const res = await commonGetApiCall(`/events/${id}`);
      if (res.success) {
      setPageData(res.data);
      setloading(false)
      }else {
        toast.error("Couldn't Load ! Please Try Again.")
        redirect("/events-and-webinars")
      }
    };
    getData();
  }, []);
  return (
   <>
   {loading && <PageBuildingLoader/>}
    {
      !loading &&
      <div className="bg-white">
      <div className=" bg-white">
        {/* section one start  */}
        <div className="h-[400px] w-full relative flex ">
          <div className="EventPagesectionOne w-full  h-[400px] object-cover absolute z-10">
            <img
              className="h-full w-full object-cover"
              src="/images/SectionOneBg.png"
              alt="Background"
            />
          </div>
          {/* Left side logo + text */}
          <div className="w-[60%] h-full p-4 pt-[40px] flex flex-col gap-4 relative z-20 ps-[70px]">
            <div className="w-[240px]">
              <div className="h-[180px] w-full relative">
                <div className="absolute left-0 top-0 h-full w-full  flex justify-center items-center flex-col">
                  <img
                    src={pageData?.logo}
                    className="max-w-full max-h-full object-contain"
                    alt="Event Logo"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="h-[40px] w-full flex items-center">
                <h1 className="w-full text-[#133D65] text-[30px]">
                  {pageData?.title}
                </h1>
              </div>

              <div className="mt-8 mb-3 flex gap-10">
                <div className="flex gap-2 min-w-[100px] items-center">
                  <img className="h-[20px]" src="/icons/date.png" alt="Date" />
                  <p className="text-[16px]">{pageData?.date}</p>
                </div>
                <div className="flex gap-2 min-w-[60%] items-center">
                  <img
                    className="h-[20px]"
                    src="/icons/location.png"
                    alt="Location"
                  />
                  <p className="text-[16px]">{pageData?.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side main image */}
          <div className="w-[42%] h-full rightSide bg-amber-400 z-0 flex justify-end relative">
            <div className="absolute left-0 top-0 h-full w-full bg-[#FFF8F8] flex justify-center items-center flex-col">
              <img
                src={pageData?.image}
                className="h-full w-full object-cover"
                alt="Event"
              />
            </div>
          </div>
        </div>
        {/* section one end  */}

        {/* section two starts */}
          {pageData?.section_two_status === 1 && 
          <div className="h-[380px] w-full shadow relative flex overflow-hidden">
          <div className="EventPagesectionOne w-full h-[101%] object-cover absolute z-10">
            <img
              className="h-full w-full object-cover"
              src="/images/sectionTwo.png"
              alt=""
            />
          </div>

          {/* Left side logo section */}
          <div className="w-[45%] h-full flex flex-col gap-10 relative">
            <div className="w-[100%] h-full">
              <div className="h-full w-full bg-amber-200 relative">
                <div className="absolute left-0 top-0 h-full w-full bg-[#FFF5F5] flex justify-center items-center flex-col">
                  <img
                    src={pageData?.heading_image}
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
                    {pageData?.heading}
                  </h1>
                </div>
                <div className="h-[30px] ">
                  <p className="text-[14px] text-white max-w-[80%]">
                    {pageData?.sub_heading}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>}
        {/* section two ends */}

        {/* section three starts  */}
         {pageData?.section_three_status === 1 &&
          <div className="min-h-[350px] py-10 w-full pt-5 shadow mb-8 relative">
          <h2 className="text-[40px] font-light text-center">Speakers</h2>
          {/* Speakers */}
          <div className="flex min-h-[55%] relative justify-end px-10 gap-5 items-center">
            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-5 h-full items-center justify-center min-w-[230px]">
                {/* Speaker 1 */}
                {pageData?.speaker?.map((sp, index) => (
                  <>
                    {sp?.image && sp.fullName && (
                      <div className="h-[160px] w-[160px] relative rounded-full overflow-hidden flex justify-center items-center">
                        <img
                          key={index}
                          src={sp?.image}
                          className="h-full w-full object-cover"
                          alt="Speaker 2"
                        />
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>

            {/* Speaker Details */}
            <div className="flex w-[45%] justify-between">
              <div>
                <div className="flex items-center my-2">
                  {pageData?.speaker?.map((sp, indx) => (
                    <h3 key={indx} className="text-[19px] me-2 text-[#BD2F2C]">
                      {sp?.fullName}
                    </h3>
                  ))}
                </div>

                <div className="flex items-center">
                  {pageData?.speaker?.map((de, index) => (
                    <p key={index} className="text-[14px] text-black">
                      {de?.designation}
                    </p>
                  ))}
                </div>

                <div className="flex items-center">
                  <p className="text-[14px] text-black">
                    Tpic: {pageData?.speaker_topic}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[14px] text-black">
                    Date: {pageData?.speaker_date}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[14px] text-black">
                    Time: {pageData?.speaker_time}
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
              {pageData?.description}
            </p>
          </div>
        </div>
         }
        {/* section three ends */}

        {/* section four  */}
        {pageData?.section_four_status === 1 &&
         <div className="relative">
          <h2 className="text-[30px] my-10 text-center font-light">Our Forecasting Specialists at the Event</h2>
          <div className="grid content-center  mb-10 grid-cols-4 2xl:max-w-[1400px] md:max-w-[85%] mx-auto max gap-10 ">
          {pageData?.forecasting_specialists?.map((person) => (
            <>
              {person?.image && person.fullName && (
                <Link className="relative" to={"#"}>
                  
                  <div className="flex pb-3  hover:shadow-[0px_3px_6px_2px_rgba(0,_0,_0,_0.1)] flex-col items-center cursor-pointer">
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
        </div>
        }
     
        {/* section four ends  */}

        {/* contact us form  */}
        <div className="flex flex-col items-center bg-white py-10 px-4 sm:px-6 md:px-24">
          <h2 className="text-center text-[19px] md:text-[38px] font-light text-black mb-5 font-['Open_Sans']">
            Book a meeting with us
          </h2>
          <div className="flex justify-center w-full">
            <form className="w-full max-w-2xl space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-1/2">
                  <input
                    type="text"
                    name="name"
                    className="w-full p-3 border border-[#6D6D6D] rounded-none text-sm font-medium text-[#2e2e2e] bg-white focus:outline-none"
                    placeholder="Name*"
                    required
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <input
                    type="text"
                    name="company"
                    className="w-full p-3 border border-[#6D6D6D] rounded-none text-sm font-medium text-[#2e2e2e] bg-white focus:outline-none"
                    placeholder="Company*"
                    required
                  />
                </div>
              </div>

              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  className="w-full p-3 border border-[#6D6D6D] rounded-none text-sm font-medium text-[#2e2e2e] bg-white focus:outline-none"
                  placeholder="Email*"
                  required
                />
              </div>

              <div className="w-full">
                <input
                  type="text"
                  name="job_title"
                  className="w-full p-3 border border-[#6D6D6D] rounded-none text-sm font-medium text-[#2e2e2e] bg-white focus:outline-none"
                  placeholder="Job Title"
                />
              </div>

              <div className="w-full">
                <input
                  type="number"
                  name="contact_number"
                  className="w-full p-3 border border-[#6D6D6D] rounded-none text-sm font-medium text-[#2e2e2e] bg-white focus:outline-none"
                  placeholder="Contact Number"
                />
              </div>

              <div className="w-full">
                <textarea
                  name="message"
                  rows="4"
                  className="w-full p-3 border border-[#6D6D6D] rounded-none text-sm font-medium text-[#2e2e2e] bg-white focus:outline-none"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="w-full">
                <button
                  type="submit"
                  className="w-full bg-[#63666A] text-white text-base font-semibold py-2 px-4 hover:bg-[#F4D35E] hover:text-white transition-colors duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* contact use form ends  */}
      </div>
    </div>
    }
   </>
  );
};

export default Event;
