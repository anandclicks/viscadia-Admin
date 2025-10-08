import React from "react";
import { motion } from "framer-motion";

const NoDataFound = ({ message = "No data found" }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <motion.img
        src="/images/nodata.svg"
        alt="No Data"
        className="h-32 w-32"
        initial={{ scale: 0.5, rotate: -15, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 10 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      />
      <motion.p
        className="text-[#BD2F2C] text-lg font-semibold mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
      >
        {message}
      </motion.p>
      <motion.div
        className="w-16 h-1 bg-[#BD2F2C] mt-2 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
      />
    </div>
  );
};

export default NoDataFound;
