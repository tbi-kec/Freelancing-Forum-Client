import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import UserAprprovalModal from "../../components/AdminModals/UserAprprovalModal";
import { Link,useNavigate } from 'react-router-dom';
import moment from 'moment';
import { setAlert } from '../../actions/alert';
import { acceptOrRejectUser } from '../../actions/admin';

const FreeLancerApproval = () => {
  const [users, setUsers] = useState(null)
  const [responded, setResponded] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const freelancers = useSelector((state) => (state.userReducer))
  const setData = () => {
    const data = freelancers.data.filter(f => f.admin_verify == false && f.user_type == 'freelancer')
    setUsers([...data])
  }
  useEffect(() => {
    if (freelancers && freelancers?.data != null) {
      setData();
    }
  }, [freelancers])

 const handleAcceptUser = (e, id) => {
  setResponded(true)
    e.preventDefault();
    dispatch(setAlert("Accepting freelancer","info"))
    dispatch(acceptOrRejectUser({u_id:id,status:"accepted",message:"accepted"},navigate))
    setResponded(false);
  }

  return (
      <div className='container mt-5 text-center'>
        <table className="table  table-stripped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Department</th>
              <th scope="col">Created On</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users == null || users.length == 0 ?
              <tr >
                <td className='py-5 fw-bold' colSpan="6">No User Request Found</td>
              </tr> : 
              users.map((u, i) => (
                <tr key={u._id}>
                  <th scope="row">{i + 1}</th>
                  <td><Link to={`/profile/${u._id}`}>{u.first_name} {u.last_name}</Link></td>
                  <td>{u.department}</td>
                  <td>{moment(u.created_on).calendar()}</td>
                  <td>
                  
                    <button disabled={responded} className='btn btn-success mx-3' onClick={e=>handleAcceptUser(e,u._id)}>Accept</button>
                   
                    <button disabled={responded} className='btn btn-danger mx-3' data-bs-toggle="modal" data-bs-target={`#toggle_model_user_approval-${u._id}`}>Reject</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
                  {
        users?.map((p, i) => {
          return (
            <UserAprprovalModal id={p._id} name={`${p.first_name}-${p.last_name}`} />
          )
        })
      }
      </div>
    

  )
}

export default FreeLancerApproval
