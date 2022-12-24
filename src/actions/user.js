import * as api from '../api'
import { setAlert } from './alert'


export const getAllUsers=()=>async(dispatch)=>{
    try {
        const {data}=await api.getAllUser();
        console.log(data)
        dispatch({type:'GET_ALL_USERS',payload:data})
    } catch (error) {
        dispatch(setAlert("Server Error","warning"))
    }
}



