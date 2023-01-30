import React, { useState } from "react";
import "./Register.css";
import logo from "../../assets/keclogo.png";
import iiclogo from "../../assets/IIC_logo.png";
import emdclogo from "../../assets/emdclogo22.png";
import tbilogo from "../../assets/TBIlogo.png";
import human from "../../assets/human.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup, sendOtp } from "../../actions/auth";
import { Link } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { useEffect } from "react";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [mobile, setMobile] = useState();
  const [kongu_email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [otp, setOtp] = useState();
  const [gotp, setGotp] = useState();
  const [rollno, setRollNo] = useState("");
  const [user_type, setUserType] = useState("");
  const handleOtp = (e) => {
    e.preventDefault();
    let femail_pattern = /^([a-z]+).([a-z]{2,5})@([a-z]+).([a-z]{2,5})$/;
    let email_pattern =
      /^([a-z]+).([0-9]{2})([a-z]{2,5})@([a-z]+).([a-z]{2,5})$/;
    if (
      (!femail_pattern.test(kongu_email) &&
        !kongu_email.endsWith("kongu.edu")) ||
      (!email_pattern.test(kongu_email) && !kongu_email.endsWith("kongu.edu"))
    ) {
      dispatch(setAlert("Invalid Email", "warning", 2500));
      return;
    }
    if (password.length < 6) {
      dispatch(
        setAlert("Password length must be greater than 6", "warning", 2500)
      );
      return;
    }
    if (confirm !== password) {
      dispatch(setAlert("Password dont match", "warning", 3000));
      return;
    }
    const model = document.getElementById("toggle_model_button");
    model.click();
    var generated_otp = Math.floor(1000 + Math.random() * 9000);
    setGotp(generated_otp);
    dispatch(setAlert("Sending Otp to your kongu email", "info", 3000));
    dispatch(sendOtp({ otp: generated_otp, kongu_email }, navigate));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const modal = document.getElementById("modal_button");
    if (parseInt(otp) !== gotp) {
      dispatch(setAlert("Otp Not Match", "danger", 4000));
      return;
    }
    dispatch(setAlert("Otp verified", "success", 3500));
    modal.click();
    dispatch(
      signup(
        {
          first_name,
          last_name,
          mobile,
          rollno,
          user_type,
          kongu_email,
          password,
        },
        navigate
      )
    );
  };
  const user_types = ["client", "freelancer"];

  useEffect(() => {
    dispatch(
      setAlert(
        "You must have Github and Linkedin account to create a profile",
        "info",
        5000
      )
    );
  }, [dispatch]);

  return (
    <div className="register-container">
      {/* modal */}
      <div
        className="modal fade "
        data-bs-backdrop="static"
        id="toggle_model"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content text-center">
            <h3 className="my-3">Verify OTP</h3>
            <h5>
              Check <span className="fs-weight-bold">{kongu_email}</span> E-mail
            </h5>
            <form onSubmit={handleSubmit}>
              <div className="form-group ">
                <input
                  type="number"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter the OTP"
                  className="form-control w-50 my-3 mx-auto"
                  required
                />
              </div>
              <div className="d-grid d-flex gap-2 w-25 mx-auto">
                <button
                  className="btn shadow"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Back
                </button>
                <button className="btn shadow  ">SignUp</button>
                <input
                  id="modal_button"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  hidden
                />
              </div>
            </form>
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

      {/* content */}
      <div className="container-fluid">
        <div className="row p-sm-0 p-lg-5">
          <div className="col-8 card-container shadow ">
            <div className="register-back-btn link">
              <Link to="/login" className="link">
                <div className=" d-flex m-3 text-light">
                  <i className="fa-solid fa-arrow-left back-btn"></i>
                </div> 
              </Link>
            </div>
            <div className="container m-4">
            <div className="header-container">
              <p className="header text-dark fs-3 m-5 text-center">Register to KEC EMDC'S Freelancers Forum </p>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-3 ">
                <div className="login-logo-container">
                  <img src={emdclogo} className="mx-5" alt="emdc-logo" width="50px" height="50px" />
                </div>
                <div className="login-logo-container">
                  <img src={logo}  className="mx-5" alt="kec-logo"  width="75px" height="65px" />
                </div>
                <div className="login-logo-container">
                  <img src={tbilogo} alt="tbilogo" className="mx-4"  width="100px" height="50px" />
                </div>
                <div className="login-logo-container">
                  <img src={iiclogo} alt="iiclogo" className="mx-5"  width="100px" height="50px" />
                </div>
              </div>
            
            </div>
            <form className="row" onSubmit={handleOtp}>
              <div className="form-group col-md-12 col-lg-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group col-md-12 col-lg-6">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-control"
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group col-12">
                <input
                  type="tel"
                  placeholder="Mobile"
                  className="form-control"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <div className="form-group col-12">
                <input
                  type="email"
                  placeholder="Kongu.edu Email Id"
                  className="form-control"
                  value={kongu_email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group col-12">
                <input
                  type="text"
                  placeholder="Enter Roll No"
                  className="form-control"
                  value={rollno}
                  onChange={(e) => setRollNo(e.target.value)}
                  required
                />
              </div>
              <div className="form-group col-12">
                <select
                  name="user_type"
                  className="form-select"
                  onChange={(e) => setUserType(e.target.value)}
                  required
                >
                  <option value="" selected hidden>
                    User Role
                  </option>
                  {user_types.map((u, i) => (
                    <option value={u} key={i}>
                      {u.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group col-sm-12 col-md-6">
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group col-sm-12 col-md-6">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="form-control"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  required
                />
              </div>

              <div className="d-grid gap-2 ">
                <button className="btn shadow ">Send OTP</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={human} alt="human" />
      </div>
    </div>
  );
};

export default Register;
