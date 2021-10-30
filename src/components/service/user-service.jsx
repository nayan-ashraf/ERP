import http from "./http-service";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
const apiUrl = "http://localhost:5000";


export async function login(user) {
  try{
    const response = await http.post(`${apiUrl}/user/login`, user);
    console.log(response);
    localStorage.setItem("authenticateToken", response.data.info.token);
    window.location = "/";
    return Promise.resolve(response);
  }catch(error) {
    toast(error);
  }
 
}

export async function logout(user) {
  const response = await http.post(`${apiUrl}/user/log-out`, user);
  localStorage.setItem("authenticateToken", "");
  window.location = "/";
  return Promise.resolve(response);
}

export function getCurrentUser() {
  try {
    const authenticateToken = localStorage.getItem("authenticateToken");
    return jwtDecode(authenticateToken);
  } catch (error) {
    return null;
  }
}
