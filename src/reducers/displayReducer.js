import {
    SET_HISTORY
} from "../actions/actionsTypes"

const initialState = {
    historyConfirmed: {},
    historyDeaths: {},
    historyRecovered: {},
    countryCode: '',
    countryName: ''
}

const display = (state = initialState, action) => {
    switch (action.type) {
        case SET_HISTORY: {
            return {
                ...state,
                historyConfirmed: action.payload.historyConfirmed,
                historyDeaths: action.payload.historyDeaths,
                historyRecovered: action.payload.historyRecovered,
                countryName: action.payload.country,
                countryCode: action.payload.countryCode
            }
        }
        default:
            return state
    }
}

export default display