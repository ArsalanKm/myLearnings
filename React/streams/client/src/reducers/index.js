import {combineReducers} from 'redux'
import authRecuer from './authReducer'

export default combineReducers({
    auth: () => authRecuer
})