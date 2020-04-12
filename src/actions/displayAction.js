import {
    SET_HISTORY,
    SET_STATE
} from './actionsTypes'

export const setHistory = (data) => {
    return {
        type: SET_HISTORY,
        payload: data
    }
}

export const setState = (data) => {
    return {
        type: SET_STATE,
        payload: data
    }
}