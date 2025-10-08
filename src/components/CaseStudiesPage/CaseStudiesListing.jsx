import React, { useEffect, useState } from "react";
import CaseStudyCard from "../common/CaseStudyCard";
import { commonGetApiCall } from "../../utils/reuseableFunctions";
import PageBuildingLoader from "../common/PageBuildingLoader";
import NoDataFound from "../common/NoDataFound";
import toast from "react-hot-toast";

const CaseStudiesListing = () => {
  const [openCardId, setOpenCardId] = useState(null);
  const [allCaseStudies, setAllCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleToggle = (id) => setOpenCardId((prev) => (prev === id ? null : id));

  useEffect(() => {
    const getAllData = async () => {
      try {
        setLoading(true);
        const res = await commonGetApiCall("/casestudy");
        if (res?.success && res?.data?.length) setAllCaseStudies(res.data);
        else setAllCaseStudies([]);
      } catch {
        toast.error("Unable to load Case Studies. Please try again.");
        setAllCaseStudies([]);
      } finally {
        setLoading(false);
      }
    };
    getAllData();
  }, []);

  if (loading) return <PageBuildingLoader />;
  if (!loading && allCaseStudies.length === 0)
    return <NoDataFound message="No case studies found" />;

  return (
    <div className="mt-5">
      {allCaseStudies.map((data, index) => (
        <CaseStudyCard
          key={index}
          id={index}
          data={data}
          isOpen={openCardId === index}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default CaseStudiesListing;
