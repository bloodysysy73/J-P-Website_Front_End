import _ from 'lodash'
import {
    CREATE_PUBLICATIONLINECARD,
    FETCH_PUBLICATIONLINECARDS,
    FETCH_PUBLICATIONLINECARD,
    DELETE_PUBLICATIONLINECARD,
    EDIT_PUBLICATIONLINECARD,
    SORT_BY_DATE_PUBLICATIONLINECARD,
    SORT_BY_TITLE_PUBLICATIONLINECARD
} from "../actions/types";




export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_PUBLICATIONLINECARDS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        case FETCH_PUBLICATIONLINECARD:
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_PUBLICATIONLINECARD:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_PUBLICATIONLINECARD:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_PUBLICATIONLINECARD:
            return _.omit(state, action.payload)
        case SORT_BY_TITLE_PUBLICATIONLINECARD:
            return { ..._.mapKeys(action.payload, 'title') }
        case SORT_BY_DATE_PUBLICATIONLINECARD:
            return { ..._.mapKeys(action.payload, 'id') }
        default:
            return state
    }
}

//publicationLineCards : action.payload
// ..._.mapKeys(action.payload, 'id')