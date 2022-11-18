import React from 'react'
import './Register.css'
import logo from '../../assets/logo.png'
import human from '../../assets/human.png'
const Register = () => {
  return (
    <div className='register-container'>
        <div className="container">
            <div className="row p-5">
                <div className="col-8 card-container shadow ">
                        <div className="header-container">
                        <div className="login-logo-container shadow p-2">
                            <img src={logo} alt="" />
                        </div>
                        <p className='header my-2'>Login in to dashboard </p>
                    </div>
                    <form className='row g-2'>
                        <div className="form-group col-md-12 col-lg-6">
                            <input type="text" placeholder='First Name' className='form-control' />
                        </div>
                        <div className="form-group col-md-12 col-lg-6">
                            <input type="text" placeholder='Last Name' className='form-control' />
                        </div>
                        <div className="form-group col-12">
                            <input type="text" placeholder='Mobile' className='form-control' />
                        </div>
                        <div className="form-group col-12">
                            <input type="email" placeholder='Email Id' className='form-control' />
                        </div>
                        <div className="form-group col-12">
                            <input type="password" placeholder='Enter Password' className='form-control' />
                        </div>
                        <div className="form-group col-12">
                            <input type="password" placeholder='Confirm Password' className='form-control' />
                        </div>
                        <div className="d-grid gap-2 ">
                            <button className="btn shadow">SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="image-container">
            <img src={human} alt="" />
        </div>
    </div>
  )
}

export default Register