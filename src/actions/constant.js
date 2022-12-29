import * as api from '../api'
import { setAlert } from './alert'


export const getConstants=()=>async(dispatch)=>{
    try {
        const {data}=await api.getConstants();
        dispatch({type:'GET_CONSTANTS',payload:data})
    } catch (error) {
        dispatch(setAlert("Server Error","warning"))
    }
}


