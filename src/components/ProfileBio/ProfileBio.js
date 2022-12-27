import React, { useEffect, useState } from "react";
import profile from "../../assets/profileicon2.png";
import assured from "../../assets/verified.png";
import "./ProfileBio.css";
import { useSelector } from "react-redux";
import starColor from "../../assets/Color-star.png";
import starDull from "../../assets/dull-star.png";
import { setAlert } from "../../actions/alert";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditProfile from "../EditProfile/EditProfile";
export default function ProfileBio({ user }) {
  const current = useSelector((state) => state.currentUserReducer);
  const [projectGiven, setProjectGiven] = useState([]);
  const [selectedProject,setSelectedProject]=useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("project",selectedProject)
  
  const show_modal = () => {
    const modal = document.getElementById("toggle_model_button");
    modal.click();
  };

  const filterData = () => {
    const data = user?.projects_given?.filter(
      (p) => p.project_status == "created"
    );
    console.log(data);
    setProjectGiven([...data]);
  };
  useEffect(() => {
    if (user?.projects_given) {
      filterData();
    }
  }, [user]);

  return (
    <div className="student-card ">
      {/* model - edit */}
      <div
        className="modal fade "
        id="toggle_model"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content text-center ">
            <EditProfile />
            <input
              type="button"
              id="toggle_model_button"
              hidden
              data-bs-toggle="modal"
              data-bs-target="#toggle_model"
            />
          </div>
        </div>
      </div>

      {/* model - request */}

      <div
        className="modal fade "
        data-bs-backdrop="static"
        id="toggle_model_request"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content text-center">
          {selectedProject!=='' ?
          <div>
            <div className="fs-4 m-5">You are assigning <b>{JSON.parse(selectedProject).name}</b> project to {user?.first_name}-{user?.last_name}</div>
            <div className="d-flex justify-content-around">
            <button
              class="btn btn-danger my-3"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Cancel
            </button>
            <button
              className="btn btn-md my-3 project-add-submit-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Assign
            </button>
            </div>
            </div> :
            <div>
            <div className="fs-4 m-5">Please, Select the project to assign...</div>
            <button
              className="btn btn-md m-3 px-4 project-add-submit-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              OK
            </button>
            </div>

          }
            <input
              type="button"
              id="toggle_model_button"
              hidden
              data-bs-toggle="modal"
              data-bs-target="#toggle_model_request"
            />
          </div>
        </div>
      </div>

      <div className="profile">
        <div className="profile-head">
          <div className="prof">
            <div className="profile-img me-4">
              <img src={profile} alt="" />
            </div>
            <div className="profile-detail">
              <div className="student-name">
                <h2>
                  {user?.first_name}-{user?.last_name}
                </h2>
              </div>

              <div className="student-role">
                <h3>{user?.domain[0]}</h3>
              </div>
            </div>
          </div>
          <div className="profile-dept">
            <div className="options d-flex align-items-center">
              <div className="student-assured">
                <img src={assured} alt="" />
              </div>
              {current?.user?._id === user?._id && (
                <div className="edit " onClick={show_modal}>
                  <i class="fa-solid fa-pencil fs-5"></i>
                  <input
                    type="button"
                    hidden
                    id="toggle_model_button"
                    data-bs-toggle="modal"
                    data-bs-target="#toggle_model"
                  />
                </div>
              )}
            </div>
            <div className="rating">
              {(function () {
                var rate = [];
                for (let i = 0; i < user?.rating; i++) {
                  rate.push(<img src={starColor} alt="star" height="30px" />);
                }
                for (let j = 0; j < 5 - user?.rating; j++) {
                  rate.push(<img src={starDull} alt="star" height="25px" />);
                }
                return <div>{rate}</div>;
              })()}
            </div>
          </div>
        </div>
        <div className="student-dept d-flex flex-wrap justify-content-between">
          <h4 className="mb-4">
            <i class="fa-solid fa-location-dot"></i>
            {user?.department}
          </h4>
          <div className="d-flex">
            <select className="form-select mx-3" value={selectedProject} onChange={(e)=>setSelectedProject(e.target.value)} >
              <option selected disabled value=''>
                Project
              </option>
              {projectGiven?.map((p) => (
                <option value={JSON.stringify({id:p._id,name:p.title})} key={p._id}>
                  {p.title}
                </option>
              ))}
            </select>

            <button
              class="btn"
              style={{ backgroundColor: "#16226D", color: "white" }}
              data-bs-toggle="modal"
              data-bs-target="#toggle_model_request"
            >
              Request
            </button>
          </div>
        </div>
        <div className="student-about">
          <h2 className="mb-3">About </h2>
          <div> {user?.description} </div>
        </div>
      </div>
    </div>
  );
}
