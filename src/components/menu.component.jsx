import React from "react";
import "../css/style.css";
import { FaUsers } from 'react-icons/fa';
import { FcTodoList } from 'react-icons/fc';
import { BsFillCalendar2CheckFill, BsFillCreditCard2BackFill, BsUiChecksGrid } from 'react-icons/bs';
import { BiGitBranch } from 'react-icons/bi';
import { FcDepartment } from 'react-icons/fc';
import { AiFillIdcard } from 'react-icons/ai';

class Menu extends React.Component {
  render() {
    return (
      <div>
        <div class="p-5">
          <div class="row ">
            <div class="col-xl-3 col-lg-6">
              <div class="card l-bg-cherry">
                <div class="card-statistic-3 p-4">
                  <div class="mb-4">
                    <h5 class="card-title mb-0 text-center">Employees</h5>
                  </div>
                  <div class="text-center">
                    <FaUsers  style={{'width': '100px', 'height': '100px'}}/>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6">
              <div class="card l-bg-blue-dark">
                <div class="card-statistic-3 p-4">
                  <div class="mb-4">
                    <h5 class="card-title mb-0 text-center">Attendence</h5>
                  </div>
                  <div class="text-center">
                    <BsFillCalendar2CheckFill  style={{'width': '100px', 'height': '100px'}}/>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6">
              <div class="card l-bg-green-dark">
                <div class="card-statistic-3 p-4">
                  <div class="mb-4">
                    <h5 class="card-title mb-0 text-center">Leave Requests</h5>
                  </div>
                  <div class="text-center">
                    <FcTodoList  style={{'width': '100px', 'height': '100px'}}/>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6">
              <div class="card l-bg-orange-dark">
                <div class="card-statistic-3 p-4">
                  <div class="mb-4">
                    <h5 class="card-title mb-0 text-center">Branches</h5>
                  </div>
                  <div class="text-center">
                    <BiGitBranch  style={{'width': '100px', 'height': '100px'}}/>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6">
              <div class="card l-bg-orange-dark">
                <div class="card-statistic-3 p-4">
                  <div class="mb-4">
                    <h5 class="card-title mb-0 text-center">Departments</h5>
                  </div>
                  <div class="text-center">
                    <FcDepartment  style={{'width': '100px', 'height': '100px'}}/>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6">
              <div class="card l-bg-green-dark">
                <div class="card-statistic-3 p-4">
                  <div class="mb-4">
                    <h5 class="card-title mb-0 text-center">Positions</h5>
                  </div>
                  <div class="text-center">
                    <AiFillIdcard  style={{'width': '100px', 'height': '100px'}}/>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6">
              <div class="card l-bg-blue-dark">
                <div class="card-statistic-3 p-4">
                  <div class="mb-4">
                    <h5 class="card-title mb-0 text-center">Leave Types</h5>
                  </div>
                  <div class="text-center">
                    <BsFillCreditCard2BackFill  style={{'width': '100px', 'height': '100px'}}/>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6">
              <div class="card l-bg-cherry">
                <div class="card-statistic-3 p-4">
                  <div class="mb-4">
                    <h5 class="card-title mb-0 text-center">Available Leaves</h5>
                  </div>
                  <div class="text-center">
                    <BsUiChecksGrid  style={{'width': '100px', 'height': '100px'}}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
