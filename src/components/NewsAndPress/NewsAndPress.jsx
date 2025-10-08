import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewsCards from "./NewsCards";
import { commonGetApiCall } from "../../utils/reuseableFunctions";
import toast from "react-hot-toast";
import PageBuildingLoader from "../common/PageBuildingLoader";
import NoDataFound from "../common/NoDataFound";

const NewsAndPress = () => {
  const [openCardId, setOpenCardId] = useState(null);
  const [newsListData, setNewsListData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await commonGetApiCall("/article");
      if (data.success) {
        setNewsListData(data?.data || []);
      } else {
        toast.error(data?.message || "Unable to load news. Please try again.");
        setNewsListData([]);
      }
    };
    getData();
  }, []);

  const handleToggle = (id) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="h-full w-full">
      {/* Header */}
      <div className="h-[80px] w-full fsTwo flex justify-between border-b border-[#E8E8E8]">
        <div className="h-full flex gap-10 items-center">
          <h2 className="text-[22px] font-semibold">
            Latest News & Press Releases
          </h2>
        </div>
        <div className="h-full flex items-center gap-3">
          <Link
            to={"/create/news-and-press-releases"}
            className="z-10 h-[45px] border px-5 min-w-[170px] hover:bg-[#e8e8e85e] flex justify-center items-center gap-2 border-[#E8E8E8] font-medium transition-all rounded-full"
          >
            <img className="h-[15px]" src="./icons/plus.png" alt="Add" />
            New Latest News
          </Link>
          <button
            className="z-10 h-[45px] border min-w-[50px] hover:bg-[#e8e8e85e] flex justify-center items-center gap-2 border-[#E8E8E8] font-medium transition-all rounded-full"
          >
            <img className="h-[15px]" src="./icons/setting.png" alt="Settings" />
          </button>
        </div>
      </div>

      {/* Content */}
      <>
        {newsListData === null && <PageBuildingLoader />}
        {newsListData?.length > 0 && (
          <div className="mt-5">
            {newsListData.map((data, index) => (
              <NewsCards
                key={index}
                id={index}
                data={data}
                isOpen={openCardId === index}
                onToggle={handleToggle}
              />
            ))}
          </div>
        )}
        {newsListData?.length === 0 && (
          <NoDataFound message="No news or press releases found" />
        )}
      </>
    </div>
  );
};

export default NewsAndPress;
