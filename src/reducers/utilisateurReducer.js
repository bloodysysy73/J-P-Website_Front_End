import _ from 'lodash'
import {
    CREATE_UTILISATEUR,
    FETCH_UTILISATEUR,
    FETCH_UTILISATEURS,
    EDIT_UTILISATEUR,
    DELETE_UTILISATEUR
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_UTILISATEURS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        case FETCH_UTILISATEUR:
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_UTILISATEUR:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_UTILISATEUR:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_UTILISATEUR:
            return _.omit(state, action.payload)
        default:
            return state
    }
}
