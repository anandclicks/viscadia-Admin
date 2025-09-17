import axios from "axios";
import toast from "react-hot-toast";

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
