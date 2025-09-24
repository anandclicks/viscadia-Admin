import React, { useState } from "react";
import CaseStudyAndWhitePaperCard from "../common/CaseStudyAndWhitePaperCard";

const CaseStudiesListing = () => {
  const [openCardId, setOpenCardId] = useState(null);

  const handleToggle = (id) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };
  return (
    <div className="mt-5">
      {[...Array(1)].map((_, index) => (
        <CaseStudyAndWhitePaperCard
          key={index}
          id={index}
          isOpen={openCardId === index}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default CaseStudiesListing;
