import React, {useState,useEffect} from "react"
import './Department.css';
import DeptCard from '../../components/DeptCard/DeptCard'
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";
function Department(){
  const [department,setDepartment]=useState([]);
  const constants = useSelector((state)=>(state.constantReducer))
  const users = useSelector((state)=>(state.userReducer));
  const project = useSelector((state)=>(state.projectReducer))
  useEffect(()=>{
      if(constants && constants.data){
        setDepartment([...constants.data[0].dept_short])
      }
  },[constants])

 const [usercount,setMap]=useState(null)
 const [projectcount,setProjectCount]=useState(null)
 const [freelancerCount,setFreelancerCount]=useState(null)
  useEffect(()=>{
      if(users!==null && users.data!=null){
        let usermap = new Map();
        for(let i=0;i<users.data.length;i++){
          let dept = users.data[i].department;
          if(usermap.has(dept)){
              usermap.set(dept,usermap.get(dept)+1)
          }else{
            usermap.set(dept,1);
          }
        }
        setMap(usermap)
        let freelacerMap = new Map();
        for(let i=0;i<users.data.length;i++){
        let dept = users.data[i].department;
        if(users.data[i].user_type==='freelancer')
          if(freelacerMap.has(dept)){
              freelacerMap.set(dept,freelacerMap.get(dept)+1)
          }else{
              freelacerMap.set(dept,1);
          }
        }
        setFreelancerCount(freelacerMap)
      }
  },[users])

  useEffect(()=>{
      if(project!=null && project.data!=null){
          let projectMap = new Map();
          for(let i=0;i<project.data.length;i++){
            let dept = project.data[i].createdBy.department;
            if(projectMap.has(dept)){
              projectMap.set(dept,projectMap.get(dept)+1)
            }else 
              projectMap.set(dept,1);
          }
          setProjectCount(projectMap)
      }
      
  },[project])
 
  return(

    <div>
      <Navbar/>
      <div className="d-flex flex-grow-1 justify-content-center mt-4">
        <div className="d-flex flex-row flex-wrap justify-content-center dept-container">
        {department.map((d,i)=>{
          return(
            
          <DeptCard key={d._id} dept={d.dept} Deptname={d.short} UsersCount={usercount?.get(d.dept)} FreelancersCount={freelancerCount?.get(d.dept)} ProjectCount={projectcount?.get(d.dept)} IconName={d.icon}/>
         
          )
        })}
        </div>
      </div>
    </div>
    )
}

export default Department
