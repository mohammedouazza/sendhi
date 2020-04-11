const initialState = {
    sidebarOpen: false
}

const HeaderReducer = (state = initialState, action: any) => {
    console.log(state)
    switch (action.type) {
        case 'TOGGLE_SIDEBAR':
            return {
                ...state,
                sidebarOpen: !state.sidebarOpen
            }
    
        default:
            return state
    }
}

export default HeaderReducer