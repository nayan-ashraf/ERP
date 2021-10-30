import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { RiBuilding4Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

class LeftSidebar extends React.Component {
  render() {
    return (
      
        
      <nav id="sidebar" className="sidebar js-sidebar">
			<div className="sidebar-content js-simplebar">
				<a className="sidebar-brand" href="index.html">
          <span className="align-middle">AdminKit</span>
        </a>

				<ul className="sidebar-nav">
								<li className="sidebar-item active">
						<Link className="sidebar-link" to="/">
              <AiTwotoneHome /> <span className="align-middle">Dashboard</span>
            </Link>
					</li>

					<li className="sidebar-item">
						<Link className="sidebar-link" to="/add-company">
              <RiBuilding4Fill /> <span className="align-middle" >Add Company</span>
            </Link>
					</li>

					<li className="sidebar-item">
						<Link className="sidebar-link" to="/all-company">
            <RiBuilding4Fill /> <span className="align-middle" >View Company</span>
            </Link>
					</li>
{/* 
					<li className="sidebar-item">
						<a class="sidebar-link" href="pages-sign-up.html">
              <i class="align-middle" data-feather="user-plus"></i> <span class="align-middle">Sign Up</span>
            </a>
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="pages-blank.html">
              <i class="align-middle" data-feather="book"></i> <span class="align-middle">Blank</span>
            </a>
					</li>

					<li class="sidebar-header">
						Tools & Components
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="ui-buttons.html">
              <i class="align-middle" data-feather="square"></i> <span class="align-middle">Buttons</span>
            </a>
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="ui-forms.html">
              <i class="align-middle" data-feather="check-square"></i> <span class="align-middle">Forms</span>
            </a>
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="ui-cards.html">
              <i class="align-middle" data-feather="grid"></i> <span class="align-middle">Cards</span>
            </a>
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="ui-typography.html">
              <i class="align-middle" data-feather="align-left"></i> <span class="align-middle">Typography</span>
            </a>
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="icons-feather.html">
              <i class="align-middle" data-feather="coffee"></i> <span class="align-middle">Icons</span>
            </a>
					</li>

					<li class="sidebar-header">
						Plugins & Addons
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="charts-chartjs.html">
              <i class="align-middle" data-feather="bar-chart-2"></i> <span class="align-middle">Charts</span>
            </a>
					</li>

					<li class="sidebar-item">
						<a class="sidebar-link" href="maps-google.html">
              <i class="align-middle" data-feather="map"></i> <span class="align-middle">Maps</span>
            </a>
					</li> */}
				</ul>

		
			</div>
		</nav>
    
    );
  }
}

export default LeftSidebar;
