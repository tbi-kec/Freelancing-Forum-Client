import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import human from '../../assets/human.png'
import { useNavigate,useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import { setAlert } from '../../actions/alert'
import { changePassword } from '../../actions/auth'
const ResetPassword = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [password,setPassword]=useState("")
    const [confirm,setConfirm]=useState("")
    const {uid,token}=useParams();
    const handleResetPassword = (e)=>{
        e.preventDefault();
        if(password.length<6){
            dispatch(setAlert("Password length must be greater than 6","warning",2500))
            return
        }
         if(confirm!==password){
            dispatch(setAlert("Password dont match","warning",3000))
            return
        }
        dispatch(setAlert("Changing Password",'info'))
        dispatch(changePassword({userId:uid,token,password,confirm_password:confirm},navigate))
    }

    return (
        <div className='register-container'>
            <div className="container">
                <div className="row p-5">
                    <div className="col-8 card-container shadow ">
                        <div className='register-back-btn link'>
                            <Link to='/login' className='link'>
                                <div className=" d-flex m-3 text-light">
                                    <i className="fa-solid fa-arrow-left back-btn"></i>
                                </div>
                            </Link>
                        </div>
                        <div className="header-container">
                            <div className="login-logo-container">
                                <img src={logo} alt="logo" height="60px" width="60px" />
                            </div>
                            <p className='header my-2'>Reset Password</p>
                        </div>
                        <form className='row g-2 mt-5' onSubmit={handleResetPassword}>
                            <div className="form-group col-12 mt-3">
                                <input type="password" placeholder='New Password' className='form-control' value={password} onChange={e => setPassword(e.target.value)} required />
                            </div>
                            <div className="form-group col-12 mt-4">
                                <input type="password" placeholder='Confirm Password' className='form-control' value={confirm} onChange={e => setConfirm(e.target.value)} required />
                            </div>

                            <div className="d-grid gap-2 mt-4 ">
                                <button className="btn shadow ">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="image-container">
                <img src={human} alt="human" />
            </div>
        </div>
    )
}

export default ResetPassword