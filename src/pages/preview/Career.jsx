import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PageBuildingLoader from "../../components/common/PageBuildingLoader";
import { commonGetApiCall } from "../../utils/reuseableFunctions";

const CareerPreveiw = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [verified, setVerified] = useState(false);
  const [errors, setErrors] = useState("");
  const [principal, setPrincipal] = useState(null);
  const { id } = useParams();

  const [formData, setFormData] = useState({
    resume: "",
    name: "",
    email: "",
    message: "",
    contactNumber: "",
    currentEmployer: "",
    school: "",
    graduation_year: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await commonGetApiCall(`career/${id}`)
        setPrincipal(response.data);
      } catch (err) {
        console.log("Error fetching career data:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchData();
  }, [id]);


  if (loading || !principal) {
    return (
      <PageBuildingLoader/>
    );
  }

  return (
    <>
      <div className="relative w-full h-[390px] bg-[#BD3023] flex items-center">
        <div className="text-left pt-[60px] sm:pt-[80px] px-6 sm:px-24 space-y-4">
          <h2 className="text-white text-2xl sm:text-3xl font-light tracking-wide">
            {"Career"}
          </h2>
          <p className="text-white font-light tracking-wide max-w-3xl text-2xl sm:text-4xl md:text-5xl">
            {principal.heading}
          </p>
        </div>
      </div>

      <div className="text-center bg-[#f1f0f1] px-6 sm:px-24 pt-15 pb-15">
        <h2 className="text-[#BD302B] text-xl sm:text-[38px] font-bold">
          {principal.sub_heading}
        </h2>
        <p className="text-[#63666A] font-light text-base mb-[30px]">
          {principal.country}
        </p>
        <div className="wpb_wrapper text-[#63666A] font-light text-[14px] space-y-3 text-left">
          <p>{principal.section_two_sub_heading}</p>
        </div>
      </div>

      {principal.responsibilities_status && (
        <div className="max-w-[1200px] mx-auto py-12 px-6">
          <div className="text-center mb-10">
            <img
              src="/careers/imgeThree.png"
              alt="Roles Icon"
              className="mx-auto mb-4 h-[100px]"
            />
            <h2 className="text-[#BD302B] inline-block font-bold text-2xl uppercase tracking-wide">
              Roles and Responsibilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 text-left text-[#333] leading-relaxed">
            {principal.responsibilities.map((item, idx) => (
              <div key={idx} className="space-y-8 ">
                <h3 className="text-[#444444] tracking-wide font-medium text-[18px] mb-3">
                  {item.subHeading}
                </h3>
                <ul className="list-disc text-[#676767] font-light pl-6 space-y-2 text-base">
                  {item.keyPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {principal.qualifications_status && (
        <div className="bg-[#F1F0F1]">
          <div className="max-w-[1200px] mx-auto py-12 px-6">
            <div className="text-center mb-10">
              <img
                src="/careers/imgeOne.png"
                alt="Roles Icon"
                className="mx-auto mb-4"
              />
              <h2 className="text-[#BD302B] mt-5 inline-block font-bold text-2xl uppercase">
                Qualifications
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-9 text-left leading-relaxed">
              {principal.qualifications.map((item, idx) => (
                <div key={idx} className="space-y-8">
                  <h3 className="font-medium text-[#444444] text-[16px] mb-2">
                    {item.subHeading}
                  </h3>
                  <ul className="list-disc text-[#676767] font-light space-y-2 text-base">
                    {item.keyPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {principal.key_skills_status && (
        <div className="max-w-[1200px] mx-auto py-12 px-6">
          <div className="text-center mb-10">
            <img
              src="/careers/imgeTwo.png"
              alt="Roles Icon"
              className="mx-auto mb-7"
            />
            <h2 className="text-[#BD302B] inline-block font-bold text-2xl uppercase tracking-wide">
              Key Skills
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-9 text-left text-[#333] leading-relaxed">
            {principal.key_skills.map((item, idx) => (
              <div key={idx} className="space-y-8">
                <h3 className="font-medium text-[#444444] text-[16px] mb-2">
                  {item.subHeading}
                </h3>
                <ul className="list-disc text-[#676767] font-light space-y-1 text-base">
                  {item.keyPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
      {principal.benefits_status && (
        <div className="bg-white">
          <div className="max-w-[1200px] mx-auto py-12 px-6">
            <div className="text-center mb-10">
              <img
                src="/careers/benefits.png"
                alt="Benefits Icon"
                className="mx-auto mb-4"
              />
              <h2 className="text-[#BD302B] mt-5 inline-block font-bold text-2xl uppercase">
                Benefits
              </h2>
            </div>
 
            <div className="grid md:grid-cols-2 gap-9 text-left leading-relaxed">
              {principal.benefits.map((item, idx) => (
                <div key={idx} className="space-y-8">
                  <h3 className="font-medium text-[#444444] text-[16px] mb-2">
                    {item.subHeading}
                  </h3>
                  <ul className="list-disc text-[#676767] font-light space-y-2 text-base">
                    {item.keyPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
 
    </>
  );
};

export default CareerPreveiw;
