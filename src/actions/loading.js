export const getLoading = (data)=>async(dispatch)=>{
    dispatch({type:"SET",payload:data})
}
