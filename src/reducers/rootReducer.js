import {
    combineReducers
} from 'redux'
import displayReducer from './displayReducer'

const rootReducer = combineReducers({
    display: displayReducer
})

export default rootReducer