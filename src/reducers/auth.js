const authReducer = (state={},action)=>{
    switch(action.type){
        case 'AUTH':
            localStorage.setItem('freelance',JSON.stringify({...action.payload}))
            return {...state}
        default:
            return {...state}
    }
}

export default authReducer