import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './AdminProjectReport.scss'
import {Link} from 'react-router-dom'
import { DownloadTableExcel } from "react-export-table-to-excel";

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
  const [table,setTable]=useState(false)
  const reportTableRef = useRef(null)
  const navigate = useNavigate()
 

  useEffect(()=>{
    if(constants && constants.data){
       const setDeptData = ()=>{
        const dept = constants.data[0].dept_short;
        setDepts([...dept])
      }
      setDeptData();
    }
  },[constants])


 
  const [projects,setProjects]=useState([])
  const project = useSelector((state)=>(state.adminReducer))
  const getReport=async(e)=>{
    e.preventDefault();
    setTable(true)
  }
 


  useEffect(()=>{
      if(fromdate!==null){
         const filterByFromDate=()=>{
           const data=projects.filter(p => p.created_on >= fromdate )
            setProjects([...data])
        }
        filterByFromDate();
      }
  },[fromdate,projects])

  useEffect(()=>{
    if(endDate!==null){
        const filterByEndDate = ()=>{
          const data = projects.filter(p => p.created_on <= endDate)
          setProjects([...data])
      }
      filterByEndDate();
    }
  },[endDate,projects])

  useEffect(()=>{
      if(status==='created'){
        setFreelance(false);
        setClient(true)
      }else{
        
        setFreelance(true)
      }
      if(status!=='all'){
        const filterByStatus = ()=>{
          const data = projects.filter(p=>p.project_status===status)
            setProjects([...data])
       }
        filterByStatus();
      }
  },[status,projects])

  useEffect(()=>{
      if(clientDept!==null && clientDept!=='all'){
        setFreelance(false)
                
        const filterByClientDept = ()=>{
          const data = projects.filter(p => p.createdBy.department === clientDept)
          setProjects([...data])
        }
        filterByClientDept();
      }else{
        setFreelance(true)
      }
  },[clientDept,projects])

  useEffect(()=>{
      if(freelancerDept!==null && freelancerDept!=='all'){
        setClient(false)
        
        const filterByFreelanceDept = () =>{
            const data = projects.filter(p => p?.developer?.department===freelancerDept)
            setProjects([...data])
        }
        filterByFreelanceDept();
      }else{
        setClient(true)
      }
  },[freelancerDept,projects])

  useEffect(()=>{
    if(project && project.data){
      setProjects([...project.data])
    }
  },[project])
  const styles = {
    display:!table?'none':"block",
  }
  
  const project_status = ['all','created','pending-admin','pending-user','assigned','partial','testing','completed']
  return (
    <div className='admin-project-report-container pb-5'>
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
                    {client===true &&
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
                    {freelance===true &&
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
      <div style={styles}>
      <div className="container text-end" >
        <DownloadTableExcel
                    filename="Freelancing Forum Report"
                    sheet="Report"
                    currentTableRef={reportTableRef.current} >
                    <button className="btn download-excel"> Export Excel </button>
        </DownloadTableExcel>
        </div>
        <div className='container mt-5 text-center'>
        <table class="table table-stripped" ref={reportTableRef}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Project</th>
              <th scope="col">Freelancer</th>
              <th scope="col">Client</th>
              <th scope="col">Stipend(₹)</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {projects === null || projects.length === 0 ?
              <tr >
                <td className='py-5 fw-bold' colSpan="6">No User Found</td>
              </tr> : 
              projects.map((p, i) => (
                <tr key={p._id}>
                  <th scope="row">{i + 1}</th>
                  <td><Link to={`/project/show/${p._id}`}  className="text-dark ">{p.title}</Link></td>
                  {p.developer==null ?
                    <td> - </td> :
                    <td><Link to={`/profile/${p.developer._id}`}  className="text-dark">{p.developer.first_name} {p.developer.last_name}</Link></td>
                  }
                  <td><Link to={`/profile/${p.createdBy._id}`}  className="text-dark">{p.createdBy.first_name} {p.createdBy.last_name}</Link></td>
                  <td>{p.stipend}</td>
                  <td>{p.project_status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      </div>
      </div>

  
  )
}

export default AdminProjectReport