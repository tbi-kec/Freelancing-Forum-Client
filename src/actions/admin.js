import * as api from '../api'
import { setAlert } from './alert'
import { getAllUsers } from './user';
import { getLoading } from './loading';

export const getRequestedProjects=()=>async(dispatch)=>{
    try {
        const {data}=await api.getProjectHistory();
        dispatch({type:'GET_ALL_PROJECTS',payload:data})
    } catch (error) {
        dispatch(setAlert("Server Error","warning"))
    }
}

export const respondToRequest =(responseData,navigate)=>async(dispatch)=>{
    try {
        dispatch(getLoading(true))
        await api.responseRequest(responseData);
        dispatch(getRequestedProjects());
        dispatch(getLoading(false))
        dispatch(setAlert("Responded Successfully","success"))
        navigate('/admin/request')
    } catch (error) {
         dispatch(getLoading(false))
        dispatch(setAlert("Server Error","danger"))
    }
}


export const acceptOrRejectUser = (userData,navigate) => async(dispatch)=>{
    try {
        dispatch(getLoading(true))
        await api.acceptOrRejectUser(userData);
        dispatch(getAllUsers());
        dispatch(getLoading(false))
        dispatch(setAlert(`${userData.status} freelancer successfully`,"success"));
        navigate("/admin/approval")
    } catch (error) {
         dispatch(getLoading(false))
        dispatch(setAlert("Server Error","danger"))
    }
}

export const createAdmin = (userData,navigate)=>async(dispatch)=>{
    try {
        dispatch(getLoading(true))
        await api.createAdmin(userData);
        dispatch(getLoading(false))
        dispatch(setAlert("Admin created successfully","success"))
        navigate('/admin')
    } catch (error) {
         dispatch(getLoading(false))
        dispatch(setAlert("Server Error","danger"))
    }
}