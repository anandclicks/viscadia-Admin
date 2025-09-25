import React, { useState } from "react";
import CareerHeaderFilter from "./CareerHeaderFilter";
import ListingRows from "./ListingRows";

const Careers = () => {
  const [openCardId, setOpenCardId] = useState(null);

  const handleToggle = (id) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };
  return (
    <div className="h-full w-full">
      <CareerHeaderFilter />
      <div
        onClick={(e) => {
          handleToggle(null);
        }}
        className="h-[calc(100%-70px)] w-full "
      >
        {Array(4)
          .fill({})
          .map((_, index) => (
            <ListingRows
              isOpen={openCardId === index}
              onToggle={handleToggle}
              key={index}
              id={index}
            />
          ))}
      </div>
    </div>
  );
};

export default Careers;
