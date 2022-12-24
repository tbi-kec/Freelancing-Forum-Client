const constantReducer = (state={data:null},action)=>{
    switch(action.type){
        case 'GET_CONSTANTS':
            return {...state,data:action.payload}
        default:
            return {...state}
    }
}

export default constantReducer

