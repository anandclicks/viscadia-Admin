import React from "react";
import Table from "../../components/Contact/Table";

const Contact = () => {
  return (
    <div>
      <div className="min-h-[40px] py-5 w-full fsTwo border-b border-b-stone-300">
        <h2 className="text-[22px] font-semibold">Contacts</h2>
      </div>
      <Table/>
    </div>
  );
};

export default Contact;
