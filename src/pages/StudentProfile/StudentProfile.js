import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import AddProject from '../../components/AddProject/AddProject';
import Banner from '../../components/Banner/Banner'
import ProfileBio from '../../components/ProfileBio/ProfileBio'
import ProjectHistory from '../../components/ProjectHistory/ProjectHistory';
import Skills from '../../components/Skills/Skills'
import StudentProject from '../../components/StudentProject/StudentProject';
import WorkHistory from '../../components/WorkHistory/WorkHistory';
import './StudentProfile.css'

export default function StudentProfile() {

    const {id}=useParams();
    const [studyProject,setStudyProject]=useState([])
    const [work_history,setWorkHistory]=useState([])
    const [user,setUser]=useState(null);

    const users=useSelector((state)=>(state.userReducer))
    const filterUser =  async()=>{
        let newUser = users.data.filter(u=>u._id === id);
        setUser(newUser[0])
    }
    useEffect(()=>{
        if(users.data){
            filterUser();
        }   
    },[users])

    useEffect(()=>{
         if(user&& user?.work_history && user.work_history?.length){
                setWorkHistory(user.work_history)
        }
        if(user&& user?.study_project && user.study_project?.length){
                setStudyProject(user.study_project)
        }
    },[user])

    


  return (
    <div className='student-profile'>
        <div className="back">
        <Link to="/Home">
            <i className="fa-sharp fa-solid fa-arrow-left"></i>
        </Link>
        </div>
        <Banner/>
        
        <ProfileBio  user={user} key={1}/>

        <Skills skills={user?.skills}/>




       
        <div className="student-card work-history">
            <div className="title">
                <h2>
                Work - History
                </h2>
            </div>
            <div className="card-group">
                
                {work_history?.map(w=>(
                    <WorkHistory work={w} key={w._id} />
                ))}

            
            </div>
        </div>


 

           

        

        
      
        <StudentProject project={studyProject}/>

        <ProjectHistory/>

    </div>
  )
}

