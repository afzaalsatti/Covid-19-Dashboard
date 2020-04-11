import {
    SET_HISTORY
} from "../actions/actionsTypes"

const initialState = {
    historyConfirmed: {}
}

const display = (state = initialState, action) => {
    switch (action.type) {
        case SET_HISTORY: {
            return {
                ...state,
                historyConfirmed: action.payload
            }
        }
        default:
            return state
    }
}

export default display