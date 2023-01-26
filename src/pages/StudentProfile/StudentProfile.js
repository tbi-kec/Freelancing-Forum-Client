import React,{useEffect,useLayoutEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams,useNavigate } from "react-router-dom";
import AddProject from '../../components/AddProject/AddProject';
import Banner from '../../components/Banner/Banner'
import ProfileBio from '../../components/ProfileBio/ProfileBio'
import ProjectHistory from '../../components/ProjectHistory/ProjectHistory';
import Skills from '../../components/Skills/Skills'
import StudentProject from '../../components/StudentProject/StudentProject';
import WorkHistory from '../../components/WorkHistory/WorkHistory';
import Domain from '../../components/Domain/Domain';
import './StudentProfile.css'

export default function StudentProfile() {
    const navigate = useNavigate()
    const {id}=useParams();
    const [studyProject,setStudyProject]=useState([])
    const [work_history,setWorkHistory]=useState([])
    const [project_given,setProjectGiven]=useState([])
    const [user,setUser]=useState(null);
    const current = useSelector((state)=>(state.currentUserReducer))
    const users=useSelector((state)=>(state.userReducer))
    const filterUser =  async()=>{
        let newUser = users.data.filter(u=>u._id === id);
        setUser(newUser[0])
    }
    useLayoutEffect(()=>{
        if(users.data){
            filterUser();
        }   
    },[users])

    useEffect(()=>{
        // console.log(user._id, id);
         if(user&& user?.work_history && user.work_history?.length){
                setWorkHistory(user.work_history)
        }
        if(user&& user?.study_project && user.study_project?.length){
                setStudyProject(user.study_project)
        }
        if(user&& user?.projects_given && user.projects_given?.length){
                console.log(user.project_given)
                setProjectGiven(user.projects_given)
        }

    },[user])

    const handleLogout = () =>{
        localStorage.removeItem('freelance');
        navigate('/');
    }

    


  return (
    <div className='student-profile'>
    {/* logout */}
    {user?._id== current?.user?._id  &&
    <div className='logout-btn text-end '>
        <button className="btn logout text-light" onClick={handleLogout}>Log Out</button>
      </div>
    
    }
        <div className="back" onClick={()=>navigate("/home")}>
        <Link>
            <i className="fa-sharp fa-solid fa-arrow-left"></i>
        </Link>
        </div>
        <Banner/>
        
        <ProfileBio  user={user} />
        {user?.user_type=='freelancer' &&
            <Skills skills={user?.skills}/>
        }
         {user?.user_type=='freelancer' &&
            <Domain domain={user?.domain}/>
        }

        {user?.admin_verify==false  &&
            work_history.length!=0 && user?.admin_verify==true &&
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
        }
     {user?.admin_verify==true &&
                <StudentProject project={studyProject} user={user}/> }
                {project_given.length!=0 &&
                    <ProjectHistory project={project_given} />
                }
    
    </div>
  )
}

