import React,{useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import './Home.css'
import profile from '../../assets/profileicon2.png'
import DeptTitleCard from '../../components/homepage/DeptTitleCard'
import Notification from '../../components/homepage/Notification'
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import {Link,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react"
import moment from "moment";
import { setAlert } from "../../actions/alert";


function Home() {
  const [navToggler, setNavToggler]=useState(true)
  const navigate=useNavigate()
  const project = useSelector((state)=>(state.projectReducer))
  const users = useSelector((state)=>(state.userReducer))
  const myself=useSelector((state)=>(state.myDetailsReducer))
  const constants=useSelector((state)=>(state.constantReducer));
 const dispatch=useDispatch()
  // const [projects,setProjects]=useState()
  // useEffect(()=>{
  //     setProjects(project?.data)
  // },[project])

  const [onbord_project,setOnBoardProject] = useState([]);
  const [notification,setNotification]=useState([]);
  
  useEffect(()=>{
    
    if(myself.data && myself?.data?.onbord_project?.length){
      setOnBoardProject([...myself.data.onbord_project])
    }
    if(myself.data && myself?.data?.notification){
      setNotification([...myself.data.notification])
    }
  },[myself])
  const handleToggle = (e) =>{
    e.preventDefault()
    if(e.target.id==='project'){
      setNavToggler(true)
      e.target.classList.add('active-toggle')
      document.getElementById('talent').classList.remove('active-toggle')
    }else{
      setNavToggler(false)
      e.target.classList.add('active-toggle')
      document.getElementById('project').classList.remove('active-toggle')
    }
  }
  const handleNavigate = ()=>{
      navigate(`/profile/${myself.data._id}`)
  }
//  useEffect(()=>{
//     if(myself.data){
//       if(myself?.data?.admin_verify==false){
//         dispatch(setAlert("Wait untill Admin has verfie your account","info"))
//       }
//     }
//  },[myself])
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <div className='row dashboard-content' >
          <div className="col-lg-8 all-dept-container pt-4 pb-4 px-4">
            <div className="row">
              {constants.data && constants.data[0]?.dept_short?.map((d)=>(
                 <div className="col-sm-6 mt-2 " key={d._id}>
                    <Link to={`/user/${d.dept}`}>
                      <DeptTitleCard title={d.short} />
                    </Link>
              </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4 profile-right ">
            <div className="">
              <div className="col p-card p-3">
               <div className="row">
                  <div className="col-4 px-0 p-img">
                    <img src={profile} className='p-2' alt="img" height='100%' width='100%' onClick={handleNavigate} />
                  </div>
                  <div className="col-8 p-name pt-4 px-0">
                    <h3>{myself.data?.first_name}-{myself.data?.last_name}</h3>
                    <p>{myself.data?.domain[0]}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="skill d-flex justify-content-around">
                    {myself.data?.skills.map(s=>(
                      <div className={`skillset px-2  mt-2 skill-${s.level}`} key={s._id} >
                          <p>{s.name}</p>
                    </div>
                    ))}
          
                  </div>
                </div>

              </div>
              <div className="current-project my-2">
                 {onbord_project.length!==0 ?
                <>
                <div className="current-project-header my-2">
                     <h4 className='mb-0 ms-2 '>Current Project</h4>
                       <hr className='mt-1 ms-2' />
                    </div>
                  {onbord_project.map(p=>(
                  <div className="current-project-title my-2 me-4" key={p._id}>
                     <p className="mb-0 ms-2"><Link to={`/project/show/${p._id}`}>{p.title}</Link></p>
                     <div className="d-flex justify-content-between">
                      <p className="mb-0 ms-2">{p.createdBy==myself.data?._id?('Provided '):(`End on: ${moment(p.end_date).fromNow()}`)}</p>
                      <p className="mb-0 ms-2">Status : {p.project_status}</p>
                     </div>
                       <hr className='mt-1 ms-2' />
                    </div>
                    ))}
                     </>
                    
                 :<h5 className="text-center  py-5 mt-2">No Projects</h5>
              } 
              
              </div>
              <div className="notification py-2 px-1">

              {notification.length!==0 ?
                <>
                      {notification.map(n=>(
                          <Notification notification={n} key={n._id} />
                    ))}
                     </>
                    
                 :<h5 className="text-center  py-5 ">No Notifications</h5>
              } 

              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="container pb-5">
        {/* nav */}
        <div className="card shadow my-4">
          <div className="card-body">
            <div className="d-flex fs-6 fw-bold">
              <div className="mx-4 fs-5 active-toggle pointer" id="project" onClick={handleToggle}>Projects</div>
              <div className="mx-4 fs-5 pointer" id="talent" onClick={handleToggle}>Talents</div>
            </div>
          </div>
        </div>
        {/* content  */}
        {navToggler ?
        <div>
         {project.data?.map(p=>(
          <ProjectCard project={p} constant={constants?.data[0]} key={p._id}/>
         ))}
        </div>  :
        <div className="my-5">
        {users.data?.map(u=>(
          <ProfileCard user={u} key={u._id} constant={constants?.data[0]}/>
        ))}
        </div>
        }
      </div>
    </div>
  )
}

export default Home;
