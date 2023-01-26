import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import './AdminUserReport.scss'

const AdminUserReport = () => {
 const [depts,setDepts]=useState([]);
 const [role,setRole]=useState("")
 const [department,setDepartment]=useState("");
 const [rating,setRating]=useState(0)
 const user = useSelector((state)=>(state.userReducer))
 const [users,setUser] = useState([])
 const [table,setTable]=useState(false)
 useEffect(()=>{
    if(user!=null && user.data!=null){
        setUser(user.data)
    }
  },[user])

 const constants = useSelector((state)=>(state.constantReducer))
  const setDeptData = ()=>{
    const dept = constants.data[0].dept_short;
    setDepts([...dept])
  }
  const filterByRole = ()=>{
        const data= users.filter(u => u.user_type==role)
        setUser([...data])
  }
  const filterByDepartment = ()=>{
        const data = users.filter(u=> u.department==department)
        setUser([...data])
  }
  const filterByRating =()=>{
        const data = users.filter(u=> u.rating>= rating)
        setUser([...data])
  }
  useEffect(()=>{
    if(constants && constants.data ){
      setDeptData();
    }
  },[constants])
  useEffect(()=>{
    if(role!="" && role!='all')
        filterByRole()
  },[role])
  useEffect(()=>{
        if(department!="" && department!="all")
            filterByDepartment()
  },[department])
  useEffect(()=>{
        if(rating!=0){
            filterByRating()
        }
  },[rating])
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
    </div>
  )
}

export default AdminUserReport