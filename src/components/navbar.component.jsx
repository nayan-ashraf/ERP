import React from "react";
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
 
    return (
      <div>
        
        <nav className="navbar navbar-expand navbar-light navbar-bg">
          <Link className="sidebar-toggle js-sidebar-toggle">
            <i className="hamburger align-self-center"></i>
          </Link>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav navbar-align">
    
              <li className="nav-item dropdown">
                <Link
                  className="nav-icon dropdown-toggle d-inline-block d-sm-none"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  
                </Link>
                <Link className="dropdown-item" to="/log-out">
                    <FaUserCircle />Log out
                  </Link>
               
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }


export default Navbar;
