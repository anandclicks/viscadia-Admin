import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";

const Webinar = () => {
  const [webinarData, setWebinarData] = useState({});
  useEffect(() => {
    let webinarData = localStorage.getItem("webinar");
    webinarData = JSON.parse(webinarData);
    console.log(webinarData);
    setWebinarData({ ...webinarData });
  }, []);
  return (
    <div>
      <div className="h-[340px] w-full shadow relative flex">
        <div className="EventPagesectionOne w-full h-[340px] object-cover absolute z-10">
          <img
            className="h-full w-full object-cover"
            src="/images/SectionOneBg.png"
            alt=""
          />
        </div>
        <div className="w-[60%] pt-10 h-full px-7 flex flex-col gap-10 relative z-20">
          <div className="">
            <div className="h-[40px] w-full">
              <h1 className="w-full h-full text-[#000000] text-[30px]">
                {webinarData?.headingOne}
              </h1>
            </div>
            <p className="w-full mt-3 text-[#000000] text-[20px] font-light">
              {webinarData?.subHeading}
            </p>
            <button className="grediantBg cursor-pointer text-white p-2 mt-10 rounded-none px-8 text-[16px]">
              View Webinar
            </button>
          </div>
        </div>
        <div className="w-[42%] border-dashed border-[#BD2F2C] border h-full rightSide bg-amber-400 z-0 flex justify-end relative">
          <div className="absolute left-0 top-0 h-full w-full bg-[#FFF8F8] flex justify-center items-center flex-col">
            <img src="../icons/upload.png" alt="" />
            <h3 className="text-[#BD2F2C] mt-2">Upload Image</h3>
          </div>
          <div className="left-0 z-10 top-0 h-full overflow-hidden w-full bg-white flex justify-center items-center flex-col">
            <img
              src={webinarData?.imageOne}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="h-[270px] w-full shadow relative flex mt-5 overflow-hidden">
        <div className="EventPagesectionOne w-full h-[101%] object-cover absolute z-10">
          <img
            className="h-full w-full object-cover"
            src="/images/sectionTwo.png"
            alt=""
          />
        </div>
        <div className="w-[45%] h-full flex flex-col gap-10 relative">
          <div className="w-[100%] h-full">
            <div className="h-full w-full bg-amber-200 relative">
              <div className="absolute border border-dashed border-[#BD2F2C] left-0 top-0 h-full w-full bg-[#FFF5F5] flex justify-center items-center flex-col">
                <img src="../icons/upload.png" alt="" />
                <h3 className="text-[#BD2F2C] mt-2">Upload Logo</h3>
              </div>
              <div className="absolute left-0 top-0 h-full overflow-hidden w-full bg-white flex justify-center items-center flex-col">
                <img
                  src={webinarData?.imageTwo}
                  className="h-full w-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[60%] h-full rightSide bg-amber-400 flex items-center relative">
          <div className="w-[100%] relative z-10 flex justify-end">
            <div className="w-[80%]">
              <div className="h-[60px]">
                <h1 className="w-full h-full text-white text-[31px] font-light">
                  {webinarData?.headingOne}
                </h1>
              </div>
              <div>
                {webinarData?.keyPoints?.map((el, index) => (
                  <div className="h-[30px] flex items-center gap-2 my-1">
                    <img
                      className="h-[80%] object-cover"
                      src="/icons/keyPoints.png"
                      alt=""
                    />
                    <p className="w-[80%] h-full text-white text-[18px] font-light">
                      {el}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[300px] w-full bg-white shadow mt-7 p-5">
        <div className="w-full flex justify-center">
          <div className="text-[30px] font-light">Webinar Video</div>
        </div>
        <div className="w-full h-[270px] flex justify-center items-center">
          <div className="h-[230px] w-[740px] bg-amber-200 relative">
            <div className="absolute left-0 top-0 h-full overflow-hidden w-full bg-white flex justify-center items-center flex-col">
              <video
                controls
                muted
                loop
                src={webinarData?.webibarVideo}
                className="h-full w-full object-cover"
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[400px] w-full mt-10 pt-5 shadow mb-8">
        <h2 className="text-[40px] font-light text-center">Speaker</h2>
        <div className="flex min-h-[25%] justify-end px-10 gap-5 items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-2 h-full items-center justify-center min-w-[230px]">
              <div className="h-[160px] relative w-[160px] rounded-full overflow-hidden flex flex-col justify-center items-center">
                {webinarData?.speaker?.map((el, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col justify-center items-center bg-[#FFF5F5] h-full w-full"
                  >
                    <img
                      src={el?.image}
                      className="w-full object-cover absolute z-10 h-full"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex w-[55%] justify-between">
            <div>
              <div className="flex items-center my-2">
                {webinarData?.speaker?.map((el, index) => (
                  <div className="flex flex-col">
                    <p className="pe-2 text-[19px] text-[#BD2F2C]">
                      {el?.fullName}
                    </p>
                    <div className="flex items-center my-2">
                      <p className="pe-2 text-[19px] text-black">
                       {el?.designation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-7">
          <p className="w-[70%] text-center text-black">
           {webinarData?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
