import React, { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux'
import './AdminUserReport.scss'
import {Link} from 'react-router-dom'
import { DownloadTableExcel } from "react-export-table-to-excel";

const AdminUserReport = () => {
 const [depts,setDepts]=useState([]);
 const [role,setRole]=useState("")
 const [department,setDepartment]=useState("");
 const [rating,setRating]=useState("")
 const user = useSelector((state)=>(state.userReducer))
 const [users,setUser] = useState([])
 const [table,setTable]=useState(false)
 const tableRef = useRef(null)
 useEffect(()=>{
    if(user!==null && user.data!==null){
        setUser(user.data)
    }
  },[user])

 const constants = useSelector((state)=>(state.constantReducer))
 
 
 
 
  useEffect(()=>{
    if(constants && constants.data ){
       const setDeptData = ()=>{
        const dept = constants.data[0].dept_short;
        setDepts([...dept])
      }
      setDeptData();
    }
  },[constants,constants.data])
  useEffect(()=>{
    if(role!=="" && role!=='all'){
       const filterByRole = ()=>{
          const data= users.filter(u => u.user_type===role)
          setUser([...data])
    }
        filterByRole()
    }
  },[role,users])
  useEffect(()=>{
        if(department!=="" && department!=="all"){
            const filterByDepartment = ()=>{
                const data = users.filter(u=> u.department===department)
              setUser([...data])
      }
            filterByDepartment()
        
    }
  },[department,users])
  useEffect(()=>{
        if(rating!==0){
           const filterByRating =()=>{
            const data = users.filter(u=> u.rating>= rating)
           setUser([...data])
        }
            filterByRating()
        }
  },[rating,users])
  const resetData=()=>{
    setUser([...user.data])
    setRole("")
    setDepartment("")
    setRating(0)
  }
  
const getReport = (e)=>{
    e.preventDefault();
    setTable(true)
}
  const user_roles = ['all','client','freelancer']
const styles = {
    display:!table?'none':"block",
  }
  return (
    <div className="admin-user-report">
        <div className="container">
            <div className="row">
                <div className="col-12 col-12 card shadow my-5">
                    <div className="card-body">
                    <p className='text-center fs-3'>KEC EMDC'S FREELANERS FORUM</p>
                        <form className="row">
                            <div className="col-4 form-group mb-3">
                                <select onChange={e=>setRole(e.target.value)}  className="form-select">
                                    <option value="" hidden selected disabled>Select User Type</option>
                                    {user_roles.map((u,i)=>(
                                        <option value={u} key={i}>{u}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-4 form-group mb-3">
                                <select onChange={e=>setDepartment(e.target.value)} className="form-select">
                                    <option value="" hidden selected disabled>Select Department</option>
                                    <option value="all">All</option>
                                    {depts.map((d,i)=>(
                                        <option value={d.dept} key={d._id}>{d.dept}</option>
                                    ))}
                                </select>
                            </div>
                             <div className="col-4 form-group mb-3">
                                <input className='form-control'placeholder="FIlter By Rating(0-5)" value={rating} onChange={e=>setRating(e.target.value)} type="number" maxLength={5} minLength={0}  />
                            </div>
                            <div className="d-flex justify-content-end">
                                <button className='btn btn-primary mx-5' onClick={resetData}>Reset</button>
                                <button className='btn btn-success' onClick={getReport}>Get Report</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       
        <div style={styles}>
        <div className="container text-end">
        <DownloadTableExcel
                    filename="Freelancing Forum Report"
                    sheet="Report"
                    currentTableRef={tableRef.current} >
                    <button className="btn download-excel"> Export Excel </button>
        </DownloadTableExcel>
        </div>
        <div className='container mt-5 text-center'>
        <table class="table table-stripped" ref={tableRef}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User</th>
              <th scope="col">Type</th>
              <th scope="col">Department</th>
              <th scope="col">Mobile</th>
              <th scope="col">Rating</th>
            </tr>
          </thead>
          <tbody>
            {users === null || users.length === 0 ?
              <tr >
                <td className='py-5 fw-bold' colSpan="6">No User Found</td>
              </tr> : 
              users.map((u, i) => (
                <tr key={u._id}>
                  <th scope="row">{i + 1}</th>
                  <td><Link to={`/profile/${u._id}`}  className="text-dark ">{u.first_name} {u.last_name}</Link></td>
                  <td>{u.user_type}</td>
                  <td>{u.department}</td>
                  <td>{u.mobile}</td>
                  <td>{u.rating}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
</div>
    </div>
              
  )
}

export default AdminUserReport