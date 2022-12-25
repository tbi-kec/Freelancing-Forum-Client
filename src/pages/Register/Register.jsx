import React, { useState } from 'react'
import './Register.css'
import logo from '../../assets/logo.png'
import human from '../../assets/human.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signup,sendOtp } from '../../actions/auth'
import { Link } from 'react-router-dom'
import { setAlert } from '../../actions/alert'

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [first_name,setFirstName]=useState('')
    const [last_name,setLastName]=useState("")
    const [mobile,setMobile]=useState()
    const [kongu_email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirm,setConfirm]=useState("")
    const [otp,setOtp]=useState()
    const [gotp,setGotp]=useState()
    const handleOtp = (e)=>{
        e.preventDefault();
         let femail_pattern=/^([a-z]+)\.([a-z]{2,5})\@([a-z]+)\.([a-z]{2,5})$/;
        let email_pattern=/^([a-z]+)\.([0-9]{2})([a-z]{2,5})\@([a-z]+)\.([a-z]{2,5})$/;
        if((!femail_pattern.test(kongu_email) && !kongu_email.endsWith("kongu.edu")) ||(!email_pattern.test(kongu_email) && !kongu_email.endsWith("kongu.edu")) ){
            dispatch(setAlert("Invalid Email","warning",2500))
            return
        }
        if(password.length<6){
            dispatch(setAlert("Password length must be greater than 6","warning",2500))
            return
        }
         if(confirm!=password){
            dispatch(setAlert("Password dont match","warning",3000))
            return
        }
        const model = document.getElementById('toggle_model_button')
        model.click();
        var generated_otp = Math.floor(1000 + Math.random() * 9000);
        setGotp(generated_otp)
        dispatch(setAlert("Sending Otp","info",3000))
        dispatch(sendOtp({otp:generated_otp,kongu_email},navigate))
    }

    const handleSubmit = (e)=>{
        
        e.preventDefault()
        const modal=document.getElementById('modal_button');
        if(otp!=gotp){
            dispatch(setAlert("Otp Not Match","danger",4000))
            return;
        }
        dispatch((setAlert("Otp verified","success",3500)))
        modal.click();
        dispatch(signup({first_name,last_name,mobile,kongu_email,password},navigate))
    }
    return (
        <div className='register-container'>
            {/* modal */}
            <div className="modal fade " data-bs-backdrop="static" id="toggle_model" tabindex="-1" role='dialog' aria-labelledby="exampleModalLabel" >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content text-center">
                        <h3 className='my-3'>Verify OTP</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group ">
                                <input type="tel" value={otp} onChange={e=>setOtp(e.target.value)} placeholder='Enter the OTP' className='form-control w-50 my-3 mx-auto' required />
                            </div>
                            <div className="d-grid d-flex gap-2 w-25 mx-auto">
                                <button  className="btn shadow" data-bs-dismiss="modal" aria-label="Close">Back</button>
                                <button className="btn shadow  " >SignUp</button>
                                <input id='modal_button' type="button" data-bs-dismiss="modal" aria-label="Close" hidden />
                            </div>
                        </form>
                        <input type='button' id='toggle_model_button' hidden  data-bs-toggle="modal" data-bs-target="#toggle_model" />

                    </div>
                </div>
            </div>

            {/* content */}
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
                            <div className="login-logo-container shadow p-2">
                                <img src={logo} alt="" />
                            </div>
                            <p className='header my-2'>Login in to dashboard </p>
                        </div>
                        <form className='row g-2' onSubmit={handleOtp}>
                            <div className="form-group col-md-12 col-lg-6">
                                <input type="text" placeholder='First Name' className='form-control' value={first_name} onChange={e => setFirstName(e.target.value)} required />
                            </div>
                            <div className="form-group col-md-12 col-lg-6">
                                <input type="text" placeholder='Last Name' className='form-control' value={last_name} onChange={e => setLastName(e.target.value)} required />
                            </div>
                            <div className="form-group col-12">
                                <input type="tel" placeholder='Mobile' className='form-control' value={mobile} onChange={e => setMobile(e.target.value)} required />
                            </div>
                            <div className="form-group col-12">
                                <input type="email" placeholder='Kongu Email Id' className='form-control' value={kongu_email} onChange={e => setEmail(e.target.value)} required />
                            </div>
                            <div className="form-group col-12">
                                <input type="password" placeholder='Enter Password' className='form-control' value={password} onChange={e => setPassword(e.target.value)} required />
                            </div>
                            <div className="form-group col-12">
                                <input type="password" placeholder='Confirm Password' className='form-control' value={confirm} onChange={e => setConfirm(e.target.value)} required />
                            </div>

                            <div className="d-grid gap-2 ">
                                <button className="btn shadow ">Send OTP</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="image-container">
                <img src={human} alt="human.image" />
            </div>
        </div>
    )
}

export default Register