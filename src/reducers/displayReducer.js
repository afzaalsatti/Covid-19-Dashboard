import {
    SET_HISTORY,
    SET_STATE
} from "../actions/actionsTypes"

const initialState = {
    historyConfirmed: {},
    historyDeaths: {},
    historyRecovered: {},
    countryCode: '',
    countryName: '',
    tableState: {}
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
        case SET_STATE: {
            return {
                ...state,
                tableState: {
                    ...action.payload
                }
            }
        }
        default:
            return state
    }
}

export default display