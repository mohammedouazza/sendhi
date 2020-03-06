export const ToggleSidebar = () => {
    console.log('TOGGLE_SIDEBAR')
    return (dispatch: any, getState: object) => {
        dispatch({ type: 'TOGGLE_SIDEBAR' })
    }
}