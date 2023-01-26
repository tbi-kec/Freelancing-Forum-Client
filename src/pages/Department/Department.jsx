import React, {useState} from "react"
import './Department.css';
import DeptCard from '../../components/DeptCard/DeptCard'
import Navbar from "../../components/Navbar/Navbar";

function Department(){
  return(
    <div>
      <Navbar/>
      <div className="d-flex flex-grow-1 justify-content-center mt-4">
        <div className="d-flex flex-row flex-wrap justify-content-center dept-container">
          <DeptCard Deptname="Mechanical" UsersCount={25} FreelancersCount={15} ProjectCount={10} IconName="engineering"/>
          <DeptCard Deptname="Mechanical" UsersCount={25} FreelancersCount={15} ProjectCount={10} IconName="desktop_mac"/>
          <DeptCard Deptname="Mechanical" UsersCount={25} FreelancersCount={15} ProjectCount={10} IconName="desktop_mac"/>
          <DeptCard Deptname="Mechanical" UsersCount={25} FreelancersCount={15} ProjectCount={10} IconName="desktop_mac"/>
          <DeptCard Deptname="Mechanical" UsersCount={25} FreelancersCount={15} ProjectCount={10} IconName="desktop_mac"/>
          <DeptCard Deptname="Mechanical" UsersCount={25} FreelancersCount={15} ProjectCount={10} IconName="desktop_mac"/>
        </div>
      </div>
    </div>
    )
}

export default Department
