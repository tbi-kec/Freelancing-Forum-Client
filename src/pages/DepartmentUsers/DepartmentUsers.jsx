import React from "react";
import './DepartmentUsers.css'
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { useState } from "react";
function DepartmentUsers() {
  const {dept}=useParams();
  const users =useSelector((state)=>(state.userReducer))
  const constants=useSelector((state)=>(state.constantReducer));
  const [students,setStudents]=useState([])
  const getData=()=>{
    const students = users.data.filter(u=> u.department==dept)
    setStudents([...students])
  }
  
  useEffect(()=>{
    if(users.data)
       getData();
  },[users])
  
  return (
    <div>
      <div className="banner m-2" >
        <div className="row">
          <div className="col-2">
            <Link to='/home' className=" d-flex m-3">
              <i class="fa-solid fa-arrow-left back-btn"></i>
            </Link>
          </div>
          <div className="col-10">
            <div className="fs-1 fw-bold">{dept}</div>
            <div className="d-flex justify-content-between mt-4 me-5">
            <div>
              Total:{students?.length}
            </div>
            {/* <div>II Year:20</div>
            <div>III Year:20</div>
            <div>IV Year:20</div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="m-3 pb-5">
        {students.length !=0 &&<>
          {students?.map(s=>(
            <ProfileCard user={s} constant={constants?.data[0]} key={s._id}/>
          ))}
        </>}
      </div>
    </div>
  );
}

export default DepartmentUsers;
