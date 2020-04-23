import _ from 'lodash'
import {
    FETCH_QUESTIONS,
    FETCH_QUESTION,
    DELETE_QUESTION,
} from "../actions/types";




export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_QUESTION:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_QUESTION:
            return _.omit(state, action.payload)
        case FETCH_QUESTIONS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        default:
            return state
    }
}
