import { combineReducers } from 'redux'
import { LOGIN, SIGNUP, UPDATE_EMAIL, UPDATE_PASSWORD , CREATE_PARENT , deleteParent} from '../actions/parent'

const ParentUser = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return action.payload
        case SIGNUP:
            return action.payload
        case UPDATE_EMAIL:
            return { ...state, email: action.payload }
        case UPDATE_PASSWORD:
            return { ...state, password: action.payload }
        case CREATE_PARENT:
            return { ...state, password: action.CREATE_PARENT}
        default:
            return state
    }
}

const rootReducer = combineReducers({
    ParentUser
})

export default rootReducer