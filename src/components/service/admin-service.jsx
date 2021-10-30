import http from "./http-service";
const apiUrl = "http://localhost:5000";
const token = localStorage.getItem('authenticateToken');

export async function addCompany(company) {
 try{
  
   const response = await http.post(
     `${apiUrl}/admin/add-company`, company,  { headers: { authorization: "Bearer "+ token}}
   );
   return Promise.resolve(response);
 }
 catch(error) {
   alert('i am here')
   return Promise.reject(error);
 }
}

export function allCompanies() {
  http.get(`${apiUrl}/admin/all-company-info`);
}

