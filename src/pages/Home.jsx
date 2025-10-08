import { useEffect, useState } from "react";
import HomePageChart from "../components/common/HomePageChart";
import axios from "axios";
import PageBuildingLoader from "../components/common/PageBuildingLoader";

const Home = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("token"); // assuming token is stored in localStorage
        const response = await axios.get(
          "http://192.168.0.193:4005/api/admin/dashboard/analytics",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data.success) {
          setDashboardData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  if (!dashboardData) {
    return <PageBuildingLoader/>;
  }

  const dataOne = [
    {
      title: "Active Visitors",
      number: dashboardData.activeVisitors,
      suffix: "",
    },
    {
      title: "Contact Form",
      number: dashboardData.contactForm,
      suffix: "",
    },
    {
      title: "Bounce Rate",
      number: (parseFloat(dashboardData.bounceRate) * 100).toFixed(2),
      suffix: "%",
    },
    {
      title: "Upcoming Events",
      number: dashboardData.upcomingEvents,
      suffix: "",
    },
  ];

  const dataTwo = [
    { title: "Active Events", number: dashboardData.shortcuts.activeEvents },
    { title: "Active Webinars", number: dashboardData.shortcuts.activeWebinars },
    { title: "Active Jobs", number: dashboardData.shortcuts.activeJobs },
    { title: "Case Studies & Whitepapers", number: dashboardData.shortcuts.caseStudies },
    { title: "News & PR", number: dashboardData.shortcuts.newsPR },
  ];

  const traffic = dashboardData.trafficSource.map((el) => ({
    country: el.country,
    number: el.clicks,
  }));

  const devices = dashboardData.deviceType.map((el) => ({
    device: el.type,
    number: el.clicks,
  }));

  // Pass visitorTrends to HomePageChart
  const visitorTrends = dashboardData.visitorTrends.map((el) => ({
    month: el.month,
    users: el.users,
  }));

  return (
    <div className="h-full w-full fsTwo">
      <div className="min-h-[40px] py-2 w-full">
        <h1 className="text-[25px] font-[400] fsTwo">
          Welcome Back, <span className="font-semibold">Viscadia Team</span>
        </h1>
        <div className="min-h-[110px] shadow-[0px_0px_3px_#0000000f] w-full rounded-[30px] border border-[#E8E8E8] mt-4 p-4 px-2 grid grid-cols-4">
          {dataOne.map((el, index) => (
            <div
              key={index}
              className={`h-full flex flex-col ${
                index === dataOne.length - 1 ? "" : "border-r border-[#E8E8E8]"
              } justify-center px-6`}
            >
              <h2 className="text-[22px] font-[400] mb-1">{el.title}</h2>
              <p className="text-[24px] font-[600]">
                {el.number}
                {el.suffix}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-[220px] flex gap-6 mt-5">
        <div className="min-h-full w-[70%] overflow-hidden rounded-[30px] shadow-[0px_0px_3px_#0000000f] border border-[#E8E8E8] flex items-center">
          <HomePageChart data={visitorTrends} />
        </div>
        <div className="min-h-full w-[30%] rounded-[30px] shadow-[0px_0px_3px_#0000000f] border border-[#E8E8E8] p-3">
          <div className="w-full border-b pb-2 border-[#E8E8E8]">
            <h2 className="text-[22px] font-semibold">Shortcuts</h2>
          </div>
          <div className="flex flex-col mt-3">
            {dataTwo.map((el, index) => (
              <div key={index} className="flex justify-between w-full my-[4px]">
                <p className="max-w-[60%] font-[500]">{el.title}</p>
                <p className="font-[600] text-[20px] mainColor">{el.number}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="min-h-[280px] flex gap-6 mt-5 pb-10">
        <div className="min-h-full w-[45%] p-4 rounded-[30px] border shadow-[0px_0px_3px_#0000000f] border-[#E8E8E8]">
          <div className="flex w-full justify-between border-b pb-2 border-[#E8E8E8]">
            <h2 className="text-[19px] font-semibold">
              Traffic Source <span className="font-[400]">(By Countries)</span>
            </h2>
            <h2 className="text-[19px] font-[400]">Clicks </h2>
          </div>
          <div className="mt-3">
            {traffic.map((el, index) => (
              <div key={index} className="flex w-full justify-between">
                <p className="text-[18px] font-[400]">{el.country}</p>
                <p className="text-[20px] font-[500]">{el.number}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="min-h-full w-[55%] p-3 rounded-[30px] border shadow-[0px_0px_3px_#0000000f] border-[#E8E8E8]">
          <div className="flex w-full justify-between border-b pb-2 border-[#E8E8E8]">
            <h2 className="text-[19px] font-semibold">Device Type</h2>
          </div>
          <div className="mt-3">
            {devices.map((el, index) => (
              <div key={index} className="flex w-full justify-between">
                <p className="text-[18px] font-[400] flex items-center gap-2">
                  <img
                    className="h-[20px]"
                    src={`./deviceLogo/${el.device}.png`}
                    alt=""
                  />{" "}
                  {el.device}
                </p>
                <p className="text-[20px] font-[500]">{el.number}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
