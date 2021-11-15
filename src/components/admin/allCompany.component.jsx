import React, { Component } from 'react';
import { allCompanies } from "../service/admin-service";
import { getCurrentUser } from "../service/user-service";
import AllCompanyTable from './allCompany.table';
import Pagination from '../common/pagination.component';


class AllCompany extends React.Component {
  state = {
    companies: [],
    activePage: 1,
    pageCount: 5
  }
  admin_id = getCurrentUser().id;
  username = getCurrentUser().username;
  componentDidMount() {
    const fetchCompany = async () => {
      const admin_id = { admin_id : getCurrentUser().id};
         const response = await allCompanies(admin_id);
          Promise.all([response]).then((values)=>{
          const previous = {...this.state.companies, values}
          this.setState({companies: previous})
        })   
      };
      fetchCompany();
      console.log(this.state.companies)
  }
    paginateCompanies = (companies) => {
      
    const { activePage, pageCount } = this.state;
    const start = (activePage - 1) * pageCount;
    const updatedCompanies = companies.slice(start, start + pageCount);
    return updatedCompanies;
  };

  changePageHandler = (page) => {
    this.setState({ ...this.state.companies, activePage: page });
  };

  oneCompanyInfo =  (admin_id, username) => {
    
    localStorage.setItem('admin_id', admin_id);
    localStorage.setItem('username', username);
    
    this.props.history.push("/one-company-info")
  }

  render() { 
    
    return <div>
      {
  (this.state.companies.values[0]) ?
<div className=" container ">
  {    
console.log(console.log(this.state.companies.values[0]))
}
<div className="row container bg-light box-shadow" style={{ height: "75vh" }}>
  
    <div style={{ height: "65vh" }}>
      <p className="pb-1 pt-3">Showing <input type="number" value={this.state.pageCount} style={{'width': '45px'}}/> of {this.state.companies.values[0].length} Companies
      </p>
      <AllCompanyTable
        companies={this.paginateCompanies(this.state.companies.values[0])}
       oneCompanyInfo= {this.oneCompanyInfo}
      />
        
    </div>
    <Pagination
                total={this.state.companies.values[0].length}
                pageCount={this.state.pageCount}
                activePage={this.state.activePage}
                onPageChange={this.changePageHandler}
              />
  </div>
</div>
 : null

}
    </div>;
  }
}
 
export default AllCompany;