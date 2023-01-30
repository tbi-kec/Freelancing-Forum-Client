import React, {useEffect, useState} from 'react';
import { setAlert } from '../../actions/alert';
import { useDispatch,useSelector } from 'react-redux';
import { editProfile } from '../../actions/myDetails';
import { useNavigate } from 'react-router-dom';
import './EditProfile.scss'

function EditProfile({handleClick}) {
    const user = useSelector((state)=>(state.myDetailsReducer))
    const constants = useSelector((state)=>(state.constantReducer))
    const navigate = useNavigate();
    const dispatch=useDispatch();
   const paymentTypes=[
          "Free",
          "Per Month",
          "Per Project",
          "Per Day",
          "Per Hour",
      ]
    const [first_name,setFirstName]=useState("")
    const [last_name,setLastName]=useState("")
    const [mobile,setMobile]=useState("")
    const [personal_email,setPersonalMail]=useState("")
      const [skills,setskills]=useState([])
      const [name,setName]=useState("")
      const [level,setLevel]=useState("beginner")
      const [domain,setDomain]=useState([])
      const [currentDomain,setCurrentDomain]=useState("")
      const [description,setDescription]=useState("")
      const [payment_type,setPaymentType]=useState("")
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
          const newSkills = skills.filter((s,idx)=>idx!=id)
          setskills([...newSkills])
      }
      const handleDomain = ()=>{
        if(domain.length>2){
            dispatch(setAlert("Only 3 domains can be given","warning"))
            return ;
        }
          setDomain([...domain,currentDomain])
          setCurrentDomain("")
      }
  
      const handleDeleteDomain =(id)=>{
          const newDomain = domain.filter((d,idx)=>idx!=id)
          setDomain([...newDomain])
      }
      useEffect(()=>{
            if(user?.data){
                setFirstName(user?.data.first_name)
                setLastName(user?.data.last_name)
                setMobile(user?.data.mobile)
                setPersonalMail(user?.data.personal_email)
                setskills([...user.data.skills])
                setDomain([...user.data.domain])
                setDescription(user?.data.description)
                setPaymentType(user?.data.payment_type)
            }
        },[user])

    const handleSubmit =async(e)=>{
       
        e.preventDefault()

        if(!skills.length){
            dispatch(setAlert("Skills can't be empty","warning"))
            return
        }
        if(!domain.length){
            dispatch(setAlert("Domain's can't be empty","warning"))
            return
        }
        dispatch(setAlert("Editing profile","info"))
       
        dispatch(editProfile({id:user.data?._id,first_name,last_name,mobile,personal_email,skills,domain,description,payment_type},navigate))
        handleClick();
    }

  return (
    <div className='edit-profile-container card'>
                <h2 className='my-3'>Edit Profile</h2>
                <div className='d-flex justify-content-center card-body'>

                <form className='row g-2' onSubmit={handleSubmit}>
                            <div className="form-group col-md-12 col-lg-6">
                                <input type="text" placeholder='First Name' className='form-control' value={first_name} onChange={e => setFirstName(e.target.value)} required />
                            </div>
                            <div className="form-group col-md-12 col-lg-6">
                                <input type="text" placeholder='Last Name' className='form-control' value={last_name} onChange={e => setLastName(e.target.value)} required />
                            </div>
                            <div className="form-group col-12">
                                <input type="tel" placeholder='Mobile' className='form-control' value={mobile} onChange={e => setMobile(e.target.value)} required />
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
                                            <select defaultValue={level} name="skills-level"  className="form-select" onChange={e=>setLevel(e.target.value)}>
                                                <option value="" disabled hidden selected>Level</option>
                                                <option value="beginner" style={{background:"#81F664",color:"white"}} className='form-option' >Beginner</option>
                                                <option value="intermediate" style={{background:"#F5E878",color:"white"}} className=' py-3 form-option' >Intermediate</option>
                                                <option value="expert" style={{background:"#64CAF6",color:"white"}} className=' py-3 form-option' >Expert</option>
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
                                                <select name="domain" defaultvalue={currentDomain} onChange={e=>setCurrentDomain(e.target.value)} className="form-select">
                                                    <option value="" disabled hidden selected>Domain Name</option>
                                                    {constants.data && <>
                                                     {constants?.data[0]?.domain?.map((d,idx)=>(
                                                        <option key={idx} value={d}>{d}</option>
                                                    ))}
                                                    </>
                                                     }
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
                            <select name="payment-types"  onChange={e=>setPaymentType(e.target.value)}   className="form-select" required>
                                <option value="" disabled hidden selected>Paymen Type</option>
                                {paymentTypes.map((d,idx)=>(
                                    <option key={idx} selected={payment_type==d} value={d}>{d}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea value={description} onChange={e=>setDescription(e.target.value)} className='form-control' placeholder='Description' cols="10" rows="3" required>
                               
                            </textarea>
                        </div>
                            <div className="d-grid gap-2 ">
                                <button className="btn shadow ">Edit</button>
                        </div>
                </form>
            </div>
    </div>
  )
}

export default EditProfile