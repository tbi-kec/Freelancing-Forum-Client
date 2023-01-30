import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import jsPDF from "jspdf";
import Navbar from "../../components/Navbar/Navbar";
import "./AdminPage.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { respondToRequest } from "../../actions/admin";
import { setAlert } from "../../actions/alert";
import moment from "moment";
import UserAprprovalModal from "../../components/AdminModals/UserAprprovalModal";
import RequestModal from "../../components/AdminModals/RequestModal";
import { acceptOrRejectUser } from "../../actions/admin";

function AdminPage() {
  const [nav, setNav] = useState('approval');
  const [project, setProject] = useState([]);
  const [request, setRequest] = useState([]);
  const [progress, setProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const projects = useSelector((state) => (state.adminReducer));
  const [requestedUsers, setRequestedUsers] = useState([]);
  const users = useSelector((state) => (state.userReducer));
  useLayoutEffect(() => {
    if (projects && projects.data) {
      setProject([...projects.data])
    }
  }, [projects])
  useLayoutEffect(() => {
    if (users.data) {
      const data = users?.data.filter(u => u.admin_verify == false && u.user_type == 'freelancer');
      setRequestedUsers([...data]);
    }
  }, [users])

  useEffect(() => {
    if (project.length != 0) {
      const requests = project.filter(p => p.project_status === "pending-admin")
      setRequest([...requests])
      const progresses = project.filter(p => p.project_status === "pending-user" || p.project_status === 'assigned' || p.project_status === 'partial' || p.project_status === 'testing')
      setProgress([...progresses])
      const complete = project.filter(p => p.project_status === "completed")
      setCompleted([...complete])
    }
  }, [project])
  useEffect(() => {
    if (startDate != null && endDate != null) {
      const complete = completed.filter(p => p.completed_on >= startDate && p.completed_on <= endDate)
      setCompleted([...complete])
    }

  }, [startDate, endDate])


  const handleNavigation = (e) => {
    if (e.target.id === 'approval') {
      setNav(e.target.id)
      document.getElementById(e.target.id).classList.add('admin-nav-ative')
      document.getElementById('request').classList.remove('admin-nav-ative')
      document.getElementById('progress').classList.remove('admin-nav-ative')
      document.getElementById('completed').classList.remove('admin-nav-ative')
    }
    else if (e.target.id === 'request') {
      setNav(e.target.id)
      document.getElementById(e.target.id).classList.add('admin-nav-ative')
      document.getElementById('approval').classList.remove('admin-nav-ative')
      document.getElementById('progress').classList.remove('admin-nav-ative')
      document.getElementById('completed').classList.remove('admin-nav-ative')
    }
    else if (e.target.id === 'progress') {
      setNav(e.target.id)
      document.getElementById(e.target.id).classList.add('admin-nav-ative')
      document.getElementById('request').classList.remove('admin-nav-ative')
      document.getElementById('approval').classList.remove('admin-nav-ative')
      document.getElementById('completed').classList.remove('admin-nav-ative')
    }
    else {
      setNav(e.target.id)
      document.getElementById(e.target.id).classList.add('admin-nav-ative')
      document.getElementById('approval').classList.remove('admin-nav-ative')
      document.getElementById('request').classList.remove('admin-nav-ative')
      document.getElementById('progress').classList.remove('admin-nav-ative')
    }
  }

  const handleAccpet = (e, id) => {
    e.preventDefault();
    dispatch(setAlert("Accepting Project", "info", 2000))
    dispatch(respondToRequest({ status: "accepted", p_id: id }, navigate))
  }

  const handleReject = (e, id) => {
    e.preventDefault();
    dispatch(setAlert("Rejecting Project", "info", 2000))
    dispatch(respondToRequest({ status: "created", p_id: id }, navigate))

  }

  const generatePDF = () => {
    var doc = new jsPDF();
    doc.html(document.querySelector('#table-complete'), {
      callback: function (pdf) {
        var pageCount = doc.internal.getNumberOfPages()
        pdf.deletePage(pageCount)
        pdf.save("Freelancing Forum Report.pdf")
      }
    })
  }

  const tableRef = useRef(null)
  const handleAccpetUser = (e, id) => {
    e.preventDefault();
    dispatch(setAlert("Accepting freelancer","info"))
    dispatch(acceptOrRejectUser({u_id:id,status:"accepted",message:"accepted"},navigate))
  }
 

  return (
    <div>
      <Navbar />
      <div className="admin-nav mb-4" style={{ background: "white" }}>
        <div className="d-flex justify-content-between align-items-center " key={1}>
          <div className="mx-auto fw-bold py-4 px-5 pointer  pointer-nav admin-nav-ative" id="approval" onClick={handleNavigation}>User Approval</div>
          <div className="mx-auto fw-bold py-4 px-5 pointer  pointer-nav" id="request" onClick={handleNavigation}>Request</div>
          <div className="mx-auto fw-bold py-4 px-5 pointer pointer-nav" id="progress" onClick={handleNavigation}>Progress</div>
          <div className="mx-auto fw-bold  py-4 px-5 pointer  pointer-nav" id="completed" onClick={handleNavigation}>Completed</div>
        </div>
      </div>

    
        <div className="container" key={"user-nav"}>
          {/* userApproval model */}
          {
            requestedUsers?.map((p,i) =>{
              return(
                <UserAprprovalModal id={p._id} name={`${p.first_name}-${p.last_name}`}/>
              )
            })
          }


          {/* userApproval */}
          {nav === 'approval' &&
            <table className="table" key={"user-admin-table-1"}>
              <thead key={"user-admin-table-123"}>
                <tr key={"user-admin-table-1-header-col-1"} >
                  <th scope="col">#</th>
                  <th scope="col">Freelancer</th>
                  <th scope="col">Accept</th>
                  <th scope="col">Reject</th>
                </tr>
              </thead>
              <tbody>
                {requestedUsers?.map((p, i) => {
                  return (
                      <tr key={p._id}>
                        <th scope="row">{i + 1}</th>
                        <td onClick={() => navigate(`/profile/${p._id}`)} >{p.first_name}-{p.last_name}</td>
                        <td><button className="btn btn-outline-success" onClick={(e) => handleAccpetUser(e, p._id)}>Accept</button></td>
                        <td><button className="btn btn-outline-danger"  data-bs-toggle="modal" data-bs-target={`#toggle_model_user_approval-${p._id}`}>Reject</button></td>
                      </tr>
                  )
                })}
              </tbody>
          </table>
          }

          {/* request model */}
          
          {
            request.map((p,i)=>{
            return(
              <RequestModal id={p._id}/>
            )
          })}


          {/* Request */}
          {nav === 'request' &&
            <table className="table">
              <thead>
                <tr >
                  <th scope="col">#</th>
                  <th scope="col">Sender</th>
                  <th scope="col">Receiver</th>
                  <th scope="col">Project</th>
                  <th scope="col">Accept</th>
                  <th scope="col">Reject</th>
                </tr>
              </thead>
              <tbody>
                {request.map((p, i) => {
                  return (
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td onClick={() => navigate(`/profile/${p.createdBy._id}`)} >{p.createdBy.first_name}-{p.createdBy.last_name}</td>
                      <td onClick={() => navigate(`/profile/${p.developer._id}`)} >{p.developer.first_name}-{p.developer.last_name}</td>
                      <td onClick={() => navigate(`/project/show/${p._id}`)} >{p.title}</td>
                      <td><button className="btn btn-outline-success" onClick={(e) => handleAccpet(e, p._id)}>Accept</button></td>
                      <td><button className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target={`#toggle_model_project_request-${p._id}`} onClick={(e) => handleReject(e, p._id)}>Reject</button></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          }

          {/* progress */}
          {nav === 'progress' &&
            <table className="table">
              <thead>
                <tr >
                  <th scope="col">#</th>
                  <th scope="col">Sender</th>
                  <th scope="col">Receiver</th>
                  <th scope="col">Project</th>
                  <th scope="col">Assigned Date</th>
                  <th scope="col">Status</th>

                </tr>
              </thead>
              <tbody>
                {progress.map((e, i) => {
                  return (
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td onClick={() => navigate(`/profile/${e.createdBy._id}`)} >{e.createdBy.first_name}-{e.createdBy.last_name}</td>
                      <td onClick={() => navigate(`/profile/${e.developer._id}`)}>{e.developer.first_name}-{e.developer.last_name}</td>
                      <td onClick={() => navigate(`/project/show/${e._id}`)} >{e.title}</td>
                      <td>{moment(e.created_on).format('DD-MM-YYYY')}</td>
                      <td>{e.project_status}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          }

          {/* completed */}
          {nav === 'completed' &&
            <div>
              <div className="row my-5">
                <div className="col-md-3  px-5 d-flex align-items-center ">
                  <label className="fw-bold me-3">From:</label>
                  <input type="date" className="form-control" onChange={(e) => setStartDate(e.target.value)} value={startDate} />
                </div>
                <div className="col-md-3 px-5 d-flex align-items-center ">
                  <label className="fw-bold me-3">To:</label>
                  <input type="date" className="form-control" onChange={(e) => setEndDate(e.target.value)} value={endDate} />
                </div>
                <div className="col-md-3">
                  <DownloadTableExcel
                    filename="Freelancing Forum Report"
                    sheet="Report"
                    currentTableRef={tableRef.current}
                  >
                    <button className="btn download-excel"> Export Excel </button>
                  </DownloadTableExcel>
                </div>
                <div className="col-md-3">
                  <button className="btn download-excel" onClick={generatePDF}>Export PDF</button>
                </div>

              </div>
              <table className="table" ref={tableRef} id='table-complete' >
                <thead>
                  <tr >
                    <th scope="col">#</th>
                    <th scope="col">Sender</th>
                    <th scope="col">Receiver</th>
                    <th scope="col">Project</th>
                    <th scope="col">Assigned Date</th>
                    <th scope="col">Completed Date</th>

                  </tr>
                </thead>
                <tbody>
                  {completed.map((e, i) => {
                    return (
                      <tr>
                        <th scope="row">{i + 1}</th>
                        <td onClick={() => navigate(`/profile/${e.createdBy._id}`)}>{e.createdBy.first_name}-{e.createdBy.last_name}</td>
                        <td onClick={() => navigate(`/profile/${e.developer._id}`)}>{e.developer.first_name}-{e.developer.last_name}</td>
                        <td onClick={() => navigate(`/project/show/${e._id}`)}>{e.title}</td>
                        <td>{moment(e.created_on).format('DD-MM-YYYY')}</td>
                        <td>{moment(e.completed_on).format('DD-MM-YYYY')}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          }
        </div>
      
    </div>
  );
}

export default AdminPage;


// /.admin-nav-ative{
//     color: white;
//     font-weight: 900;
//     background-color: var(--main-green) !important;
//     border-radius: 8px;
//     z-index:10 !important;
// }

// .admin-nav{
//     background-color:#f3f3f3;
    
// }

// .pointer:hover{
//     cursor: pointer;
// }

// .pointer-nav{
//     flex:1;
//     display: flex;
//     justify-content:center;
//     align-items: center;
//     z-index: 1;
  
// }

// .download-excel{
//     background-color: var(--main-navyblue);
//     color: white;
// }

// .download-excel:hover{
//     background-color: rgb(55, 55, 166);
//     color: white;
// }
