const SectionOne = () => {
  return (
    <div className="h-[260px] w-full bg-[#FFF8F8] border-[1px] border-dashed border-[#BD2F2C]">
      <div className="h-full w-full relative">
        <img
          className="h-full w-full object-cover"
          src="../testingImg/two.jpg"
          alt=""
        />
        <div className="overlay bg-[#00000086]  px-10 z-10 h-full w-full absolute top-0 left-0 flex justify-between items-center">
          <div className="max-w-[40%]">
            <div className="h-[30px] w-full">
            <input
              placeholder="Sub Heading"
              className="w-full h-full outline-0 border-0 text-[#ffffff] placeholder:text-[#ffffff]  text-[21px]"
              type="text"
              name="title"
              id=""
            />
          </div>
          <div className="h-[30px] mt-3 w-full">
            <input
              placeholder="Enter Heading"
              className="w-full h-full outline-0 border-0 text-[#ffffff] placeholder:text-[#ffffff]  text-[28px]"
              type="text"
              name="title"
              id=""
            />
          </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
