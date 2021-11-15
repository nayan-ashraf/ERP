import React from "react";
import Home from "./home.component";
import { Route, Switch } from "react-router-dom";
import AddCompany from "./admin/addCompany.component";
import LeftSidebar from "./leftSidebar.component";
import Navbar from "./navbar.component";
import "../css/style.css";
import "../style.js";
import LogOut from "./LogOut.component";
import AllCompany from "./admin/allCompany.component";
import OneCompanyInfo from "./admin/oneCompanyInfo.component";

class Application extends React.Component {
  render() {
    return (
      <div className="wrapper">
        
        <LeftSidebar />
        <div className="main">
          <Navbar />
          <main className="content">
				<div className="container-fluid p-0">
        <Switch>
         
         
         <Route exact path="/dashboard" component={Home} />
         <Route exact path="/add-company" component={AddCompany} />
         <Route exact path="/all-company" component={AllCompany} />
         <Route exact path="/one-company-info" component={OneCompanyInfo} />
         <Route exact path="/log-out" component={LogOut} />
         <Route exact path="/" component={Home} />
       </Switch>  
        </div>
        </main></div>
       
            </div>
        
    );
  }
}
export default Application;
