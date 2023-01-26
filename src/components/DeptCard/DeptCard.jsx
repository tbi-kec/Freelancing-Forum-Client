import React, {useState} from "react"
import MaterialIcon from 'material-icons-react';

import './DeptCard.css';

function DeptCard({Deptname,UsersCount,FreelancersCount,ProjectCount,IconName}){
  return(
    <div className="dept-card d-flex flex-column flex-grow-1 py-3 px-4 m-3">
      <div className="dept-card-header d-flex flex-row justify-content-between my-2">
        <h3 className="dept-name">{Deptname}</h3>
        <div className="icon-div">
        <MaterialIcon icon={IconName} size={80} color='#ffffff'/>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between dept-details">
        <div className="justify-content-center align-items-center">
          <p>{UsersCount}</p>
          <p>users</p>
        </div>
        <div>
          <p>{FreelancersCount}</p>
          <p>freelancers</p>
        </div>
        <div>
          <p>{ProjectCount}</p>
          <p>projects</p>
        </div>
      </div>
    </div>
    )
}

export default DeptCard
