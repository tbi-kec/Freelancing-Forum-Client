import * as api from '../api'
import { setAlert } from './alert'


export const getAllProjects=()=>async(dispatch)=>{
    try {
        const {data}=await api.getAllProject();
        
        dispatch({type:'GET_PROJECTS',payload:data})
    } catch (error) {
        dispatch(setAlert("Server Error","warning"))
    }
}

export const newProject = (projectData,navigate) => async(dispatch) =>{
    try {
        await api.newProject(projectData);
        dispatch(getAllProjects());
        dispatch(setAlert("Successfully created project","success"))
        navigate("/Home")
    } catch (error) {
        console.log(error)
        dispatch(setAlert(error.response.data.message,"danger"))
    }
}



export const updateStatus = (status,navigate)=>async(dispatch)=>{
    try {
        await api.updateStatus(status);
        dispatch(getAllProjects());
        dispatch(setAlert("Progress updated","success"))
        if(status.status==='completed')
            navigate('/admin')
        else navigate(`/project/show/${status.p_id}`)
        } catch (error) {
        dispatch(setAlert("Progress not updates","danger"))
    }
}
