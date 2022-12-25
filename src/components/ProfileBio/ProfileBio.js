import React, {useEffect, useState} from 'react'
import profile from '../../assets/profileicon2.png'
import assured from '../../assets/verified.png'
import './ProfileBio.css'
import { useSelector } from 'react-redux'
import starColor from '../../assets/Color-star.png'
import starDull from '../../assets/dull-star.png'
import { setAlert } from '../../actions/alert'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function ProfileBio({user}) {
    const current = useSelector((state)=>(state.currentUserReducer));
    const [projectGiven,setProjectGiven]=useState([])
    const [first_name,setFirstName]=useState('')
    const [last_name,setLastName]=useState("")
    const [mobile,setMobile]=useState()
    const [kongu_email,setEmail]=useState("")
    const navigate=useNavigate()
    const dispatch=useDispatch()
      const dept = [
      "Civil Engineering",
      "Mechanical Engineering",
      "Mechatronics Engineering",
      "Automobile Engineering",
      "Chemical Engineering",
      "Food Technology",
      "Electrical and Electronics Engineering",
      "Electronics and Instrumentation Engineering",
      "Electronics and Communication Engineering",
      "Computer Science and Engineering",
      "Information Technology",
      "Computer Science and Design",
      "Artificial Intelligence (AIML & AIDS)",
      "Management Studies",
      "Computer Application",
      "Computer Technology - UG",
      "Computer Technology - PG",
    ];
    const domains = [
        "Web Developer",
        "App Developer",
        "Full Stack Developer"
    ]
    const paymentTypes=[
        "Free",
        "Per Month",
        "Per Project",
        "Per Day",
        "Per Hour",
    ]
    const [department,setDepartment]=useState("")
    const [personal_email,setPersonalMail]=useState("")
    const [skills,setskills]=useState([])
    const [name,setName]=useState("")
    const [level,setLevel]=useState("")
    const [domain,setDomain]=useState([])
    const [currentDomain,setCurrentDomain]=useState("")
    const [description,setDescription]=useState("")
    const [payment_type,setPaymentType]=useState("")
    const handleSkill = ()=>{
        if(level===""){
            dispatch(setAlert("Please select level","warning"));
            return;
        }
            setskills([...skills,{"name":name,"level":level}])
            setName("")
            setLevel("")
    }   

    const handleDelete =(id)=>{
        const newSkills = skills.filter((s,idx)=>idx!=id)
        setskills([...newSkills])
    }
    const handleDomain = ()=>{
        setDomain([...domain,currentDomain])
        setCurrentDomain("")
    }

    const handleDeleteDomain =(id)=>{
        const newDomain = domain.filter((d,idx)=>idx!=id)
        setDomain([...newDomain])
    }

    const show_modal = () => {
        const modal = document.getElementById('toggle_model_button')
        modal.click()
      }

      const filterData = ()=>{
        const data = user?.projects_given?.filter(p=>p.project_status=="created");
        console.log(data)
        setProjectGiven([...data]);
      }
      useEffect(()=>{
            if(user?.projects_given){
                filterData();
            }
      },[user])
     
  return (
    
    <div className='student-card '>

    {/* model */}
    <div className="modal fade "  id="toggle_model" tabIndex="-1" role='dialog' aria-labelledby="exampleModalLabel" >
            <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content text-center ">
                <h2 className='my-3'>Edit Profile</h2>
                <div className='d-flex justify-content-center'>

                <form className='row g-2'>
                            <div className="form-group col-md-12 col-lg-6">
                                <input type="text" placeholder='First Name' className='form-control' value={first_name} onChange={e => setFirstName(e.target.value)} required />
                            </div>
                            <div className="form-group col-md-12 col-lg-6">
                                <input type="text" placeholder='Last Name' className='form-control' value={last_name} onChange={e => setLastName(e.target.value)} required />
                            </div>
                            <div className="form-group col-12">
                                <input type="tel" placeholder='Mobile' className='form-control' value={mobile} onChange={e => setMobile(e.target.value)} required />
                            </div>
                            <div className="form-group col-12">
                                <input type="email" placeholder='Kongu Email Id' className='form-control' value={kongu_email} onChange={e => setEmail(e.target.value)} required />
                            </div>
                            <div className="form-group">
                            <select name="Department" defaultValue={department} onChange={e=>setDepartment(e.target.value)}  placeholder='Department' className="form-select" required>
                                <option value="" diabled hidden selected>Department</option>
                                {dept.map(d=>(
                                    <option value={d} key={d}>{d}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group ">
                            <input type="email" value={personal_email} onChange={e=>setPersonalMail(e.target.value)} placeholder='Perosnal Email Id' className='form-control' required />
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <hr />
                                <div className="row skills-list mb-3">
                                    {skills.map((s,idx)=>(
                                        <div className={` skill-${s.level}  skill-container m-2`} key={idx}>
                                        <div>
                                            {s.name}
                                        </div>
                                        <div>
                                            <i onClick={()=>handleDelete(idx)} className="text-danger fa-solid fa-xmark"></i>
                                        </div>    
                                        </div>
                                    ))}
                                </div>
                                <div className="row" style={{display:"flex",alignItems:"center"}}>
                                    <div className="col-6">
                                             <div className="form-group ">
                                                <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder='Skill' className='form-control' />
                                            </div>
                                    </div>
                                    <div className="col-5">
                                         <div className="form-group">
                                            <select name="domain" className="form-select" onChange={e=>setLevel(e.target.value)}>
                                                <option value="" diabled hidden selected>Level</option>
                                                <option value="beginner" style={{background:"#81F664"}} className='form-option' >Beginner</option>
                                                <option value="intermediate" style={{background:"#F5E878"}} className=' py-3 form-option' >Intermediate</option>
                                                <option value="expert" style={{background:"#64CAF6"}} className=' py-3 form-option' >Expert</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <i className="text-success fa-solid  fa-plus" onClick={handleSkill} />
                                    </div>
                                </div>
                            </div>
                        </div>

                         <div className="card my-3">
                            <div className="card-body">
                                <hr />
                                <div className="row domain-list mb-3">
                                    {domain.map((d,idx)=>(
                                       <div key={idx} className=" domain-card m-3">
                                            <div>
                                                {d}
                                            </div>
                                            <div>
                                                 <i onClick={()=>handleDeleteDomain(idx)} className="text-danger fa-solid fa-xmark"></i>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="row" style={{display:"flex",alignItems:"center"}}>
                                    
                                    <div className="col-10">
                                            <div className="form-group">
                                                <select name="domain" value={currentDomain} onChange={e=>setCurrentDomain(e.target.value)} className="form-select">
                                                    <option value="" diabled hidden selected>Domain Name</option>
                                                    {domains.map((d,idx)=>(
                                                        <option key={idx} value={d}>{d}</option>
                                                    ))}
                                                </select>
                                            </div>
                                    </div>
                                    <div className="col-2">
                                        <i className="text-success fa-solid fa-plus " onClick={handleDomain} />
                                    </div>
                                </div>
                            </div>
                        </div>

                         <div className="form-group">
                            <select name="payment-types" defaultValue={payment_type} onChange={e=>setPaymentType(e.target.value)}   className="form-select" required>
                                <option value="" diabled hidden selected>Paymen Type</option>
                                {paymentTypes.map((d,idx)=>(
                                    <option key={idx} value={d}>{d}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea onChange={e=>setDescription(e.target.value)} className='form-control' placeholder='Description' cols="10" rows="3" required>
                               {description}
                            </textarea>
                        </div>
                            <div className="d-grid gap-2 ">
                                <button className="btn shadow ">Edit</button>
                            </div>
                        </form>
                </div>
                <input type='button' id='toggle_model_button' hidden data-bs-toggle="modal" data-bs-target="#toggle_model" />
            </div>
            </div>
        </div>
      
        <div className="profile">
        <div className="profile-head">
        <div className='prof' >
            <div className="profile-img me-4">
                <img src={profile} alt="" />
            </div> 
           <div className="profile-detail">
                <div className="student-name">
                    <h2>{user?.first_name}-{user?.last_name}</h2>   
                </div>
                
                <div className="student-role">
                           <h3>{user?.domain[0]}</h3>
                </div>
                    
            </div>
            </div>
            <div className="profile-dept">
              
                <div className="options d-flex align-items-center">
                    <div className="student-assured">
                        <img src={assured} alt="" />
                    </div>
                    {current?.user?._id===user?._id &&
                    <div className="edit " onClick={show_modal}>
                    <i class="fa-solid fa-pencil fs-5"></i>
                    <input type="button" hidden id='toggle_model_button' data-bs-toggle="modal" data-bs-target="#toggle_model" />
                    </div>}
                </div>    
                <div className="rating">
                                        {(
                        function () {
                            var rate=[]
                            for(let i=0;i<user?.rating;i++){
                            rate.push(<img src={starColor} alt='star' height='30px' />)
                            }
                            for(let j=0;j<5-user?.rating;j++){
                            rate.push(<img src={starDull} alt='star' height='25px' />)
                            }
                            return(
                            <div>
                            {rate}
                            </div>
                            )
                        }
                        ())}
                </div>    
            </div>
           
        </div>
        <div className="student-dept d-flex justify-content-between">
        <h4><i class="fa-solid fa-location-dot"></i>{user?.department}</h4>
        <div class="dropdown">
  <button class="btn  dropdown-toggle  " style={{backgroundColor:'#16226D', color:'white' }} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Request
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    {projectGiven?.map(p=>(
         <li><a class="dropdown-item" href="#" key={p._id}>{p.title}</a></li>
    ))}
    {/* <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li> */}
  </ul>
</div>
        </div>
        <div className="student-about">
            <h2 className='mb-3'>About </h2>
            <div> {user?.description} </div>

        </div>
        </div>
    </div>
    
  )
}
