import axios from "axios";
import toast from "react-hot-toast";


export const commonGetApiCall = async(endpoint)=>{
  try {
    const res = await axios.get(`http://192.168.0.191:4005/api/admin${endpoint}`)
    return res.data
  } catch (error) {
    return error
  }
}

export const putCommonApi = async(endPoint,data)=>{
  try {
    const res = await axios.put(`http://192.168.0.191:4005/api/admin${endPoint}`,data)
    return res.data
  } catch (error) {
    return error
  }
}

export const uploadSingleImage = async (files) => {
  if (!files?.length) return "";
    const t = toast.loading("Please wait, uploading File...");
  try {
    const formData = new FormData();
    let endPoint = files[0].type === "video/mp4" ? "form-files" : "single";
    formData.append(files[0].type === "video/mp4" ? "additional_files" : "file",  files[0]);
    const res = await axios.post(
      `http://192.168.0.191:4005/api/upload/${endPoint}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    toast.dismiss(t);
    if (res.data?.success) {
      toast.success("File uploaded successfully!");
      return files[0].type === "video/mp4" ? res.data?.data?.additional_files[0]?.url :res.data?.data?.url ;
    }
    toast.error(res.data?.message || "Upload failed");
    return "";
  } catch (err) {
    toast.dismiss(t);
    toast.error(err.response?.data?.message || err.message || "Upload error");
    return "";
  }
};



export const createEventApiCall = async (data) => {
  let t = toast.loading("Creating Event..!");
  try {
    const res = await axios.post("http://192.168.0.191:4005/api/admin/events", data);
    toast.dismiss(t);
    toast.success("Event Created Successfully!");
    return res.data; 
  } catch (e) {
    toast.dismiss(t);
    toast.error("Something Went Wrong!");
    console.error("API error:", e);
    return e;
  }
};


