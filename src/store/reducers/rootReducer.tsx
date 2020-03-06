import { combineReducers } from 'redux'
import HeaderReducer from './HeaderReducer';

const rootReducer = combineReducers({
    header: HeaderReducer
})

export default rootReducer