import * as actionTypes from '../actions/actionTypes'
import update from '../utility'

const initialState = {
    error: null,
    loading: false,
    getAllPhrases: []
  
}
const deleteStart = (state, action) => {
    return update(state, {
        loading: true,
    })
}
const deleteSuccess = (state, action) => {
    return update(state, {
        loading: false,
        deleted: action.data.createdAt,
    })
}

const deleteFailed = (state, action) => {
    return update(state, {
        loading: false,
        error: action.err,
    })
}
const putPhraseStart = (state, action) => {
    return update(state, {
        loading: true,
    })
}
const putPhraseSuccess = (state, action) => {
    return update(state, {
        loading: false,
        putPhrase: action.data.createdAt,
        id: action.data._id
    })
}

const getAllPhrases = (state, action) => {

    
    return update(state, {
        loading: false,
        getAllPhrases: action.data.getPhrase
    })
}
const putPhraseFailed = (state, action) => {
    return update(state, {
        loading: false,
        error: action.err
    })
}




const phrase = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PUT_PHRASE_START:
            return putPhraseStart(state, action)
        case actionTypes.PUT_PHRASE_SUCCESS:
            return putPhraseSuccess(state, action)
        case actionTypes.GET_PHRASE_SUCCESS:
            return getAllPhrases(state, action)
        case actionTypes.PUT_PHRASE_FAILED:
            return putPhraseFailed(state, action)
        case actionTypes.DELETE_START:
            return deleteStart(state, action)
        case actionTypes.DELETE_SUCCESS:
            return deleteSuccess(state, action)
        case actionTypes.DELETE_FAILED:
            return deleteFailed(state, action)
       

        default:
            return state
    }
}

export default phrase
