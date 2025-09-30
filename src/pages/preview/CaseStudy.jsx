import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageBuildingLoader from "../../components/common/PageBuildingLoader";
import { commonGetApiCall, toCamelCase } from "../../utils/reuseableFunctions";
import toast from "react-hot-toast";

const CaseStudy = () => {
  const [caseStudyData, setCaseStudyData] = useState();
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      const res = await commonGetApiCall(`/casestudy/${id}`);
      if (res.success) {
        setCaseStudyData(toCamelCase(res?.caseStudy));
      } else {
        toast.error(res?.message || "Somethig went wrong!");
      }
    };
    getData();
  }, []);
  return (
    <>
      {!caseStudyData && <PageBuildingLoader />}
      {caseStudyData && (
        <div className="bg-white">
          {/* section one  */}
          <div className="h-[430px] w-full bg-[#FFF8F8] border-[1px]">
            <div className="h-full w-full relative">
              <img
                className="absolute left-0 top-0 z-0 h-full w-full object-cover"
                src={caseStudyData?.bannerImg}
                alt="Banner"
              />

              <div className="overlay bg-[#00000094] px-10 z-0 h-full  relative top-0 left-0 flex justify-between items-center">
                <div className="flex h-full w-full relative z-10 mx-auto max-w-[90%]">
                  {/* Left Text Content */}
                  <div className="w-[100%] flex flex-col justify-center">
                    <div className="w-full">
                      <h2 className="text-[27px] font-light text-[#ffffff]">
                        Case Study
                      </h2>
                    </div>
                    <div className="w-full">
                      <h1 className="text-[35px] text-[#ffffff] font-light uppercase">
                        {caseStudyData?.mainSubtitle}
                      </h1>
                    </div>
                  </div>

                  {/* Right Logo Section */}
                  <div className="w-[60%] relative flex justify-end items-center z-40 h-full"></div>
                </div>
              </div>
            </div>
          </div>
          {/* section one end  */}

          {/* section two  */}
          <div className="relative min-h-[460px] max-w-[90%] mx-auto">
            <div className="min-h-[330px] flex w-full bg-white shadow my-8 relative z-20">
              {/* Left Image Section */}
              <div className="w-[35%] bg-[#FFF8F8] relative">
                <div className="flex h-full w-full relative border border-dashed border-[#BD2F2C] flex-col items-center justify-center">
                  <img
                    className="h-full w-full object-cover"
                    src={caseStudyData?.img}
                    alt="Logo"
                  />
                </div>
              </div>

              {/* Right Text Section */}
              <div className="w-[65%] h-full p-14 pt-5">
                <h1 className="w-full min-h-[45px] text-black text-[37px] leading-[38px] font-light">
                  {caseStudyData?.title}
                </h1>

                <div className="flex flex-col min-h-[40px] mt-4 gap-2">
                  {caseStudyData?.texts?.map((el, index) => (
                    <h2
                      key={index}
                      className="w-[80%] text-black text-[18px] font-light"
                    >
                      {el}
                    </h2>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-[#F8F8F8] h-[150px] flex items-end pb-5 ">
              <p className="text-[24px] font-light text-center text-[#BD2F2C]">
                Assisted the client in evaluating the product's potential across
                various patient segments and equipped the forecast for a
                successful launch planning
              </p>
            </div>
          </div>
          {/* section two end  */}

          {/* challenges  */}
          <div className=" md:max-w-[85%] 2xl:max-w-[1400px] mx-auto pt-10 pb-0">
            <div className=" w-full">
              {/* header  */}
              <div className="flex flex-col justify-center items-center">
                <img
                  src="/caseStudy/challenges.png"
                  className="h-[55px]"
                  alt=""
                />
                <h3 className="text-center text-[38px] mt-5 font-light">
                  CHALLENGES
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-20">
                {caseStudyData?.challenges?.map((el, index) => (
                  <div key={index} className="min-h-[220px]">
                    <img
                      className="h-[60px] object-cover"
                      src={el?.img}
                      alt="Logo"
                    />

                    <h3 className="text-[23px] leading-[24px] mt-3 font-light mainColor">
                      {el?.title}
                    </h3>

                    <ul className="list-disc ps-5">
                      {el?.texts?.map((el, index) => (
                        <>
                        {el !== "" && <li
                          key={index}
                          className="my-3 text-stone-500 font-light"
                        >
                          {el}
                        </li>}
                        </>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* challenges ends  */}

          {/* approch  */}
          <div className=" md:max-w-[85%] 2xl:max-w-[1400px] mx-auto pt-10 pb-0">
            <div className=" w-full">
              {/* header  */}
              <div className="flex flex-col justify-center items-center">
                <img
                  src="/caseStudy/approach.png"
                  className="h-[55px]"
                  alt=""
                />
                <h3 className="text-center text-[38px] mt-5 font-light">
                  APPROACH
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-20">
                {caseStudyData?.approach?.map((el, index) => (
                  <div key={index} className="min-h-[220px]">
                    <img
                      className="h-[60px] object-cover"
                      src={el?.img}
                      alt="Logo"
                    />

                    <h3 className="text-[23px] leading-[24px] mt-3 font-light mainColor">
                      {el?.title}
                    </h3>

                    <ul className="list-disc ps-5">
                      {el?.texts?.map((el, index) => (
                        <>
                        {el !== "" && <li
                          key={index}
                          className="my-3 text-stone-500 font-light"
                        >
                          {el}
                        </li>}
                        </>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* approch end  */}

          {/* outcomes  */}
          <div className=" md:max-w-[85%] 2xl:max-w-[1400px] mx-auto pt-10 pb-0">
            <div className=" w-full">
              {/* header  */}
              <div className="flex flex-col justify-center items-center">
                <img
                  src="/caseStudy/outcome.png"
                  className=" h-[85px]"
                  alt=""
                />
                <h3 className="text-center text-[38px] mt-5 font-light">
                  OUTCOMES
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-20">
                {caseStudyData?.outcomes?.map((el, index) => (
                  <div key={index} className="min-h-[220px]">
                    <img
                      className="h-[60px] object-cover"
                      src={el?.img}
                      alt="Logo"
                    />

                    <h3 className="text-[23px] leading-[24px] mt-3 font-light mainColor">
                      {el?.title}
                    </h3>

                    <ul className="list-disc ps-5">
                      {el?.texts?.map((el, index) => (
                        <>
                        {el !== "" && <li
                          key={index}
                          className="my-3 text-stone-500 font-light"
                        >
                          {el}
                        </li>}
                        </>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* outcomes ends */}
          <div className="h-[100px] bg-white w-full flex justify-center items-center">
            <button className="mainBg text-[17px] text-white font-light px-4 py-2 flex justify-center items-center">
              DOWNLOAD CASE STUDY
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudy;
