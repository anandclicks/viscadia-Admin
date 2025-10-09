import { useState } from "react";
import { Link } from "react-router-dom";
import { putCommonApiForEvnts } from "../../utils/reuseableFunctions";
import toast from "react-hot-toast";

const ListingRows = ({ id, isOpen, onToggle, data, onAction }) => {
  const [isActive, setIsActive] = useState(!!data?.is_active);

  const handleActionMenu = (e) => {
    e.stopPropagation();
    onToggle(id);
  };

  const toggleStatus = async (status) => {
    const t = toast.loading("Updating status...");
    onToggle(null)
    try {
      const res = await putCommonApiForEvnts(`/career/${data?.id}`, {
        ...data,
        is_active: status,
      });

      toast.dismiss(t);

      if (res.success) {
        setIsActive(status);
        toast.success("Status updated successfully!");
      } else {
        toast.error("Couldn't update status!");
      }
    } catch (err) {
      toast.dismiss(t);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex w-full justify-between items-center border-b border-stone-200 py-3">
      <p className="font-semibold text-[19px]">{data?.heading}</p>
      <div className="relative flex gap-3 mb-2">
        <button
          className={`${
            isActive ? "Published" : "draft"
          } px-3 py-1 rounded-full text-sm font-semibold`}
        >
          {isActive ? "Public" : "Draft"}
        </button>
        <button
          onClick={handleActionMenu}
          className="hover:text-[#BD2F2C] text-[30px] relative"
        >
          <i className="ri-more-2-fill"></i>
        </button>

        <div
          className={`${
            isOpen ? "opacity-100 block" : "opacity-0 hidden"
          } min-h-[120px] w-[170px] bg-white shadow-lg absolute left-[-40px] mt-13 z-20 border rounded-xl border-[#0000001c] px-2 transition-all`}
        >
          <Link to={`/edit/career/${data?.id}`}>
            <button className="h-[40px] w-full my-1 hover:bg-stone-50 text-start px-2 font-semibold border-b border-[#f8f8f8]">
              Edit
            </button>
          </Link>

          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleStatus(!isActive);
            }}
            className="w-full h-[40px] my-1 hover:bg-stone-50 text-start px-2 font-semibold border-b border-[#f8f8f8]"
          >
            {isActive ? "Mark as Draft" : "Publish"}
          </button>

          <Link to={`/preview/career/${data?.id}`}>
            <button className="w-full h-[40px] my-1 hover:bg-stone-50 text-start px-2 font-semibold">
              Preview
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListingRows;
