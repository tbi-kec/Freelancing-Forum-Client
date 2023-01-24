import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './Login.css'
import { login } from '../../actions/auth'
import logo from '../../assets/logo.png'
import iiclogo from '../../assets/IIC_logo.png'
import emdclogo from '../../assets/emdclogo22.png'
import { setAlert } from '../../actions/alert'
import { sendEmail } from '../../actions/auth'

const Login = () => {
    const navigate =  useNavigate()
    const dispatch = useDispatch()
    const [email,setEmail]=useState(".20it@kongu.edu")
    const [password,setPassword]=useState("123456")
    const [FPEmail,setFPEmail]=useState("")
    const handleSubmit = (e) =>{
         e.preventDefault()
        let femail_pattern=/^([a-z]+)\.([a-z]{2,5})\@([a-z]+)\.([a-z]{2,5})$/;
        let email_pattern=/^([a-z]+)\.([0-9]{2})([a-z]{2,5})\@([a-z]+)\.([a-z]{2,5})$/;
        if((!femail_pattern.test(email) && !email.endsWith("kongu.edu")) ||(!email_pattern.test(email) && !email.endsWith("kongu.edu")) ){
            dispatch(setAlert("Invalid Email","warning",2500))
            return
        }
        if(password.length<6){
            dispatch(setAlert("Password length must be greater than 6","warning",2500))
            return
        }
        dispatch(setAlert("Logging In","info",3000))
        dispatch(login({kongu_email:email,password},navigate))
    }

    const handleOnClickForget = ()=>{
        const model = document.getElementById('toggle_model_button')
        model.click();
    }

    const handleForgetPasswordSubmit = () =>{
        let femail_pattern=/^([a-z]+)\.([a-z]{2,5})\@([a-z]+)\.([a-z]{2,5})$/;
        let email_pattern=/^([a-z]+)\.([0-9]{2})([a-z]{2,5})\@([a-z]+)\.([a-z]{2,5})$/;
        if((!femail_pattern.test(FPEmail) && !FPEmail.endsWith("kongu.edu")) ||(!email_pattern.test(FPEmail) && !FPEmail.endsWith("kongu.edu")) ){
            dispatch(setAlert("Invalid Email","warning",2500))
            return
        }
        dispatch(setAlert("Sending Email","info"))
        dispatch(sendEmail({kongu_email:FPEmail}));

    }


  return (
    <div className='login-container'>
    {/* modal */}
    <div className="modal fade" id="toggle_model" tabindex="-1" role='dialog' aria-labelledby="exampleModalLabel" >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content text-center">
                        <h3 className='my-3'>Forgetten My Password</h3>
                        <div className="container px-5 my-5 d-flex justify-content-center">
                            <input type="text" className='form-control w-50' placeholder="Kongu Email" value={FPEmail} onChange={(e)=>{setFPEmail(e.target.value)}}  />
                        </div>
                        <div className='d-flex justify-content-center mb-5'>
                            <button className='btn btn-primary w-25' data-bs-dismiss="modal" aria-label="Close" onClick={handleForgetPasswordSubmit}>Send</button>
                        </div>
                        <input type='button' id='toggle_model_button' hidden  data-bs-toggle="modal" data-bs-target="#toggle_model" />

                    </div>
                </div>
            </div>

        <div className="container">
            <div className="row p-5">
                <div className="login-left-side-container shadow col-sm-12  col-lg-6">
                    
                    <h1 className=''>KEC Freelancing Forum</h1>
                    <h1 className='pb-4'>Join with us</h1>
                    <p className='fs-5'>It's The Bright One, It's The Right One, That's Website.</p>
                    <p className='fs-5'>Earn While You Learn</p>
                    <button className='btn shadow' onClick={()=>navigate("/Register")}>Sign Up</button>
                </div>
                <div className="login-right-side-container shadow col-sm-12  col-lg-6 p-3">
                    <div className="header-container">
                        <div className="logo-container">
                            <div className="login-logo-container ">
                                <img src={iiclogo} alt="" />
                            </div>
                            <div className="login-logo-container">
                                <img src={logo} alt="" />
                            </div>
                            <div className="login-logo-container">
                                <img src={emdclogo}  alt="" />
                            </div>
                        </div>
                        <p className='header my-2'>Login in to dashboard </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group ">
                            <label className="form-label">Kongu Email</label>
                            <input type="text" placeholder='Type your mail' className='px-3' value={email} onChange={e=>setEmail(e.target.value)} required  />
                        </div>
                        <div className="form-group ">
                            <label className="form-label">Password</label>
                            <input type="password" placeholder='Type your Password' className='px-3' value={password} onChange={e=>setPassword(e.target.value)}  required />
                        </div>
                        <p className="text-end forget" onClick={handleOnClickForget}>Forget Password</p>
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
