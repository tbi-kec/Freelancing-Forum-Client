import * as api from '../api'
import { setAlert } from './alert'


export const getAllProjects=()=>async(dispatch)=>{
    try {
        const {data}=await api.getAllProject();
        console.log(data)
        dispatch({type:'GET_PROJECTS',payload:data})
    } catch (error) {
        dispatch(setAlert("Server Error","warning"))
    }
}

export const newProject = (projectData,navigate) => async(dispatch) =>{
    try {
        const {data}=await api.newProject(projectData);
        dispatch(getAllProjects());
        dispatch(setAlert("Successfully created project","success"))
        navigate("/")
    } catch (error) {
        console.log(error)
        dispatch(setAlert(error.response.data.message,"danger"))
    }
}

