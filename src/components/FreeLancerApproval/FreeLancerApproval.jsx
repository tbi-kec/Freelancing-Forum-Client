import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import UserAprprovalModal from "../../components/AdminModals/UserAprprovalModal";
import RequestModal from "../../components/AdminModals/RequestModal";
const FreeLancerApproval = () => {
  const [users, setUsers] = useState(null)
  const freelancers = useSelector((state) => (state.userReducer))
  const setData = () => {
    const data = freelancers.data.filter(f => f.admin_verify == 'false' && f.user_type == 'freelancer')
    setUsers([...data])
  }
  useEffect(() => {
    if (freelancers?.data != null) {
      setData();
    }
  }, [freelancers])
  // if (users == null)
  //   return <h1>Loading...</h1>
  /*
  name
  department
  created date
  accept/reject
   */
  return (
    <>
      {/* userApproval model */}
      {
        users?.map((p, i) => {
          return (
            <UserAprprovalModal id={p._id} name={`${p.first_name}-${p.last_name}`} />
          )
        })
      }
      <div className='container mt-5 text-center'>
        <table class="table table-hover table-stripped">
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
                  <td>{u.first_name} {u.last_name}</td>
                  <td>{u.created_on}</td>
                  <td>
                    <button className='btn btn-success'>Accept</button>
                    <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target={`#toggle_model_user_approval-${u._id}`}>Reject</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

      </div>
    </>

  )
}

export default FreeLancerApproval
