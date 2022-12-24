const userReducer = (state={data:null},action)=>{
    switch(action.type){
        case 'GET_ALL_USERS':
            return {...state,data:action.payload}
        default:
            return {...state}
    }
}

export default userReducer