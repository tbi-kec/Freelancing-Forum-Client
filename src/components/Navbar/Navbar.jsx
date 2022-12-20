import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import profile from "../../assets/profileicon2.png";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <span class="navbar-brand text-light fw-bold">
          <img src={logo} height="35px" className="mx-4" alt="kec-logo" />
          Freelancing Forum
        </span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav text-light ms-auto">
            <li class="nav-item mx-4">
              <span class="nav-link">
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
              </span>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link">
                <button className="btn nav-btn-1">All Project</button>
              </a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link">
                <button className="btn nav-btn-2">Add Project</button>
              </a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link">
                <img src={profile} height="40px" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
