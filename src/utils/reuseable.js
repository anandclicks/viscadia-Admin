import axios from "axios";
export const uploadSignleImage = async (files) => {
  let response = await axios.post(
    "http://192.168.0.191:4005/api/upload/single",
    files,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      }, 
    }
  );
  if (response.data?.success) {
    return response.data?.data?.url;
  }
};
