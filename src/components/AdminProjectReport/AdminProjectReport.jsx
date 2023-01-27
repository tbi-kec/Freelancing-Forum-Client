import React,{useState} from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
  const setDeptData = ()=>{
    const dept = constants.data[0].dept_short;
    setDepts([...dept])
  }

  useEffect(()=>{
    if(constants && constants.data){
      setDeptData();
    }
  },[constants])


 
  const [projects,setProjects]=useState([])
  const project = useSelector((state)=>(state.adminReducer))
  const getReport=async(e)=>{
    e.preventDefault();
  }
  const filterByFromDate=()=>{
      const data=projects.filter(p => p.created_on >= fromdate )
      setProjects([...data])
  }
  const filterByEndDate = ()=>{
      const data = projects.filter(p => p.created_on <= endDate)
      setProjects([...data])
  }
  const filterByStatus = ()=>{
      const data = projects.filter(p=>p.project_status==status)
      setProjects([...data])
  }
  const filterByClientDept = ()=>{
    const data = projects.filter(p => p.createdBy.department == clientDept)
    setProjects([...data])
  }
  const filterByFreelanceDept = () =>{
      const data = projects.filter(p => p?.developer?.department==freelancerDept)
      setProjects([...data])
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
        setClient(true)
      }else{
        
        setFreelance(true)
      }
      if(status!='all')

        filterByStatus();
  },[status])

  useEffect(()=>{
      if(clientDept!=null && clientDept!='all'){
        setFreelance(false)
        filterByClientDept();
      }else{
        setFreelance(true)
      }
  },[clientDept])

  useEffect(()=>{
      if(freelancerDept!=null && freelancerDept!='all'){
        setClient(false)
        filterByFreelanceDept();
      }else{
        setClient(true)
      }
  },[freelancerDept])

  useEffect(()=>{
    if(project && project.data){
      setProjects([...project.data])
    }
  },[project])


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
                      <button onClick={()=>navigate('/admin/project/report')} className='btn btn-primary mx-3'>Reset</button>
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