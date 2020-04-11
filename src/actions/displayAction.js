import {
    SET_HISTORY
} from './actionsTypes'

export const setHistory = (data) => {
    return {
        type: SET_HISTORY,
        payload: data
    }
}