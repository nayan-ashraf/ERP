import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { GrChapterAdd } from "react-icons/gr";
import { RiBuilding4Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

class LeftSidebar extends React.Component {
  render() {
    return (
      
        <div className="vh-100" style={{ backgroundColor: "black", 'position': 'fixed' }}>
        
      
          <ul class="list-group mx-1" style={{'backgroundColor': 'transparent'}}>
            <li
              class="list-group-item" 
              style={{ 'cursor': "pointer", 'border':'none', 'backgroundColor': 'transparent', 'color': '#C9C9C9', 'letterSpacing': '1px' }}
            >
              <div className="row">
                <div className="col-2">
                  <AiTwotoneHome style={{'margin': "5px 10px" }} />
                </div>
                <div className="col-10">
                  <Link to="dashboard"> Dashboard </Link>
                </div>
              </div>
            </li>
            <li
              class="list-group-item" 
              style={{ 'cursor': "pointer", 'border':'none', 'backgroundColor': 'transparent', 'color': '#C9C9C9', 'letterSpacing': '1px' }}
            >
              <div className="row">
                <div className="col-2">
                <AiTwotoneHome style={{'margin': "5px 10px" }} />
                </div>
                <div className="col-10">
                 <Link to="/add-company"> Add Company </Link>
                </div>
              </div>
            </li>
           
            <li
              class="list-group-item" 
              style={{ 'cursor': "pointer", 'border':'none', 'backgroundColor': 'transparent', 'color': '#C9C9C9', 'letterSpacing': '1px' }}
            >
              <div className="row">
                <div className="col-2">
                  <RiBuilding4Fill style={{'margin': "5px 10px" }} />
                </div>
                <div className="col-10">View Company</div>
              </div>
            </li>
            {/* <li
              class="list-group-item" 
              style={{ 'cursor': "pointer", 'border':'none', 'backgroundColor': 'transparent', 'color': '#C9C9C9', 'letterSpacing': '1px' }}
            >
              <div className="row">
                <div className="col-2">
                  <RiBuilding4Fill style={{'margin': "5px 10px" }}/>
                </div>
                <div className="col-10">View Employee</div>
              </div>
            </li>
            <li
              class="list-group-item" 
              style={{ 'cursor': "pointer", 'border':'none', 'backgroundColor': 'transparent', 'color': '#C9C9C9', 'letterSpacing': '1px' }}
            >
              <div className="row">
                <div className="col-2">
                  <RiBuilding4Fill style={{'margin': "5px 10px" }} />
                </div>
                <div className="col-10">View Employee</div>
              </div>
            </li>
            <li
              class="list-group-item" 
              style={{ 'cursor': "pointer", 'border':'none', 'backgroundColor': 'transparent', 'color': '#C9C9C9', 'letterSpacing': '1px' }}
            >
              <div className="row">
                <div className="col-2">
                  <RiBuilding4Fill style={{'margin': "5px 10px" }} />
                </div>
                <div className="col-10">View Employee</div>
              </div>
            </li>
            <li
              class="list-group-item" 
              style={{ 'cursor': "pointer", 'border':'none', 'backgroundColor': 'transparent', 'color': '#C9C9C9', 'letterSpacing': '1px' }}
            >
              <div className="row">
                <div className="col-2">
                  <RiBuilding4Fill style={{'margin': "5px 10px" }}/>
                </div>
                <div className="col-10">View Employee</div>
              </div>
            </li>
            <li
              class="list-group-item" 
              style={{ 'cursor': "pointer", 'border':'none', 'backgroundColor': 'transparent', 'color': '#C9C9C9', 'letterSpacing': '1px' }}
            >
              <div className="row">
                <div className="col-2">
                  <RiBuilding4Fill style={{'margin': "5px 10px" }}/>
                </div>
                <div className="col-10">View Employee</div>
              </div>
            </li>
            <li
              class="list-group-item" 
              style={{ 'cursor': "pointer", 'border':'none', 'backgroundColor': 'transparent', 'color': '#C9C9C9', 'letterSpacing': '1px' }}
            >
              <div className="row">
                <div className="col-2">
                  <RiBuilding4Fill style={{'margin': "5px 10px" }} />
                </div>
                <div className="col-10">View Employee</div>
              </div>
            </li>
            <li
              class="list-group-item" 
              style={{ 'cursor': "pointer", 'border':'none', 'backgroundColor': 'transparent', 'color': '#C9C9C9', 'letterSpacing': '1px' }}
            >
              <div className="row">
                <div className="col-2">
                  <RiBuilding4Fill style={{'margin': "5px 10px" }} />
                </div>
                <div className="col-10">View Employee</div>
              </div>
            </li> */}
          </ul>
        </div>
    
    );
  }
}

export default LeftSidebar;
