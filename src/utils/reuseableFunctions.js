import axios from "axios";
import toast from "react-hot-toast";
import * as XLSX from 'xlsx';

// Axios instance with token
const API = axios.create({
  baseURL: "http://192.168.0.193:4005/api/admin",
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// variable
export const eventPayload = {
  logo: "",
  title: "",
  date: "",
  location: "",
  image: "",
  headingImage: "",
  heading: "",
  subHeading: "",
  speakerTopic: "",
  speakerTime: "",
  speakerDate: "",
  sectionTwoStatus: 1,
  sectionThreeStatus: 1,
  sectionFourStatus: 1,
  status: "draft",
  speaker: [
    {
      fullName: "",
      designation: "",
      image: null,
    },
  ],
  description: "",
  forecastingSpecialists: [
    {
      image: null,
      fullName: "",
      designation: "",
      introduction: "",
    },
  ],
};

export let webinarPayload = {
  subHeading: "",
  imageOne: null,
  imageTwo: null,
  keyPoints: [""],
  webibarVideo: null,
  status: "draft",
  speaker: [
    {
      fullName: "",
      designation: "",
      image: null,
    },
  ],
};

export function sligGenerator(str) {
  return str
    ?.toString()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

export const textareaAutoResize = (el) => {
  if (el) {
    el.style.height = "20px"; 
    el.style.height = Math.max(el.scrollHeight, 20) + "px"; 
  }
};

export function toSnakeCase(obj) {
  if (Array.isArray(obj)) return obj.map(toSnakeCase);
  else if (obj !== null && typeof obj === "object") {
    const newObj = {};
    for (const key in obj) {
      const snakeKey = key.replace(/([A-Z])/g, "_$1").toLowerCase();
      newObj[snakeKey] = toSnakeCase(obj[key]);
    }
    return newObj;
  }
  return obj;
}

export function toCamelCase(obj) {
  if (Array.isArray(obj)) return obj.map(toCamelCase);
  else if (obj !== null && typeof obj === "object") {
    const newObj = {};
    for (const key in obj) {
      const camelKey = key.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
      newObj[camelKey] = toCamelCase(obj[key]);
    }
    return newObj;
  }
  return obj;
}

export const excelGenerator = (jsonData, filePath = 'output.xlsx') => {
  const worksheet = XLSX.utils.json_to_sheet(jsonData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'contacts-test');
  XLSX.writeFile(workbook, filePath);
};

export const commonGetApiCall = async (endpoint) => {
  try {
    const res = await API.get(endpoint);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const putCommonApiForEvnts = async (endPoint, data) => {
  try {
    const res = await API.put(endPoint, data);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const postCommonApi = async (endPont, data, msgPoint) => {
  let t = toast.loading(`Creating ${msgPoint}..!`);
  try {
    const res = await API.post(endPont, data);
    toast.dismiss(t);
    return res?.data;
  } catch (e) {
    toast.dismiss(t);
    return e;
  }
};

export const uploadSingleImage = async (files) => {
  if (!files?.length) return "";
  const t = toast.loading("Please wait, uploading File...");
  try {
    const formData = new FormData();
    let endPoint = files[0].type === "video/mp4" ? "form-files" : "single";
    formData.append(
      files[0].type === "video/mp4" ? "additional_files" : "file",
      files[0]
    );

    const res = await axios.post(`http://192.168.0.193:4005/api/upload/${endPoint}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    toast.dismiss(t);
    if (res.data?.success) {
      toast.success("File uploaded successfully!");
      return files[0].type === "video/mp4"
        ? res.data?.data?.additional_files[0]?.url
        : res.data?.data?.url;
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
    const res = await API.post("/events", data);
    toast.dismiss(t);
    return res?.data;
  } catch (e) {
    toast.dismiss(t);
    return e;
  }
};
