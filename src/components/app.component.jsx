import React from "react";
import Home from "./home.component";

import { Route, Redirect, Switch } from "react-router-dom";
import AddCompany from "./admin/addCompany.component";
import Menu from "./menu.component";
import LeftSidebar from "./leftSidebar.component";
import Navbar from "./navbar.component";

class App extends React.Component {
  render() {
    return (
      <div>
           <div className="row">
        <Navbar />
          <div className="col-md-2" style={{'padding': '0', 'margin': '0'}}>
            <LeftSidebar />
          </div>
          <div className="col-md-10" style={{'padding': '0', 'margin': '0'}}>
          <Switch>
         
         <Route exact path="/dashboard" component={Menu} />
         <Route exact path="/add-company" component={AddCompany} />
         <Route exact path="/" component={Menu} />
       </Switch>  
            
          </div>
        </div>
     
      </div>
    );
  }
}
export default App;
