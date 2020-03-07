import { combineReducers } from 'redux'
import HeaderReducer from './HeaderReducer';
import ExperienceReducer from './ExperienceReducer';

const rootReducer = combineReducers({
    header: HeaderReducer,
    experience: ExperienceReducer
})

export default rootReducer