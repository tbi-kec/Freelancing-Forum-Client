import * as api from '../api'
import { setAlert } from './alert'
import { getAllUsers } from './user';


export const getRequestedProjects=()=>async(dispatch)=>{
    try {
        const {data}=await api.getProjectHistory();
        console.log(data)
        dispatch({type:'GET_ALL_PROJECTS',payload:data})
    } catch (error) {
        dispatch(setAlert("Server Error","warning"))
    }
}

export const respondToRequest =(responseData,navigate)=>async(dispatch)=>{
    try {
        const {data}=await api.responseRequest(responseData);
        dispatch(getRequestedProjects());
        dispatch(setAlert("Responded Successfully","success"))
        navigate('/admin')
    } catch (error) {
        dispatch(setAlert("Server Error","danger"))
    }
}


export const acceptOrRejectUser = (userData,navigate) => async(dispatch)=>{
    try {
        const {data}=await api.acceptOrRejectUser(userData);
        dispatch(setAlert(`${userData.status} freelancer successfully`,"success"));
        dispatch(getAllUsers());
        navigate("/admin")
    } catch (error) {
        dispatch(setAlert("Server Error","danger"))
    }
}