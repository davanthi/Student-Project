import axios from "axios";
import { API_BASE_URL } from "./config.js";
const api = axios.create({
  baseURL: API_BASE_URL,
});
export const addStudent=async(values)=>{
 const response=await api.post("/api/student/add",values);
 return response
}
export const getStudents=async()=>{
 const response = await api.get("api/student/get-students");
 console.log("API Response:", response.data.data);
 return response.data.data;
}