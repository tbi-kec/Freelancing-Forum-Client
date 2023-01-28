import React,{useState} from 'react'
import './ProfileCreation.css'
import profileTop from '../../assets/profile.png'
import profile from '../../assets/profileicon.png'
import { setAlert } from '../../actions/alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateProfile } from '../../actions/auth'

const ProfileCreation = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const constants = useSelector((state)=>(state.constantReducer))
    const [department,setDepartment]=useState("")
    const [personal_email,setPersonalMail]=useState("")
    const [skills,setskills]=useState([])
    const [name,setName]=useState("")
    const [level,setLevel]=useState("beginner")
    const [domain,setDomain]=useState([])
    const [domain_name,setDomainName]=useState("");
    const [currentDomain,setCurrentDomain]=useState("")
    const [description,setDescription]=useState("")
    const [payment_type,setPaymentType]=useState("")
    const [github,setGithub]=useState("")
    const [linkedin,setLinkedin]=useState("")
    
    const {user} = JSON.parse(localStorage.getItem("freelance"));
  
    const paymentTypes=[
        "Free",
        "Per Month",
        "Per Project",
        "Per Day",
        "Per Hour",
    ]
    
    const handleSkill = ()=>{
        if(level===""){
            dispatch(setAlert("Please select level","warning"));
            return;
        }
        if(skills.length>4){
            dispatch(setAlert("Only 5 skills can be given","warning"))
            return ;
        }
            setskills([...skills,{"name":name,"level":level}])
            setName("")
            setLevel("beginner")
    }   

    const handleDelete =(id)=>{
        const newSkills = skills.filter((s,idx)=>idx!==id)
        setskills([...newSkills])
    }
    const handleDomain = ()=>{
        if(currentDomain==="" && domain_name===""){
            dispatch(setAlert("Please select or give your other domain","warning"))
            return;
        }
        if(domain.length>2){
            dispatch(setAlert("Only 3 domains can be given","warning"))
            return ;
        }
        if(currentDomain!=="")
            setDomain([...domain,currentDomain])
        else if(domain_name!=='')
            setDomain([...domain,domain_name])
        setCurrentDomain("")
        setDomainName("")
    }

    const handleDeleteDomain =(id)=>{
        const newDomain = domain.filter((d,idx)=>idx!==id)
        setDomain([...newDomain])
    }
    const handleSubmit =async(e)=>{
        //const user =await JSON.parse( localStorage.getItem('freelance'))
        console.log(user)
        e.preventDefault()
        if(!skills.length && user.user_type=="freelancer"){
            dispatch(setAlert("Skills can't be empty","warning"))
            return
        }
        if(!domain.length  && user.user_type=='freelancer'){
            dispatch(setAlert("Domain's can't be empty","warning"))
            return
        }
        dispatch(setAlert("Creating Profile","info"))
        dispatch(updateProfile({id:user._id,department,personal_email,linkedin,github,skills,domain,description,payment_type},navigate))

    }
  return (
    <div className='profile-creation-container'>
        <div className="row">
            <div className="col-12 image-container">
                <img src={profileTop} alt="image-top" />
            </div>
        </div>
        <div className="container profile-form-container my-3">
            <div className="row">
                <div className="col-3 image-container">
                    <img src={profile} alt="profile-image" />
                </div>
                <div className="col-6 profile-form">
                    <form onSubmit={handleSubmit} >
                        <div className="form-group">
                            <select name="Department"  onChange={e=>setDepartment(e.target.value)}  placeholder='Department' className="form-select" required>
                                <option value="" diabled hidden selected>Department</option>
                                {constants.data && <>
                                {constants?.data[0]?.dept_short?.map(d=>(
                                    <option value={d.dept} key={d.dept}>{d.dept}</option>
                                ))}
                                </>
                                }
                            </select>
                        </div>
                        <div className="form-group ">
                            <input type="email" value={personal_email} onChange={e=>setPersonalMail(e.target.value)} placeholder='Perosnal Email Id' className='form-control' required />
                        </div>
                        {user?.user_type=="freelancer" &&
                        <>
                       
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
                                                <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder='Skill (Eg : C,React,CAD)' className='form-control' />
                                            </div>
                                    </div>
                                    <div className="col-5">
                                         <div className="form-group">
                                            <select name="level" className="form-select" defaultValue="beginner" onChange={e=>setLevel(e.target.value)}>
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
                                    
                                    <div className="col-6">
                                            <div className="form-group">
                                                <select name="domain" value={currentDomain} onChange={e=>setCurrentDomain(e.target.value)} className="form-select">
                                                    <option value="" diabled hidden selected>Domain Name</option>
                                                    {constants.data && <>
                                                    {constants?.data[0]?.domain?.map((d,idx)=>(
                                                        <option key={idx} value={d}>{d}</option>
                                                    ))}
                                                    </>}
                                                </select>
                                            </div>
                                    </div>
                                     <div className="col-4">
                                            <div className="form-group">
                                                <input type="text" value={domain_name} onChange={e=>setDomainName(e.target.value)} placeholder='Other Domain(if not in the list)' className='form-control' />
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
                                <option value="" diabled hidden selected>Payment Type</option>
                                {paymentTypes.map((d,idx)=>(
                                    <option key={idx} value={d}>{d}</option>
                                ))}
                            </select>
                        </div>              
                            </>
}    
                        <div className="form-group">
                            <textarea value={description} onChange={e=>setDescription(e.target.value)} className='form-control' placeholder='Tell us about yourself, "First Impression is the best impression"' cols="10" rows="3" required>
                               
                            </textarea>
                        </div>
                        <div className="form-group ">
                            <input type="url" value={github} onChange={e=>setGithub(e.target.value)} placeholder='Github Link' className='form-control' required />
                        </div>
                        <div className="form-group ">
                            <input type="url" value={linkedin} onChange={e=>setLinkedin(e.target.value)} placeholder='LinkedIn Link' className='form-control' required />
                        </div>
                        <div className='create-button-container'>
                             <button className='create-button btn btn-md my-3 '>Create</button>
                        </div>
                    </form>
                </div>
                <div className="col-3">

                </div>

            </div>
        </div>
    </div>
  )
}

export default ProfileCreation