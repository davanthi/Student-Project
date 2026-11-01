import axios from "axios";
import { API_BASE_URL } from "./config.js";
const api = axios.create({
  baseURL: API_BASE_URL,
});
export const register = async (values) => {
  try {
    const response = await api.post("/api/auth/register", values);
    
    localStorage.setItem('user',JSON.stringify(response.data.user))
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const login=async(values)=>{
 try {
  const response=await api.post("/api/auth/login",values)
  localStorage.setItem('user',JSON.stringify(response.data.user))
  return response;
 } catch (error) {
  console.log(error)
 }
}
