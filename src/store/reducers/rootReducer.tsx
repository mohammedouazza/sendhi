import { combineReducers } from 'redux'
import HeaderReducer from './HeaderReducer';
import ExperienceReducer from './ExperienceReducer';
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import ProjectReducer from './ProjectReducer';

const rootReducer = combineReducers({
    header: HeaderReducer,
    experience: ExperienceReducer,
    project: ProjectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer