import React from "react";
import './DepartmentUsers.css'
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { useState } from "react";
function DepartmentUsers() {
  const {dept}=useParams();
  const users =useSelector((state)=>(state.userReducer))
  const constants=useSelector((state)=>(state.constantReducer));
  const [students,setStudents]=useState([])
  

  useEffect(()=>{
    if(users.data){
      const getData=()=>{
          const students = users.data.filter(u=> u.department===dept && u.admin_verify==true)
          setStudents([...students])
      }
       getData();
    }
  },[users])


  
  return (
    <div className="my-3">
      <div className="banner m-2" >
        <div className="row p-3">
         
          <div className="col-10">
            <div className="fs-1 fw-bold">{dept}</div>
            <div className="d-flex justify-content-between mt-4 me-5">
            <div>
              Total Number Of Freelancers : {students?.length}
            </div>
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
