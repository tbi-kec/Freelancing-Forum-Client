import axios from 'axios'
import App from '../App'

const API = axios.create({baseURL:'http://localhost:8080/'})

//authentication
export const login = (authData) => API.post('/user/login',authData)
export const signup = (authData) => API.post('/user/signup',authData)

//profile-create
export const createProfile = (profileData) => API.post('/user/update/profile',profileData)
 
export const sendOtp =(otpData)=>API.post('/user/otp',otpData)


//project-create
export const newProject = (projectData)=>API.post('/project',projectData)
//getAllproject
export const getAllProject =()=>API.get('/project/all')

//getALLUser
export const getAllUser = ()=>API.get('/user')


//constants
export const getConstants = ()=>API.get('/constants/domain')

//getMyDetails
export const getDetails = (id)=>API.get(`/user/${id}`)

//new-study-project
export const newStudyProject = (projectData)=>API.post('/study',projectData)


//forget-password
export const sendEmail = (email)=>API.post('/user/forgotten-password',email)
export const changePassword = (resetData)=>API.post(`/user/reset/forgotten-password`,resetData)

//request-project-to-admin
export const requestProjectToAdmin = (projectData)=>API.post(`/project/provider/request`,projectData);

//admin-get-projects
export const getProjectHistory= ()=>API.get('/admin/requested_project');

export const responseRequest = (responseData)=>API.post('/admin/admin_response',responseData)

//developer-acceptOrReject

export const developerResponse =(responseData)=>API.post('/project/provider/request/status',responseData)

export const deleteNotification =(deleteId)=>API.post('/user/notification/delete',deleteId)

//edit-profile
export const editProfile = (editData)=>API.patch(`/user/edit/profile/${editData.id}`,editData)

//update-status of project
export const updateStatus = (status)=>API.post('/project/update/progress',status)