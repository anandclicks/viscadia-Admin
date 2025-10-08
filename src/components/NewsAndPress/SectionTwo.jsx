import { useContext  } from "react";
import { NewsAndPressContext } from "../../../context/NewsAndPressContext";


const SectionTwo = ({ref}) => {
const { handlePaperAndPressInputs, createPaperAndPressData, handleLinkChange } = useContext(NewsAndPressContext);
  const autoResize = (e) => { e.target.style.height = "24px"; e.target.style.height = e.target.scrollHeight + "px"; };

  return (
    <div ref={ref}>
      <div className="min-h-[280px] w-full shadow my-5">
        <div className="w-full p-4">
          <textarea
          required
            placeholder="Enter Details"
            style={{ height: "30px" }}
            name="sectionTwoDetails"
            value={createPaperAndPressData?.sectionTwoDetails}
            className={`w-full outline-0 placeholder:text-stone-800 text-stone-800 border-0 resize-none overflow-hidden text-[18px]`}
             onInput={(e) => { autoResize(e); handlePaperAndPressInputs(e); }}
          />
        </div>
        <div className="w-full p-4">
          <h3 className="text-text-black border-0 resize-none overflow-hidden text-[26px]">About Viscadia</h3>
          <textarea
          required
            placeholder="Enter Details"
            style={{ height: "30px" }}
            name="aboutViscadia"
            value={createPaperAndPressData?.aboutViscadia}
            className={`w-full outline-0 placeholder:text-stone-500 text-stone-500 border-0 resize-none overflow-hidden text-[18px]`}
            onInput={(e) => {
              autoResize(e);
              handlePaperAndPressInputs(e)
            }}
          />
        </div>
      </div>

      <div className="min-min-h-[220px] w-full flex shadow my-5">
        <div className="p-5 h-full w-[60%] pe-10">
          <textarea
          required
            placeholder="Enter Details"
            style={{ height: "30px" }}
            name="sectionThreeDetails"
            value={createPaperAndPressData?.sectionThreeDetails}
            className={`w-full outline-0 placeholder:text-stone-500 text-stone-500 border-0 resize-none overflow-hidden text-[18px]`}
            onInput={(e) => {
              autoResize(e);
              handlePaperAndPressInputs(e)
            }}
          />
        </div>
        <div className="min-h-[280px] w-[40%] py-5">
          <p className="text-[23px] text-black">Contact</p>
          <div className="mt-2">
            <input
            required
            type="email"
              placeholder="Enter Email Address"
              style={{ height: "30px" }}
              name="infoEmail"
              value={createPaperAndPressData?.infoEmail}
              className={`w-full outline-0 placeholder:text-stone-500 text-stone-500 border-0 resize-none overflow-hidden text-[17px]`}
              onInput={(e) => {
                autoResize(e);
                handlePaperAndPressInputs(e)
              }}
            />
          </div>

          <div className="mt-2">
           <p className="text-[20px] text-black">Viscadia Forecasting Confidence</p>
           <p className="text-[20px] text-black">Visit us on social media:</p>
            <div className="mt-3">
  {createPaperAndPressData?.links?.map((el, index) => (
    <input
    required
     type="url"
      key={index}
      placeholder={`Enter ${el?.name} Link`}
      style={{ height: "15px" }}
      name={el?.name}
      value={el?.link} 
      className="w-full outline-0 placeholder:text-stone-500 text-stone-500 border-0 mt-1 resize-none overflow-hidden text-[14px]"
      onInput={(e) => handleLinkChange({ index, key: "link", value: e.target.value })} 
    />
  ))}
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
