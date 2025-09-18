"use client";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EventPageContext } from "../../../context/EventPageContext";

const SectionFour = ({ ref }) => {
  const { createEventFormData, handleForecastingInputs, addNewForcastingSection } = useContext(EventPageContext);

  const autoResize = (e) => {
    e.target.style.height = "20px"; // reset to base height
    e.target.style.height = e.target.scrollHeight + "px"; // expand as needed
  };

  return (
    <div ref={ref} className="min-h-[500px] w-full shadow mt-2 py-4 px-7">
      <h2 className="text-center text-[27px] font-light">Our Forecasting Specialists at the Event</h2>
      <div className="w-full flex justify-end mb-4">
        <button onClick={addNewForcastingSection} className="grediantBg text-white p-2 rounded-full font-medium px-8 text-[15px] mt-5">
          <i className="ri-add-line"></i> Add More
        </button>
      </div>
      <div className="w-full h-[400px]">
        <Swiper modules={[Navigation, Pagination]} spaceBetween={20} slidesPerView={4}>
          {createEventFormData?.forecastingSpecialists.map((f, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-full min-w-full">
                <div className="border border-dashed border-[#BD2F2C] flex flex-col justify-center items-center relative bg-[#BD2F2C1c] h-[250px] w-full">
                  {f.image && <img src={f.image} className="w-full object-cover absolute z-10 h-full" alt="" />}
                  <div className="relative flex flex-col justify-center items-center bg-[#FFF5F5] h-full w-full">
                    <img src="../icons/upload.png" alt="" />
                    <h3 className="text-[#BD2F2C] mt-2">Upload Image</h3>
                  </div>
                  <input type="file" name="image" onChange={(evt) => handleForecastingInputs(evt, idx)} className="absolute w-full h-full opacity-0 cursor-pointer z-20" />
                </div>
                <div className="mt-3">
                  <div className="flex items-center my-2">
                    <textarea placeholder="Full Name" className="generalCssForInputs text-[14px] text-black placeholder:text-black resize-none overflow-hidden h-[20px] w-[90%]" value={f.fullName} name="fullName" onInput={(e) => { handleForecastingInputs(e, idx); autoResize(e); }} />
                  </div>
                  <div className="flex items-center my-2">
                    <textarea placeholder="Designation" name="designation" className="generalCssForInputs text-[14px] text-black placeholder:text-black resize-none overflow-hidden h-[20px] w-[90%]" value={f.designation} onInput={(e) => { handleForecastingInputs(e, idx); autoResize(e); }} />
                  </div>
                  <div className="flex items-center my-2">
                    <textarea placeholder="Introduction" name="introduction" className="generalCssForInputs text-[14px] text-black placeholder:text-black resize-none overflow-hidden h-[20px] w-[90%]" value={f.introduction} onInput={(e) => { handleForecastingInputs(e, idx); autoResize(e); }} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionFour;
