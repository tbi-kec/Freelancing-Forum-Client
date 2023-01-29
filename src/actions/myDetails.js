import * as api from '../api'
import { setAlert } from './alert'
import { getRequestedProjects } from './admin';
import { getAllProject } from '../api';
import { useNavigate } from 'react-router-dom';
export const getMyDetails=()=>async(dispatch)=>{
    try {
        const user =await JSON.parse(localStorage.getItem('freelance'));
        if(user!==null){
            const {data}=await api.getDetails(user.user._id)
            if(data===null && user?.user?.isAdmin!==true){
                dispatch(setAlert("sorry we cant find the user","warning"));
                localStorage.clear();
                const navigate = useNavigate();
                navigate('/')
            }
            dispatch({type:'GET_MY_DETAILS',payload:data})
            dispatch(setAlert("Fetching or updating  details","info",2000))
        }
        return;
    } catch (error) {
        dispatch(setAlert("Server Error","warning"))
    }
}

export const newStudyProject = (projectData,navigate)=>async(dispatch)=>{
    try {
        await api.newStudyProject(projectData)
        dispatch(setAlert("Added new Study Project","success"))
        dispatch(getMyDetails())
         navigate(`/profile/${projectData.createdBy}`)
    } catch (error) {
        dispatch(setAlert("Server error while creating project","danger"))
    }
}

export const requestAdmin = (projectData)=>async(dispatch)=>{
    try {
       
        await api.requestProjectToAdmin(projectData);
        dispatch(getMyDetails());
        dispatch(getRequestedProjects())
        dispatch(setAlert("Request Send to Admin","success",3000))
    } catch (error) {
        
        dispatch(setAlert("Server Busy try after some time","danger"))
    }
}

export const responseToNotification= (responseData,navigate)=>async(dispatch)=>{
    try {
        await api.developerResponse(responseData)
        dispatch(getMyDetails());
        dispatch(setAlert("Responded to notification successfully","success"))
        navigate("/home")
    } catch (error) {
        
        dispatch(setAlert("Server error","danger"))
    }
}

export const deleteNotification =(deleteData,navigate)=>async(dispatch)=>{
    try {
        await api.deleteNotification(deleteData);
        dispatch(getMyDetails());
        dispatch(getAllProject());
        dispatch(setAlert("Deleted notification","success"))
    } catch (error) {
        dispatch(setAlert("Server error","danger"))
    }
}


export const editProfile = (editData,navigate)=>async(dispatch)=>{
    try {
        
       await api.editProfile(editData);
        dispatch(getMyDetails());
        dispatch(setAlert("Edited Succesfully","info"));
        navigate(`/profile/${editData.id}`)
    } catch (error) {
        dispatch(setAlert("Error Occured","warning"))
    }
}

export const developerRequestProject =(requestData,navigate)=>async(dispatch)=>{
    try {
        await api.developerRequestProject(requestData);
        dispatch(setAlert("Requested Project","success"));
        dispatch(getMyDetails());
        navigate("/home")
    } catch (error) {
        dispatch(setAlert("Request Error","danger"))
    }
}

export const developerUpdateRating =(ratingData)=>async(dispatch)=>{
    try{
        await api.developerUpdateRating(ratingData);
        dispatch(setAlert("You have rated the project","success"));
    }catch(error){
        dispatch(setAlert("Request Error","danger"))
    }
} 

export const clientRejectDeveloper = (rejectData,navigate)=>async(dispatch)=>{
    try {
       const {data}= await api.clientRejectDeveloper(rejectData);
        dispatch(getAllProject());
        navigate(`/project/${rejectData.p_id}`)
    } catch (error) {
        console.log(error.message)
        dispatch(setAlert("Reject Error","danger"))
    }
}
export const clientAcceptDeveloper = (acceptData,navigate)=>async(dispatch)=>{
    try {
        await api.clinetAcceptDeveloper(acceptData);
        dispatch(getAllProject());
        navigate(`/project/${acceptData.p_id}`)
    } catch (error) {
        dispatch(setAlert("Accept Error","danger"))
    }
}

