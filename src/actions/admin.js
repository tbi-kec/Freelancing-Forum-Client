import * as api from '../api'
import { setAlert } from './alert'


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
        navigate('/admin')
        dispatch(getRequestedProjects());
        dispatch(setAlert("Responded Successfully","success"))
    } catch (error) {
        dispatch(setAlert("Server Error","danger"))
    }
}


