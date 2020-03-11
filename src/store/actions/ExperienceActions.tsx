
export const toggleAddModal = (open: boolean) => {
    
        return (dispatch: any, getState: any) => {
            if(open){
                dispatch({ type: 'OPEN_ADD_MODAL'})
            } else {
                dispatch({ type: 'CLOSE_ADD_MODAL'})
            }
        }
    
}

export const addExperience = (newExp: any) => {
    return (dispatch: any, getState: any, { getFirebase, getFirestore} : any) => {
        const firebase = getFirebase()
        const firestore = getFirestore()

        console.log(firebase)
        const storageRef = firebase.storage().ref('logos/'+newExp.file.name)

        const task = storageRef.put(newExp.file)

        task.on('state_changed',
            (snap: any)=> {
                const percentage = (snap.bytesTransferred / snap.totalBytes) * 100
                dispatch({ type: 'UPLOAD_LOGO_EXP_PROGRESS', percentage})
            },
            (err: any) => {
                dispatch({type: 'UPLOAD_LOGO_EXP_ERROR', err})
            },
            () => {
                dispatch({type: 'UPLOAD_LOGO_EXP_SUCCESS'})
            }
        )


        firestore.collection('experiences').add({
            ...newExp,
            file: newExp.file.name,
            createdAt: new Date()
            }).then(() => {
                        dispatch({type: "ADD_EXPERIENCE_SUCCESS", experience: newExp})
                    })
                    .catch((err: any)=> {
                        dispatch({type: "ADD_EXPERIENCE_ERROR", err})
                    })
    }
}