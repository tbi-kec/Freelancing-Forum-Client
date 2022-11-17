import React from 'react'
import './Register.css'
import logo from '../../assets/logo.png'
const Register = () => {
  return (
    <div className='register-container'>
        <div className="container">
            <div className="row p-5">
                <div className="card-container shadow col-md-12">
                        <div className="header-container">
                        <div className="login-logo-container shadow p-2">
                            <img src={logo} alt="" />
                        </div>
                        <p className='header my-2'>Login in to dashboard </p>
                    </div>
                    <form className='row g-2'>
                        <div className="form-group col-6">
                            <input type="text" placeholder='First Name' className='form-control' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register