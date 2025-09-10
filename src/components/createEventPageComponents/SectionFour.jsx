"use clint"

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SectionFour = () => {
  const [forecasters, setForecasters] = useState([
    { image: "", name: "", designation: "", intro: "" },
    { image: "", name: "", designation: "", intro: "" },
    { image: "", name: "", designation: "", intro: "" },
    { image: "", name: "", designation: "", intro: "" },
  ]);

  const addForecaster = () => {
    setForecasters(prev => [...prev, { image: "", name: "", designation: "", intro: "" }]);
  };

  const handleChange = (idx, field, value) => {
    setForecasters(prev => prev.map((f, i) => i === idx ? { ...f, [field]: value } : f));
  };

  const handleImage = (idx, e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setForecasters(prev => prev.map((f, i) => i === idx ? { ...f, image: url } : f));
    }
  };

  return (
    <div className="min-h-[500px] w-full shadow mt-2 py-4 px-7">
      <h2 className="text-center text-[27px] font-light">
        Our Forecasting Specialists at the Event
      </h2>
      <div className="w-full flex justify-end mb-4">
        <button
          className="grediantBg text-white p-2 rounded-full font-medium px-8 text-[15px] mt-5"
          onClick={addForecaster}
        >
          <i className="ri-add-line"></i> Add More
        </button>
      </div>
      <div className="w-full h-[400px]">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
        >
          {forecasters.map((f, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-full min-w-full">
                <div className="flex flex-col justify-center items-center relative bg-[#9600001c] h-[250px] w-full">
                  {f.image && (
                    <img
                      src={f.image}
                      className="w-full object-cover absolute z-10 h-full"
                      alt=""
                    />
                  )}
                  <div className="relative flex flex-col justify-center items-center bg-[#FFF5F5] h-full w-full">
                    <img src="../icons/upload.png" alt="" />
                    <h3 className="text-[#960000] mt-2">
                      Upload Image
                    </h3>
                  </div>
                  <input
                    type="file"
                    onChange={e => handleImage(idx, e)}
                    className="absolute w-full h-full opacity-0 cursor-pointer z-20"
                  />
                </div>
                <div className="mt-3">
                  <div className="flex items-center my-2">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="generalCssForInputs text-[14px] text-black placeholder:text-black"
                      value={f.name}
                      onChange={e => handleChange(idx, "name", e.target.value)}
                    />
                  </div>
                  <div className="flex items-center my-2">
                    <input
                      type="text"
                      placeholder="Designation"
                      className="generalCssForInputs text-[14px] text-black placeholder:text-black"
                      value={f.designation}
                      onChange={e => handleChange(idx, "designation", e.target.value)}
                    />
                  </div>
                  <div className="flex items-center my-2">
                    <textarea
                      placeholder="Introduction"
                      className="generalCssForInputs text-[14px] text-black placeholder:text-black"
                      value={f.intro}
                      onChange={e => handleChange(idx, "intro", e.target.value)}
                    ></textarea>
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
