import React, { useState } from "react";
import EventAndWebListingCard from "../common/EventAndWebListingCard";

const CaseStudiesListing = () => {
  const [openCardId, setOpenCardId] = useState(null);

  const handleToggle = (id) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };
  return (
    <div className="mt-5">
      {[...Array(1)].map((_, index) => (
        <EventAndWebListingCard
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
