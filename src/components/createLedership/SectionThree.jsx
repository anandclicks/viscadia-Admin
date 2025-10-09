import { useContext } from "react";
import { LeadershipContext } from "../../../context/LeadershipContext";

const SectionThree = ({ref}) => {
  const autoResize = (e) => {
    e.target.style.height = "24px";
    e.target.style.height = e.target.scrollHeight + "px";
  };
  const {
    createLeadershipData,
    handleSectionThreeObjInputs,
    addKeysInObjsTwo,
    handlePointsInputOfObjs
  } = useContext(LeadershipContext);
  return (
    <div ref={ref} className="min-h-[400px] pt-10 w-full grid grid-cols-3 gap-10 pb-10 ps-5 shadow">
      {createLeadershipData?.sectionThree?.map((el, index) => (
        <div key={index} className="h-full">
          <div className="h-[150px] w-[150px] rounded-full bg-[#FFF8F8] overflow-hidden border border-dashed border-[#BD2F2C]">
            <div className="flex h-full w-full relative flex-col items-center justify-center">
              <input
              required={el?.img ? false : true}
                className="h-full w-full opacity-0 cursor-pointer left-0 top-0 absolute z-20"
                type="file"
                name="img"
                onChange={(e) => handleSectionThreeObjInputs(e, index)}
              />
              {el?.img && (
                <img className="h-full w-full object-cover" src={el?.img} />
              )}
              {!el?.img && (
                <div className="h-full w-full flex flex-col justify-center items-center">
                  <img src="/icons/upload.png" alt="" />
                  <h3 className="text-[#BD2F2C] mt-2 font-semibold">
                    Upload Logo
                  </h3>
                </div>
              )}
            </div>
          </div>

          <div className="mt-3">
            <textarea 
            required
              className="h-[40px] leading-[30px] w-full outline-0 border-0 resize-none overflow-hidden placeholder:text-[#000000] text-[#000000] text-[22px]"
              placeholder="Heading"
              name="heading"
              value={el?.heading}
              onInput={(e) => {
                handleSectionThreeObjInputs(e, index);
                autoResize(e);
              }}
            />

            <div>
              {/* Static key points */}
              {createLeadershipData?.sectionThree[index].subHeading?.map(
                (key, keyIndex) => (
                  <div key={keyIndex} className="flex items-start gap-2">
                    <textarea
                    required
                      value={key}
                      onInput={(e)=> handlePointsInputOfObjs(e,index,keyIndex)}
                      placeholder="Key Points"
                      className="h-[24px] w-full outline-0 border-0 resize-none overflow-hidden placeholder:text-[#000] text-[#000] text-[16px]"
                    />
                  </div>
                )
              )}

              {/* Button kept for UI consistency, but no functionality */}
              <button
              type="button"
                onClick={() => addKeysInObjsTwo("sectionThree", index)}
                className="bg-[#BD2F2C] mt-2 text-[#fff] p-[4px] rounded-full font-medium px-4 text-[13px]"
              >
                <i className="ri-add-line"></i> Add More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionThree;
