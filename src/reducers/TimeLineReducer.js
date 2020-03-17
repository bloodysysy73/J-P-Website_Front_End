import _ from 'lodash'
import {
    CREATE_TIMELINECARD,
    FETCH_TIMELINECARDS,
    FETCH_TIMELINECARD,
    DELETE_TIMELINECARD,
    EDIT_TIMELINECARD
} from "../actions/types";




export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_TIMELINECARDS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        case FETCH_TIMELINECARD:
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_TIMELINECARD:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_TIMELINECARD:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_TIMELINECARD:
            return _.omit(state, action.payload)
        default:
            return state
    }
}
