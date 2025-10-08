import React, { useEffect, useState } from "react";
import CareerHeaderFilter from "./CareerHeaderFilter";
import ListingRows from "./ListingRows";
import { commonGetApiCall } from "../../utils/reuseableFunctions";
import PageBuildingLoader from "../common/PageBuildingLoader";
import NoDataFound from "../common/NoDataFound";

const Careers = () => {
  const [openCardId, setOpenCardId] = useState(null);
  const [allCareers, setAllCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleToggle = (id) => setOpenCardId((prev) => (prev === id ? null : id));

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await commonGetApiCall("/career");
        setAllCareers(res?.data || []);
      } catch {
        setAllCareers([]);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <PageBuildingLoader />;
  if (!loading && allCareers.length === 0) return <NoDataFound message="No job openings found" />;

  return (
    <>
      <CareerHeaderFilter />
      <div className="h-full w-full">
        <div onClick={() => handleToggle(null)} className="h-[calc(100%-70px)] w-full">
          {allCareers.map((data, index) => (
            <ListingRows
              key={index}
              id={index}
              data={data}
              isOpen={openCardId === index}
              onToggle={handleToggle}
              setOpenCardId={setOpenCardId}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Careers;
