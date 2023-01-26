import React,{useState} from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './AdminProjectReport.scss'
const AdminProjectReport = () => {
  
  const [fromdate,setFromDate]=useState()
  const [endDate,setEndDate]=useState()
  const [clientDept,setClientDept]=useState()
  const [freelancerDept,setFreelancerDept]=useState()
  const [status,setStatus]=useState("");
  const [client,setClient]=useState(true)
  const [freelance,setFreelance]=useState(true)
  const constants = useSelector((state)=>(state.constantReducer))
  const [depts,setDepts]=useState([]);
  const setDeptData = ()=>{
    const dept = constants.data[0].dept_short;
    setDepts([...dept])
   
  }
  useEffect(()=>{
    if(constants && constants.data){
      setDeptData();
    }
  },[constants])
 
  const [projects,setProjects]=useState()
  const project = useSelector((state)=>(state.adminReducer))
  const getReport=async(e)=>{
    e.preventDefault();
  }
  const filterByFromDate=()=>{

  }
  const filterByEndDate = ()=>{

  }
  const filterByStatus = ()=>{

  }
  const filterByClientDept = ()=>{

  }
  const filterByFreelanceDept = () =>{

  }
  useEffect(()=>{
      if(fromdate!=null)
        filterByFromDate();
  },[fromdate])

  useEffect(()=>{
    if(endDate!=null)
      filterByEndDate();
  },[endDate])

  useEffect(()=>{
      if(status=='created'){
        setFreelance(false);
      }
      if(status!='all')
        filterByStatus();
  },[status])

  useEffect(()=>{
      if(clientDept!=null && clientDept!='all'){
        filterByClientDept();
      }
  },[clientDept])

  useEffect(()=>{
      if(freelancerDept!=null && clientDept!='all'){
        filterByFreelanceDept();
      }
  },[freelancerDept])


  const project_status = ['all','created','pending-admin','pending-user','assigned','partial','testing','completed']
  return (
    <div className='admin-project-report-container'>
      <div className="container">
        <div className="row">
            <div className="col-12 card shadow my-5">
                <div className="card-body">
                  <p className='text-center fs-3'>KEC EMDC'S FREELANERS FORUM</p>
                  <form className="row">
                    <div className="col-4 my-3">
                      <label  className="form-label">From Date</label>
                       <input type="date" className="form-control" value={fromdate} onChange={e=>setFromDate(e.target.value)} />
                    </div>
                    <div className="col-4 my-3">
                      <label  className="form-label">End Date</label>
                       <input type="date" className="form-control" value={endDate} onChange={e=>setEndDate(e.target.value)} />
                    </div>
                    <div className="col-4 my-3">
                      <label className="form-label">Project Status</label>
                      <select onChange={e=>setStatus(e.target.value)} className='form-select'>
                        <option value="" disabled hidden selected>Select One</option>
                        {project_status.map((p,i)=>(
                          <option key={i} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                    {client==true &&
                     <div className="col-4 my-3">
                      <label className="form-label">Client Department(choose any one)</label>
                      <select onChange={e=>setClientDept(e.target.value)} className='form-select'>
                         <option value="all">All</option>
                        {depts.map(d=>(
                          <option key={d._id} value={d.dept}>{d.dept}</option>
                        ))}
                      </select>
                    </div>
                    }
                    {freelance==true &&
                    <div className="col-4 my-3">
                      <label className="form-label">Freelancer Department(choose any one)</label>
                      <select onChange={e=>setFreelancerDept(e.target.value)} className='form-select'>
                        <option value="all">All</option>
                        {depts.map(d=>(
                          <option key={d._id} value={d.dept}>{d.dept}</option>
                        ))}
                      </select>
                    </div>
                    }
                    <div className="d-flex justify-content-end">
                      <button onClick={getReport} className='btn btn-success btn-md'>Get Report</button>
                    </div>
                  </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProjectReport