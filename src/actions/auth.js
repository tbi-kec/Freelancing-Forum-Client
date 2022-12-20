import * as api from '../api'
export const login  = (authData,navigate) => async(dispatch) =>{
    try {
        const {data}=await api.login(authData)
        dispatch({type:"AUTH",payload:data})
    } catch (error) {
        alert(error.message)
    }
}

export const signup = (authData,navigate) => async(dispatch) =>{
    try {
        console.log("in login",authData)
        const {data}=await api.signup(authData)
        dispatch({type:"AUTH",payload:data})
        navigate("/profile/create")
    } catch (error) {
        alert(error.message)
    }
}