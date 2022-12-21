import React from "react";
import './DepartmentUsers.css'
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import {Link} from 'react-router-dom'

function DepartmentUsers() {
  return (
    <div>
      <div className="banner m-2" >
        <div className="row">
          <div className="col-2">
            <Link to='/' className=" d-flex m-3">
              <i class="fa-solid fa-arrow-left back-btn"></i>
            </Link>
          </div>
          <div className="col-10">
            <div className="fs-1 fw-bold">AI AND ML</div>
            <div className="d-flex justify-content-between mt-4 me-5">
            <div>
              Total:60
            </div>
            <div>II Year:20</div>
            <div>III Year:20</div>
            <div>IV Year:20</div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-3 pb-5">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </div>
  );
}

export default DepartmentUsers;
