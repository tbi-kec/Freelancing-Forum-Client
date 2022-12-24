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


