import React, {useState} from "react"
import MaterialIcon from 'material-icons-react';
import { Link } from "react-router-dom";
import './DeptCard.css';

function DeptCard({Deptname,dept,UsersCount,FreelancersCount,ProjectCount,IconName}){
  return(
    <div className="dept-card d-flex flex-column flex-grow-1 py-3 px-4 m-3">
      <div className="dept-card-header d-flex flex-row justify-content-between my-2">
        <h3 className="dept-name"><Link to={`/user/${dept}`}>{Deptname}</Link></h3>
        <div className="icon-div">
        <MaterialIcon icon={IconName} size={80} color='#ffffff'/>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between dept-details">
        <div className="justify-content-center align-items-center text-center">
          <p>{UsersCount}</p>
          <p>users</p>
        </div>
        <div className="justify-content-center align-items-center text-center">
          <p>{FreelancersCount}</p>
          <p>freelancers</p>
        </div>
        <div className="justify-content-center align-items-center text-center">
          <p>{ProjectCount}</p>
          <p>projects</p>
        </div>
      </div>
    </div>
    )
}

DeptCard.defaultProps = {
  UsersCount:0,
  FreelancersCount:0,
  ProjectCount:0,
}

export default DeptCard

