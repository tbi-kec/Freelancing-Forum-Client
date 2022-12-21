import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:8080/'})

//authentication
export const login = (authData) => API.post('/user/login',authData)
export const signup = (authData) => API.post('/user/signup',authData)

//profile-create
export const createProfile = (profileData) => API.post('/user/update/profile',profileData)
 
export const sendOtp =(otpData)=>API.post('/user/otp',otpData)