import _ from 'lodash'
import {
    CREATE_TIMELINECARD,
    FETCH_TIMELINECARDS,
    FETCH_TIMELINECARD,
    DELETE_TIMELINECARD,
    EDIT_TIMELINECARD,
    SORT_BY_TITLE_TIMELINECARD,
    SORT_BY_DATE_TIMELINECARD,
    EDIT_TIMELINECARD_IMG
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
        case SORT_BY_TITLE_TIMELINECARD:
            return { ..._.mapKeys(action.payload, 'title') }
        case SORT_BY_DATE_TIMELINECARD:
            return { ..._.mapKeys(action.payload, 'id') }
        case EDIT_TIMELINECARD_IMG:
            return { ...state, [action.payload.id]: action.payload }
        default:
            return state
    }
}
