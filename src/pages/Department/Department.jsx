import React, {useState,useEffect} from "react"
import './Department.css';
import DeptCard from '../../components/DeptCard/DeptCard'
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";
function Department(){
  const [department,setDepartment]=useState([]);
  const constants = useSelector((state)=>(state.constantReducer))
  const users = useSelector((state)=>(state.userReducer));
  useEffect(()=>{
      if(constants && constants.data){
        setDepartment([...constants.data[0].dept_short])
      }
  },[constants])

 const [usercount,setMap]=useState(null)
  useEffect(()=>{
      if(users!==null && users.data!=null){
        let map = new Map();
        for(let i=0;i<users.data.length;i++){
          let dept = users.data[i].department;
          console.log(dept);
          if(map.has(dept)){
              map.set(dept,map.get(dept)+1)
          }else{
            map.set(dept,1);
          }
        }
        setMap(map)
      }
  },[users])
 
  return(

    <div>
      <Navbar/>
      <div className="d-flex flex-grow-1 justify-content-center mt-4">
        <div className="d-flex flex-row flex-wrap justify-content-center dept-container">
        {department.map((d,i)=>{
          return(
          <DeptCard key={d._id} Deptname={d.short} UsersCount={usercount?.get(d.dept)} FreelancersCount={15} ProjectCount={10} IconName={d.icon}/>
          )
        })}
        </div>
      </div>
    </div>
    )
}

export default Department
