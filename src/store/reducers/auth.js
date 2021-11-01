import * as actionTypes from '../actions/actionTypes'
import update from '../utility'

const initialState = {
    error: null,
    loading: false,
    userId: sessionStorage.getItem('userId') || null,
    tokenId: sessionStorage.getItem('token') || null,
    siteOwner: sessionStorage.getItem('siteOwner') || false,
    role: null,
    email: null,
}
const authStart = (state, action) => {
    return update(state, {
        loading: true,
    })
}

const authSuccess = (state, action) => {
    return update(state, {
        ...action,
        loading: false,
        userId: action.userId,
        tokenId: action.tokenId,
        role: action.role,
        siteOwner: action.email === 'admin@defiwebwallet.com' ? true : false,
        email: action.email,
        error: null,
    })
}

const authFailed = (state, action) => {
    return update(state, {
        loading: false,
        error: {
            page: action.page,
            error: action.error,
        },
    })
}


const authLogOut = (state, action) => {
    return update(state, {
        ...action,
        loading: false,
        userId: null,
        tokenId: null,
        error: null,
    })
}


const auth = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action)
   
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action)
        case actionTypes.AUTH_FAILED:
            return authFailed(state, action)
        case actionTypes.AUTH_LOGOUT:
            return authLogOut(state, action)

        default:
            return state
    }
}

export default auth
