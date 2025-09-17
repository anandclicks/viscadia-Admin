import axios from "axios";
import toast from "react-hot-toast";

export const uploadSignleImage = async (files) => {
  if (!files?.length) return "";
  const t = toast.loading("Please wait, uploading image...");
  try {
    const formData = new FormData();
    formData.append("file", files[0]);
    const res = await axios.post("http://192.168.0.191:4005/api/upload/single", formData, {
      headers: { "Content-Type": "multipart/form-data" },
      timeout: 20000,
    });
    toast.dismiss(t);
    if (res.data?.success && res.data?.data?.url) {
      toast.success("Image uploaded successfully!");
      return res.data.data.url;
    }
    toast.error(res.data?.message || "Upload failed");
    return "";
  } catch (err) {
    toast.dismiss(t);
    toast.error(err.response?.data?.message || err.message || "Upload error");
    return "";
  }
};
