const adminReducer = (state={data:null},action)=>{
    switch(action.type){
        case 'GET_ALL_PROJECTS':
            return {...state,data:action.payload}
        default:
            return {...state}
    }
}

export default adminReducer