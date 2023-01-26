import React from "react";
import "./ProjectShow.css";
import bannerIcon from "../../assets/Maskgroup.png";
import profile from "../../assets/profileicon2.png";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { useParams, useNavigate } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { requestAdmin } from "../../actions/myDetails";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
function ProjectShow() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = useSelector((state) => state.projectReducer);
  const dispatch = useDispatch();
  console.log(project);
  const user = useSelector((state) => state.myDetailsReducer);

  const handleAccept = (e, d_id) => {
    e.preventDefault();
    setAlert("Requesting Admin", "info", 3000);
    dispatch(requestAdmin({ d_id, p_id: id }));
  };

  return (
    <div>
      {project?.data
        ?.filter((p) => p._id == id)
        ?.map((p) => (
          <div className="container my-3 " key={p._id}>
            <div className="row mb-5 banner-project ">
              <div className="col-8 ps-4">
                <h3 className="mt-3 mb-0 fw-bold mb-3">{p.title}</h3>
                <div className="fw-bold">
                  <span>{p.createdBy.department}</span>
                  <span className=" mx-3">•</span>
                  <span>IT</span>
                </div>
                <div className=" mt-3 d-flex justify-content-start">
                  <h5 className="pt-2 ">
                    Posted By :{" "}
              
                  </h5>
                  <div className=" mx-2 text-start">
                  <span
                      data-bs-dismiss="modal"
                      aria-label="close"
                      className="fs-3 "
                    >
                      <Link
                        to={`/profile/${p.createdBy._id}`}
                        className="text-light fw-bold"
                      >
                        {p.createdBy.first_name} - {p.createdBy.last_name}
                      </Link>
                    </span>
                    <img src={profile} height="50px" width="50px" alt="" className="banner-profile-1" />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <img src={bannerIcon} alt="" height="170px" width="200px" className="banner-profile"/>
              </div>
            </div>
            <div className="card shadow my-5">
              <div className="card-body">
                <div className="p-3">{p.description}</div>
              </div>
            </div>
            <div className="card">
              <div className="card-body me-3">
                <div className="row">
                  <div className="col-md-9">
                    <div className="row px-3 pb-4">
                      <div className="fs-5 fw-bold my-4">Skills Required</div>
                      <div className="skill d-flex justify-content-start gap-4 ">
                        {p.skills.map((e, i) => {
                          return (
                            <div
                              className="skillset px
                        -2 skill-beginner text-light"
                            >
                              {e}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 notification flex-grow-1">
                    <div className="p-3">
                      <b>Start date:</b> {moment(p.end_date).fromNow()}
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

            {p.project_status === "created" ? (
              <div className="p-3">
                <div className="fs-4 mt-4 fw-bold">Applicant</div>
                <div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card m-3  applicant-card">
                        <div className="card-body">
                          <div className="row d-flex align-items-center">
                            <div className="col-3">
                              <img
                                src={profile}
                                alt="img"
                                height="70px"
                                width="70px"
                              />
                            </div>
                            <div className="col-9">
                              <div className="row">
                                <div className="col-6">
                                  <div className="fw-bold">KARTHIKEYAN R</div>
                                  <div>IT</div>
                                </div>
                                <div className="col-6">
                                  <div className="row">
                                    <div className="col-6">accept</div>
                                    <div className="col-6">reject</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
            
                  </div>
                </div>
                <div className="container my-3">
                  {p.requested.map((u, i) => {
                    return (
                      <div className="col-md-6">
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
                                    <div className="col-6"  onClick={(e) => handleAccept(e, u._id)}>accept</div>
                                    <div className="col-6">reject</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="p-3">
                <div className="fs-4 mt-4 fw-bold">Progress</div>
                <ProgressBar
                  c_id={p.createdBy._id}
                  d_id={p.developer._id}
                  p_id={p._id}
                  status={p.project_status}
                  key={project._id}
                />
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

export default ProjectShow;
