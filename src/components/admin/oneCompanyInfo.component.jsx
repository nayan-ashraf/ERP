import React, { useEffect, useState } from "react";
import { oneCompanyInfo } from "../service/admin-service";

class OneCompanyInfo extends React.Component {
  state = {
    company_name: '',
    contact_person_name: ''
  }
  componentDidMount() {
    const one_company_info =async ()=> {
      const admin_id = localStorage.getItem('admin_id');
      const username = localStorage.getItem('username');
     const data = {
       admin_id,
       username
     }
     const response =await oneCompanyInfo(data);
     
     Promise.all([response]).then((values)=>{
       console.log(values[0].company)
      const previous = {...this.state}
      this.setState({company_name: values[0].company.name_en, contact_person_name: values[0].company.contact_person_name_en})
    })   
     

    console.log(this.state)
    }
    one_company_info()
  }
  render() { 
    return <div>

    
    {
      
      (this.state.company_name || this.state.contact_person_name) ?
    
     
 <table class="table table-success table-striped">
        <tbody>
          <tr>
           
            <td width="30%">Company Name</td>
            <td>{this.state.company_name}</td>
          </tr>
          <tr>
           
            <td>Contact Person Name</td>
            <td>{ this.state.contact_person_name}</td>
          </tr>
          <tr>
           
            <td width="30%">Company Name</td>
            <td>{this.state.company_name}</td>
          </tr>
          <tr>
           
            <td>Contact Person Name</td>
            <td>{ this.state.contact_person_name}</td>
          </tr>
        </tbody>
      </table>
   
    :
    null
    }
    </div>
  }
}
 
export default OneCompanyInfo;


