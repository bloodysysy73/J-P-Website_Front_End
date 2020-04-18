import _ from 'lodash'
import {
    CREATE_UTILISATEUR,
    FETCH_UTILISATEUR,
    FETCH_UTILISATEURS,
    EDIT_UTILISATEUR,
    DELETE_UTILISATEUR,
    SORT_BY_LOGIN_USER,
    SORT_BY_DATE_USER,
    FETCH_UTILISATEUR_LOGIN,
    EDIT_UTILISATEURIMG
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_UTILISATEURS:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        case FETCH_UTILISATEUR:
            return { ...state, [action.payload.id]: action.payload }
        case FETCH_UTILISATEUR_LOGIN:
            return { ...state, utilisateur: action.payload }
        case CREATE_UTILISATEUR:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_UTILISATEUR:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_UTILISATEURIMG:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_UTILISATEUR:
            return _.omit(state, action.payload)
        case SORT_BY_LOGIN_USER:
            return { ..._.mapKeys(action.payload, 'login') }
        case SORT_BY_DATE_USER:
            return { ..._.mapKeys(action.payload, 'id') }
        default:
            return state
    }
}
