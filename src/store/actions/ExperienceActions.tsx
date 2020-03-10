export const toggleAddModal = (open: boolean) => {
    
        return (dispatch: any, getState: any) => {
            if(open){
                dispatch({ type: 'OPEN_ADD_MODAL'})
            } else {
                dispatch({ type: 'CLOSE_ADD_MODAL'})
            }
        }
    
}
