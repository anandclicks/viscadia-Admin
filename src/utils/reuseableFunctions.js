import axios from "axios";
export const uploadSignleImage = async (files) => {
  try {
    let formData = new FormData();
    formData.append("file", files[0]);
    let response = await axios.post(
      "http://192.168.0.191:4005/api/upload/single",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.data?.success) {
      return response.data?.data?.url;
    } else {
      return "";
    }
  } catch (error) {
    console.log(error);
    return ""
  }
};
