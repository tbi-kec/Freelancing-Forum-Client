import * as api from '../api'
import { setAlert } from './alert'

export const getMyDetails=()=>async(dispatch)=>{
    try {
        const user =await JSON.parse(localStorage.getItem('freelance'));
        if(user!=null){
            const {data}=await api.getDetails(user.user._id);
            console.log(data)
            dispatch(setAlert("Fetching or updating  details","info",2000))
            dispatch({type:'GET_MY_DETAILS',payload:data})
        }
    } catch (error) {
        dispatch(setAlert("Server Error","warning"))
    }
}

export const newStudyProject = (projectData,navigate)=>async(dispatch)=>{
    try {
        const {data}=await api.newStudyProject(projectData)
        dispatch(getMyDetails())
        dispatch(setAlert("Added new Study Project","success"))
         navigate('/home')
    } catch (error) {
        dispatch(setAlert("Server error while creating project","danger"))
    }
}

export const requestAdmin = (projectData)=>async(dispatch)=>{
    try {
        alert(projectData)
        const {data}=await api.requestProjectToAdmin(projectData);
        dispatch(getMyDetails());
        dispatch(setAlert("Request Send to Admin","success",3000))
    } catch (error) {
        alert(error)
        dispatch(setAlert("Server Busy try after some time","danger"))
    }
}