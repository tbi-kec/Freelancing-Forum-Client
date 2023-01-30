import * as api from '../api'
import { setAlert } from './alert'
import { setCurrentUser } from './currentUser'
import { getMyDetails } from './myDetails'
import { getAllUsers } from './user'
import { getAllProjects } from './project'
import { getRequestedProjects } from './admin'
import { getConstants } from './constant'
import { getLoading } from './loading'
export const login  = (authData,navigate) => async(dispatch) =>{
    try {
        dispatch(getLoading(true))
        const {data}=await api.login(authData)
        dispatch({type:"AUTH",payload:data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("freelance"))))
        dispatch(getMyDetails())
        dispatch(getAllUsers())
        dispatch(getConstants())
        dispatch(getAllProjects())
        dispatch(getRequestedProjects())
        dispatch(getLoading(false))
        dispatch(setAlert("Login Successfull","success"))
        if(data?.user?.isAdmin===true) navigate("/admin")
        else if(data?.user?.admin_verify===false) navigate(`/profile/${data.user._id}`)
        else navigate("/home")
    } catch (error) {
        dispatch(getLoading(false))
      dispatch(setAlert(error.response.data,'danger'))
    }
}


export const signup = (authData,navigate) => async(dispatch) =>{
    try {
        dispatch(getLoading(true))
        const {data}=await api.signup(authData)
        dispatch({type:"AUTH",payload:data}) 
        dispatch(getConstants())
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("freelance"))))
        dispatch(getLoading(false))
        dispatch(setAlert("User Created successfully","success"))
        navigate("/profile/create")
    } catch (error) {
         dispatch(getLoading(false))
        dispatch(setAlert(error.response.data,'danger'))
    }
}

export const updateProfile = (profileData,navigate) => async(dispatch)=>{
    try {
        dispatch(getLoading(true))
       await api.createProfile(profileData)
        const {user}=await JSON.parse(localStorage.getItem("freelance"))
        dispatch(getMyDetails())
        dispatch(getAllUsers())
        dispatch(getConstants())
        dispatch(getAllProjects())
        dispatch(getRequestedProjects())
        dispatch(getLoading(false))
        dispatch(setAlert("Profile created Successfully","success"))
        navigate(`/profile/${user._id}`)
          //navigate("/home")
    } catch (error) {
         dispatch(getLoading(false))
        dispatch(setAlert(error.response.data,'danger'))
    }
}

export const sendOtp = (otpData,navigate)=>async(dispatch)=>{
    try{
        await api.sendOtp(otpData);
        dispatch(setAlert("OTP send successfully to your kongu email","success"))
    }catch(err){
        dispatch(setAlert(err.response.data,"danger"))
    }
}

export const sendEmail = (email)=>async(dispatch) =>{
    try {
       await api.sendEmail(email)
        dispatch(setAlert("Email send to your mail","success"))
    } catch (error) {
        dispatch(setAlert("Email not send error","danger"))
    }
}

export const changePassword =(resetData,navigate)=>async(dispatch)=>{
    try {
        dispatch(getLoading(true))
         await api.changePassword(resetData)
         dispatch(getLoading(false))
        dispatch(setAlert("Password changed","success"));
        navigate('/login')
    } catch (error) {
         dispatch(getLoading(false))
        dispatch(setAlert("Password can't be changes","danger"))
    }
}


