import React, { useState } from 'react'
import './Register.css'
import logo from '../../assets/logo.png'
import human from '../../assets/human.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signup } from '../../actions/auth'
import { setAlert } from '../../actions/alert'

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [first_name,setFirstName]=useState('a')
    const [last_name,setLastName]=useState("a")
    const [mobile,setMobile]=useState(888)
    const [kongu_email,setEmail]=useState("k@gmail.com")
    const [password,setPassword]=useState("11")
    const [confirm,setConfirm]=useState("111")
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(confirm!=password){
            dispatch(setAlert("Password dont match","danger",3000))
            return
        }
        dispatch(signup({first_name,last_name,mobile,kongu_email,password},navigate))
    }
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
                    <form className='row g-2' onSubmit={handleSubmit}>
                        <div className="form-group col-md-12 col-lg-6">
                            <input type="text" placeholder='First Name' className='form-control' value={first_name} onChange={e=>setFirstName(e.target.value)} required />
                        </div>
                        <div className="form-group col-md-12 col-lg-6">
                            <input type="text" placeholder='Last Name' className='form-control' value={last_name} onChange={e=>setLastName(e.target.value)} required/>
                        </div>
                        <div className="form-group col-12">
                            <input type="tel" placeholder='Mobile' className='form-control'value={mobile} onChange={e=>setMobile(e.target.value)} required/>
                        </div>
                        <div className="form-group col-12">
                            <input type="email" placeholder='Email Id' className='form-control' value={kongu_email} onChange={e=>setEmail(e.target.value)} required/>
                        </div>
                        <div className="form-group col-12">
                            <input type="password" placeholder='Enter Password' className='form-control'value={password} onChange={e=>setPassword(e.target.value)} required />
                        </div>
                        <div className="form-group col-12">
                            <input type="password" placeholder='Confirm Password' className='form-control' value={confirm} onChange={e=>setConfirm(e.target.value)} required/>
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