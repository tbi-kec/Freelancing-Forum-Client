const projectReducer = (state={data:null},action)=>{
    switch(action.type){
        case 'GET_PROJECTS':
            return {...state,data:action.payload}
        default:
            return {...state}
    }
}

export default projectReducer;