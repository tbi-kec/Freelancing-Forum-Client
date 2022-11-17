import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
const Login = () => {
  return (
    <div className='login-container'>
        <div className="container">
            <div className="row p-5">
                <div className="login-left-side-container shadow col-sm-12  col-lg-6">
                    <h1>New Here</h1>
                    <h1>Join with us</h1>
                    <p>It's The Bright One, It's The Right One, That's Website.</p>
                    <button className='btn shadow'>Sign Up</button>
                </div>
                <div className="login-right-side-container shadow col-sm-12  col-lg-6 p-3">
                    <div className="header-container">
                        <div className="login-logo-container shadow p-2">
                            <img src={logo} alt="" />
                        </div>
                        <p className='header my-2'>Login in to dashboard </p>
                    </div>
                    <form>
                        <div className="form-group ">
                            <label className="form-label">Email</label>
                            <input type="text" placeholder='Type your mail'  />
                        </div>
                        <div className="form-group ">
                            <label className="form-label">Password</label>
                            <input type="text" placeholder='Type your Password'  />
                        </div>
                        <p className="text-end forget">Forget Password</p>
                        <div className="d-grid gap-4">
                            <button className="btn">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login