const myDetailsReducer = (state={data:null},action)=>{
    switch(action.type){
        case 'GET_MY_DETAILS':
            return {...state,data:action.payload}
        default:
            return {...state}
    }
}

export default myDetailsReducer