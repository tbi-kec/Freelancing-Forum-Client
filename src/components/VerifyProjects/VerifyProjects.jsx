import React,{useState} from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../Loading/Loading'
import moment from 'moment'
import { useSelector,DispatchProp,navigate, useDispatch} from 'react-redux'
import './VerifyProjects.scss'
import { updateStatus } from '../../actions/project'
import { setAlert } from '../../actions/alert'
const VerifyProjects = () => {
    const projects =  useSelector((state)=>(state.projectReducer))
    const [project,setProject]=useState([])
    const [responded,setResponded]=useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        if(projects && projects.data){
            const data = projects.data.filter(p=> p.project_status==='verify');
            setProject([...data])
        }
    },[projects])
    const handleAccept = (e,id)=>{
        e.prevntDefault();
        setResponded(true);
        dispatch(setAlert("Verifiying projet","info"))
        dispatch(updateStatus({status:3,p_id:id},navigate));
        setTimeout(()=> {setResponded(false)},3000)

    }
  return (
   <div>
      {responded===true && <Loading />}
      <div className='container mt-5 text-center'>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Project Name</th>
              <th scope="col">Client</th>
              <th scope="col">Freelancer</th>
              <th scope="col">Requested for Admin</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {project === null || project?.length === 0 ?
              <tr >
                <td className='py-5 fw-bold' colSpan="6">No Projects to be verified</td>
              </tr> : 
              project.map((p, i) => (
                <tr key={p._id}>
                  <th scope="row">{i + 1}</th>
                  <td><Link to={`/project/show/${p._id}`}  className="text-dark ">{p.title}</Link></td>
                  <td><Link to={`/profile/${p.createdBy._id}`} className="text-dark ">{p.createdBy.first_name} {p.createdBy.last_name}</Link></td>
                  <td><Link to={`/profile/${p.developer._id}`} className="text-dark ">{p.developer.first_name} {p.developer.last_name}<span className="badge bg-primary mx-3">{p.developer?.onbord_project?.length}</span></Link></td>
                  <td>{moment(p.verify_on).calendar()}</td>
                  <td>
                    <button className='btn btn-success mx-3' disabled={responded} onClick={e=>handleAccept(e,p._id)}>Verify</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
       
      </div>
       </div>
  )
}

export default VerifyProjects