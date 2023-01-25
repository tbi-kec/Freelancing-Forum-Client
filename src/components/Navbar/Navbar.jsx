import React from "react";
import "./Navbar.css";
import logo from "../../assets/keclogo.png";
import profile from "../../assets/profileicon2.png";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate()
  const user= useSelector((state)=>(state.currentUserReducer));
  const admin=user?.user?.isAdmin

  const handleLogout = () =>{
    localStorage.removeItem('freelance');
    navigate('/');
}

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
            {/* <li className="nav-item mx-4">
              <span className="nav-link">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control search-bar"
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
            </li> */}
            <li className="nav-item mx-4">
              <Link to="/project/view" className="nav-link">
                <button className="btn nav-btn-1">All Project</button>
              </Link>
            </li>
            {admin ?
            <li>
            <Link to="/admin" className="nav-link">
                <button className="btn nav-btn-2 px-3">Report</button>
              </Link>
            </li>:
            <li className="nav-item mx-4">
              <Link to="/project/add" className="nav-link">
                <button className="btn nav-btn-2">Add Project</button>
              </Link>
            </li> 
            
            }
            {admin ? 
              <li className="d-flex align-items-center mx-3">
              <div className=' text-end '>
        <button className="btn logout text-light" onClick={handleLogout}>Log Out</button>
      </div>
    
              </li>:
            <li className="nav-item mx-4">
              <Link to={`/profile/${user?.user._id}`} className="nav-link">
                <img src={profile} height="40px" alt="" />
              </Link>
            </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
