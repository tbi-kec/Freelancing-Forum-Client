import React from "react";
import "./ProjectShow.scss";
import bannerIcon from "../../assets/Maskgroup.png";
import profile from "../../assets/profileicon2.png";
import accept from "../../assets/accept.png";
import decline from "../../assets/decline.png";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { useParams } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { requestAdmin } from "../../actions/myDetails";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
function ProjectShow() {
    const { id } = useParams();
 
  const project = useSelector((state) => state.projectReducer);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.myDetailsReducer);


  const handleAccept = (e, d_id) => {
    e.preventDefault();
    setAlert("Requesting Admin", "info", 3000);
    dispatch(requestAdmin({ d_id, p_id: id }));
  };

  return (
    <div className="my-5 project-show-container container">
      {project && project?.data
        ?.filter((p) => p?._id === id)
        ?.map((p) => (
          <div className="container my-3 " key={p._id}>
            <div className="row mb-5 banner-project ">
              <div className="col-8 ps-4">
                <h3 className="mt-3 mb-0 fw-bold mb-3">{p?.title}</h3>
                <div className="fw-bold">
                  <span>{p?.createdBy?.department}</span>
                </div>
                <div className=" mt-3 d-flex justify-content-start align-items-center">
                  <h5 className="pt-2 ">
                    Posted By :{" "}
                  </h5>
                  <div className=" mx-2 text-start d-flex align-items-center">
                  <span
                      data-bs-dismiss="modal"
                      aria-label="close"
                      className="fs-3 "
                    >
                      <Link
                        to={`/profile/${p.createdBy._id}`}
                        className="text-light fw-bold pe-3"
                      >
                        {p.createdBy.first_name} - {p.createdBy.last_name}
                      </Link>
                    </span>
                    <img src={profile} height="50px" width="50px" alt="" className="banner-profile-1" />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <img src={bannerIcon} alt="" height="160px" width="190px" className="banner-profile"/>
              </div>
            </div>
            <div className="card shadow my-5">
              <div className="card-body">
                <div className="p-3">{p.description}</div>
              </div>
            </div>
            <div className="card shadow">
              <div className="card-body me-3">
                <div className="row">
                  <div className="col-md-9">
                    <div className="row px-3 pb-4">
                      <div className="fs-5 fw-bold my-4">Skills Required</div>
                      <div className="skill d-flex justify-content-start gap-4 ">
                        {p.skills.map((e, i) => {
                          return (
                            <div key={i}
                              className="skillset px-2 skill-beginner text-light">
                              {e}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 notification flex-grow-1">
                    <div className="p-3">
                      <b>Start date:</b> {moment(p.created_on).fromNow()}
                    </div>
                    <div className="p-3">
                      <b>End date:</b> {moment(p.end_date).fromNow()}
                    </div>
                    <div className="p-3">
                      <b>Total Stipend:</b>
                      <span className="text-success fw-bold">
                        {" "}
                        ₹{p.stipend}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {p.createdBy._id ===user?.data?._id && p.project_status !== "created" && 
              <div className="p-3">
                <div className="fs-4 mt-4 fw-bold">Applicant</div>
                <div>
                  <div className="row">
                  {p.requested.map((u, i) => (
                  
                    <div className="col-md-6" key={u._id}>
                      <div className="card m-3  applicant-card">
                        <div className="card-body">
                          <div className="row d-flex align-items-center">
                            <div className="col-3">
                            <Link to={`/profile/${u._id}`} className="text-light">
                              <img
                                src={profile}
                                alt="img"
                                height="70px"
                                width="70px"
                              />
                               </Link>
                            </div>
                            <div className="col-9">
                              <div className="row">
                                <div className="col-6">
                                <Link to={`/profile/${u._id}`} className="text-light">
                                  <div className="fw-bold">{u.first_name}-{u.last_name}</div>
                                  <div>IT</div>
                                  </Link>
                                </div>
                                <div className="col-6">
                                  <div className="row">
                                    <div className="col-6"  onClick={(e) => handleAccept(e, u._id)}>
                                    <span className="bg-success p-2 rounded">
                                      <img src={accept} alt="" height="20px" />
                                    </span>
                                    </div>
                                    <div className="col-6">
                                    <span className="bg-danger p-2 rounded">
                                      <img src={decline} alt="" height="20px" />
                                    </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
          }
          {(p?.project_status==='assigned' || p?.project_status==='partial' || p.project_status==='testing') && 
          (p?.createdBy?._id===user?.data?._id || p.developer?._id===user?.data?._id )&&
              <div className="card mt-3 mb-5 shadow">
                <div className="card-body">
                  <div className="p-3">
                    <div className="fs-4 my-4 fw-bold">Progress</div>
                    <ProgressBar
                      c_id={p?.createdBy?._id}
                      d_id={p?.developer?._id}
                      p_id={p?._id}
                      status={p?.project_status}
                      key={p?._id}
                      deadline={moment(p?.end_date).fromNow()}
                    />
                    </div>
                  </div>
              </div>
            }
          </div>
        ))}
    </div>
  );
}

export default ProjectShow;
