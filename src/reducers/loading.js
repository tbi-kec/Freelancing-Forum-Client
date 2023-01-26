const initialState = {
    loading:false
}

const loadingReducer = (state={initialState},action)=>{
    switch(action.type){
        case "toggle":
            return {...state,loading:!state.loading}
        default:
            return {...state}
    }
}

export default loadingReducer;