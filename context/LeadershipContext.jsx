import { createContext, useEffect, useState } from "react";
import { uploadSingleImage } from "../src/utils/reuseableFunctions";
const payload = {
  bannerHeading: "",
  designation: "",
  bannerSubHeading: "",
  bannerImage: "",
  logo: "",
  experience: "",
  experienceSubheading: "",
  title: "",
  company: [""],
  sectionThree: Array.from({ length: 3 }, () => ({
    img: "",
    heading: "",
    subHeading: [""],
  })),
};
export const LeadershipContext = createContext({});
export const LeadershipContextProvider = ({ children }) => {
  const [createLeadershipData, setCreateLeadershipData] = useState({
    ...payload,
  });

  const handleLeadershipInputs = async (evt) => {
    const { name, value, type, files } = evt.target;
    if (type === "file" && files && files[0]) {
      const url = await uploadSingleImage(files);
      if (url) {
        setCreateLeadershipData((prev) => ({ ...prev, [name]: url }));
      }
    } else {
      setCreateLeadershipData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addKeysInObjs = (keyName) => {
    setCreateLeadershipData((prev) => {
      let updatedCompanyArr = [...prev[keyName]];
      updatedCompanyArr = [...updatedCompanyArr, ""];
      return { ...prev, [keyName]: updatedCompanyArr };
    });
  };

  const addKeysInObjsTwo = (keyName, objectIndex) => {
    setCreateLeadershipData((prev) => {
      let updatedCompanyArr = [...prev[keyName]];
      updatedCompanyArr[objectIndex].subHeading = [
        ...updatedCompanyArr[objectIndex].subHeading,
        "",
      ];
      return { ...prev, [keyName]: updatedCompanyArr };
    });
  };

  const handleCopanyNameInputs = (evt, index) => {
    const { value } = evt.target;
    setCreateLeadershipData((prev) => {
      let updatedCompanyArr = [...createLeadershipData?.company];
      updatedCompanyArr[index] = value;
      return { ...prev, company: updatedCompanyArr };
    });
  };

  const handleSectionThreeObjInputs = async (evt, index) => {
    const { name, value, files, type } = evt.target;
    if (files) {
      const url = await uploadSingleImage(files);
      if (url) {
        setCreateLeadershipData((prev) => {
          let crrObj = createLeadershipData?.sectionThree;
          crrObj[index] = { ...crrObj[index], img: url };
          return { ...prev, sectionThree: crrObj };
        });
      }
    } else {
      setCreateLeadershipData((prev) => {
        let crrObj = createLeadershipData?.sectionThree;
        crrObj[index] = { ...crrObj[index], heading: value };
        return { ...prev, sectionThree: crrObj };
      });
    }
  };

  const handlePointsInputOfObjs = (evt, objIndex, pointIndex) => {
    const { value } = evt.target;
    setCreateLeadershipData((prev) => {
      let updatedArr = [...createLeadershipData.sectionThree];
      updatedArr[objIndex].subHeading[pointIndex] = value;
      return { ...prev, sectionThree: updatedArr };
    });
  };

  useEffect(() => {
    console.log(createLeadershipData);
  }, [createLeadershipData]);
  return (
    <>
      <LeadershipContext.Provider
        value={{
          handleLeadershipInputs,
          createLeadershipData,
          addKeysInObjs,
          addKeysInObjsTwo,
          handleCopanyNameInputs,
          handleSectionThreeObjInputs,
          handlePointsInputOfObjs,
        }}
      >
        {children}
      </LeadershipContext.Provider>
    </>
  );
};
