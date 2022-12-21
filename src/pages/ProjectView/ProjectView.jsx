import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

function ProjectView() {
  return (
    <div>
      <div className="row d-flex align-items-center">
        <div className="col-md-1">
        <Link to='/'>
          <div className=" d-flex m-3">
            <i class="fa-solid fa-arrow-left back-btn"></i>
          </div>
        </Link>
        </div>
        <div className="col-md-4 p-2 px-5">
          <div class="input-group">
            <input
              type="text"
              class="form-control search-bar"
              placeholder="&#128269; search"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn text-light search-bar search-btn"
              type="button"
              id="button-addon2"
            >
              Talent
            </button>
          </div>
        </div>
        <div className="col-md-3 p-2 px-5">
          <div className="form-group">
            <select name="domain" className="form-select">
              <option value="" diabled hidden selected >
                Category
              </option>
            </select>
          </div>
        </div>
        <div className="col-md-3 p-2 px-5">
          <div className="form-group">
            <select name="domain" className="form-select">
              <option value="" diabled hidden selected>
                Department
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="m-5 pb-5">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default ProjectView;
