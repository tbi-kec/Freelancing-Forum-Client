import * as api from '../api'
import { setAlert } from './alert'
import { setCurrentUser } from './currentUser'
import { getMyDetails } from './myDetails'
import { getAllUsers } from './user'
import { getAllProjects } from './project'
export const login  = (authData,navigate) => async(dispatch) =>{
    try {
        const {data}=await api.login(authData)
        dispatch({type:"AUTH",payload:data})
        navigate("/home")
        dispatch(getMyDetails())
        dispatch(getAllUsers())
        dispatch(setCurrentUser())
        dispatch(getAllProjects())
        dispatch(setAlert("Login Successfull","success"))
    } catch (error) {
        console.log(error)
      dispatch(setAlert(error.response.data,'danger'))
    }
}

export const signup = (authData,navigate) => async(dispatch) =>{
    try {
        const {data}=await api.signup(authData)
        dispatch({type:"AUTH",payload:data})
         navigate("/profile/create")
        dispatch(setAlert("User Created successfully","success"))
        
        dispatch(setCurrentUser())
       
    } catch (error) {
        dispatch(setAlert(error.response.data,'danger'))
    }
}

export const updateProfile = (profileData,navigate) => async(dispatch)=>{
    try {
        const {data} = await api.createProfile(profileData)
         dispatch(getMyDetails())
        dispatch(getAllUsers())
        dispatch(setCurrentUser())
             dispatch(getAllProjects())
        navigate('/home')
        dispatch(setAlert("Profile created Successfully","success"))
    } catch (error) {
        console.log(error)
        dispatch(setAlert(error.response.data,'danger'))
    }
}

export const sendOtp = (otpData,navigate)=>async(dispatch)=>{
    try{
        const {data}=await api.sendOtp(otpData);
        dispatch(setAlert("OTP send successfully","success"))
    }catch(err){
        dispatch(setAlert(err.response.data,"danger"))
    }
}

export const sendEmail = (email)=>async(dispatch) =>{
    try {
        const {data}=await api.sendEmail(email)
        dispatch(setAlert("Email send to your mail","success"))
    } catch (error) {
        console.log(error.message)
        dispatch(setAlert("Email not send error","danger"))
    }
}

export const changePassword =(resetData,navigate)=>async(dispatch)=>{
    try {
        const {data}=await api.changePassword(resetData)
        dispatch(setAlert("Password changes","success"));
        navigate('/login')
    } catch (error) {
        dispatch(setAlert("Password can't be changes","danger"))
    }
}