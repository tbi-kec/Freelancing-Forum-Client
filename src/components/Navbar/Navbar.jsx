import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import profile from "../../assets/profileicon2.png";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";

const Navbar = () => {

  const user= useSelector((state)=>(state.currentUserReducer));


  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <span className="navbar-brand text-light fw-bold">
          <img src={logo} height="35px" className="mx-4" alt="kec-logo" />
          Freelancing Forum
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-light ms-auto">
          <li className="nav-item mx-4">
              <Link to="/department" className="nav-link">
                <button className="btn nav-btn-1">Freelancers</button>
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/project/view" className="nav-link">
                <button className="btn nav-btn-1">All Projects</button>
              </Link>
            </li>        
            <li className="nav-item mx-4">
              <Link to="/project/add" className="nav-link">
                <button className="btn nav-btn-2">Add Project</button>
              </Link>
            </li> 
            <li className="nav-item mx-4">
              <Link to={`/profile/${user?.user._id}`} className="nav-link">
                <img src={profile} height="40px" alt="" />
              </Link>
            </li>           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
