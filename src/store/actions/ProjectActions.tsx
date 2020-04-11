export const AddProject = (project: any) => {
    return (dispatch: any, getState: any, { getFirebase, getFirestore}: any) => {
        console.log(project)
        dispatch({type: 'ADD_PROJECT', payload: project})
    }
}

export const EditProject = (project: any, index: number) => {
    return (dispatch: any, getState: any, { getFirebase, getFirestore}: any) => {
        console.log(project)
        dispatch({type: 'EDIT_PROJECT', payload: [index, project]})
    }
}

export const GetProject = (index: number) => {
    return (dispatch: any, getState: any, { getFirebase, getFirestore}: any) => {
        console.log(index)
        dispatch({type: 'GET_PROJECT', payload: index})
    }
}