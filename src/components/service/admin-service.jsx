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

export async function allCompanies(admin_id) {
  try {
    const { data } = await http.post(`${apiUrl}/admin/all-company-info`,
    admin_id,  
    { headers: { authorization: "Bearer "+ token}});
    return Promise.resolve(data.companies);
  }
catch(error) {
  return Promise.reject(error);
}
}

export async function oneCompanyInfo(data) {
  try {
    const response = await http.post(`${apiUrl}/admin/one-company-info`,
    data,  
    { headers: { authorization: "Bearer "+ token}});
    return Promise.resolve(response.data.user);
  }
catch(error) {
  return Promise.reject(error);
}
}

