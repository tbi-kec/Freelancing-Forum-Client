import React,{useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import './Home.css'
import profile from '../../assets/profileicon2.png'
import Notification from '../../components/homepage/Notification'
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import {Link,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react"
import moment from "moment";
import starColor from "../../assets/Color-star.png";
import starDull from "../../assets/dull-star.png";
import Footer from "../../components/Footer/Footer";
import { setAlert } from "../../actions/alert";


function Home() {
  const [navToggler, setNavToggler]=useState(true)
  const navigate=useNavigate()
  const project = useSelector((state)=>(state.projectReducer))
  const users = useSelector((state)=>(state.userReducer))
  const myself=useSelector((state)=>(state.myDetailsReducer))
  const constants=useSelector((state)=>(state.constantReducer));

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

  return (
    <div className="home-page-container">
      <Navbar />
      <div className="container mt-3">
        <div className="d-flex dashboard">
          {/* Profile */}
          <div className="d-flex flex-column flex-grow-1 profile-section my-4">
            <div className="d-flex flex-row my-3">
              <div className="profile-img-div">
                <div className="home-profile-img mr-3">
                  <img src={profile} alt="img" height='100%' width='100%' onClick={handleNavigate} />
                </div>
              </div>
              <div className="p-name pt-2 px-0 d-flex flex-column">
                <h3 className="name fs-3 font-weight-bold">{myself.data?.first_name} {myself.data?.last_name}</h3>
                <h3 className="domain fs-4 fs-md-5 my-2">{myself.data?.domain[0]}</h3>

                <div className="rating">
                  {(function () {
                    var rate = [];
                    for (let i = 0; i < myself.data?.rating; i++) {
                      rate.push(<img key={rate.length} src={starColor} alt="star" height="12px" />);
                    }
                    for (let j = 0; j < 5 - myself.data?.rating; j++) {
                      rate.push(<img key={rate.length} src={starDull} alt="star" height="10px" />);
                    }
                    return <div key={rate.length}>{rate}</div>;
                  })()}
                </div>
              </div>
            </div>

            <div className="d-flex flex-row my-3 home-profile-bottom">
              {/* Skills */}
                <div className="skill">
                  {myself.data?.skills.map(s=>(
                    <div className={`skillset px-2  my-3 skill-${s.level}`} key={s._id} >
                      <p>{s.name}</p>
                    </div>
                  ))}
              </div>
              {/* Projects */}
              <div className="flex-grow-1 current-project my-2">
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
            </div>
          </div>
          {/* Notification */}
          <div className="notification flex-grow-1  my-4">
            <div className="notifications-header">Notifications</div>
            <Notification />
            {notification.length!==0 ?
              <>
                {notification.map(n=>(
                  <Notification notification={n} key={n._id} />
                ))}
              </>

              :<h5 className="text-center py-5">No Notifications</h5>
            } 
          </div>
        </div>
      </div>

      <div className="container pb-5">
        {/* nav */}
        <div className="card shadow my-4">
          <div className="card-body">
            <div className="d-flex fs-6 fw-bold">
              <div className="mx-4 fs-5 active-toggle pointer" id="project" onClick={handleToggle}>Recent Projects</div>
              <div className="mx-4 fs-5 pointer" id="talent" onClick={handleToggle}>Top Talents</div>
            </div>
          </div>
        </div>
        {/* content  */}
        {navToggler ?
        <div>
          {
            project.data !== null &&
              project.data
              .slice(project.data.length-10,project.data.length)?.map(p=>(
                <ProjectCard project={p} constant={constants?.data[0]} key={p._id}/>
              ))
          }
        </div>  :
        <div className="my-5">
          {
            users.data !== null &&
              users.data
              .sort((a,b) => {return a.rating >b.rating ? -1 : 1})
              .slice(0,users.data.length > 10 ? 10 : users.data.length)?.filter(u=> u.admin_verify==true).map(u=>(
                <ProfileCard user={u} key={u._id} constant={constants?.data[0]}/>
              ))
          }
        </div>
        }
      </div>
      <Footer />
    </div>
  )
}

export default Home;
