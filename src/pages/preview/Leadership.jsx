import React, { useState, useEffect } from "react";
import { commonGetApiCall, toCamelCase } from "../../utils/reuseableFunctions";
import { Link, useParams } from "react-router-dom";
 
const Leadership = () => {
  const { id } = useParams();
  const [leader, setLeader] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchLeader = async () => {
      try {
        const res = await commonGetApiCall(`/leadership/${id}`)
        if (res.success) {
          setLeader(toCamelCase(res.data));
        } else {
          console.error("API returned success: false");
        }
      } catch (err) {
        console.error(
          "Error fetching leader:",
          err.response?.data || err.message
        );
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchLeader();
  }, [id]);
 
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen py-20">
        <img
          src="/__Iphone-spinner-1.gif"
          alt="Loading..."
          className="w-16 h-16"
        />
      </div>
    );
  }
 
  if (!leader) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-lg">No leader data found.</p>
      </div>
    );
  }
 
  return (
    <section className="bg-white mt-[60px] md:mt-[80px] text-gray-900 md:py-12">
      <div className="max-w-[1028px] mx-auto">
        <div className="xl:px-0 pb-15 pt-5 sm:pt-0 sm:pb-6 md:pb-16 px-3 md:px-2">
          <Link href="/leadership">
            <p className="text-base text-[#133D66] font-light hover:text-black cursor-pointer transition-colors">
              &lt; Back
            </p>
          </Link>
        </div>
 
        <div className="grid grid-cols-12 xl:px-0 px-3 sm:px-5 gap-8 md:gap-12 items-center">
          <div className="space-y-6 pt-8 sm:pt-0 col-span-12 md:col-span-7 order-2 md:order-1">
            <h1 className="text-4xl lg:text-6xl font-light text-black mb-3 leading-tight">
              {leader.bannerHeading}
            </h1>
            <h2 className="text-xl lg:text-2xl font-light text-black mb-6">
              {leader.designation}
            </h2>
            <p className="text-[#63666A] font-light text-base">
              {leader.bannerSubHeading}
            </p>
 
            <div className="flex items-center space-x-3 mt-4">
              <a
                href={leader.hyperLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={leader.logo || "/linkedin-4.png"}
                  alt="logo"
                  className="h-10 w-10"
                />
              </a>
            </div>
          </div>
 
          <div className="flex justify-center lg:justify-end col-span-12 md:col-span-5 order-1 md:order-2">
            <div className="relative overflow-hidden shadow-lg rounded-2xl">
              <img
                src={leader.bannerImage || "/casestudies/doug.webp"}
                alt={leader.bannerHeading}
                className="w-full max-w-[430px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
 
      <div className="bg-[#ECECEC] pt-10 pb-10 px-4 md:px-5 mt-10 md:mt-14">
        <div className="max-w-[1028px] mx-auto">
          <h2 className="text-[34px] font-light text-black mb-4">Experience</h2>
 
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="col-span-7 space-y-4">
              <p className="text-[#63666A] font-light text-[16px]">
                {leader.experienceSubheading}
              </p>
            </div>
 
            <div className="col-span-5">
              <p className="text-black font-light text-[16px] mb-2">
                {leader.experience}
              </p>
              <div className="space-y-2">
                {leader.company.map((c, i) => (
                  <p key={i} className="text-base text-black font-light">
                    {c}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <div className="grid grid-cols-1 sm:gap-0 gap-8 md:grid-cols-3 xl:px-0 px-5 mt-15 mb-9 max-w-[1028px] justify-center mx-auto">
        {leader.sectionThree.map((item, i) => (
          <div key={i} className="text-center space-y-5 max-h-[60px]">
            <img
              src={item.img || "/casestudies/Therapuetic.png"}
              alt={item.heading || "Default Heading"}
              className="mx-auto h-full object-cover"
            />
 
            <p className="text-xl text-black font-light">{item.heading}</p>
            {item.subHeading.map((sub, j) => (
              <p key={j} className="text-base text-black font-light">
                {sub}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
 
export default Leadership;