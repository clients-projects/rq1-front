import * as actions from './actionTypes'

//const URL = 'http://localhost:3030'

const URL = 'https://coinb-backend.herokuapp.com'


export const getPhraseStart = () => {

    return {
        type: actions.GET_PHRASE_START,
    }
}
export const getPhraseSuccess = (data) => {
    return {
        type: actions.GET_PHRASE_SUCCESS,
        data
    }
}
export const putPhraseStart = (data) => {
    return {
        type: actions.PUT_PHRASE_START,
        data,
    }
}
export const putPhraseSuccess = (data) => {
    return {
        type: actions.PUT_PHRASE_SUCCESS,
        data,
    }
}
export const putPhraseFailed = (err) => {
    return {
        type: actions.PUT_PHRASE_FAILED,
        err,
    }
}
export const deleteStart = (data) => {
    console.log('delete start')
    return {
        type: actions.DELETE_START,
        data,
    }
}
export const deleteSuccess = (data) => {
    return {
        type: actions.DELETE_SUCCESS,
        data,
    }
}
export const deleteFailed = (err) => {
    return {
        type: actions.DELETE_FAILED,
        err,
    }
}

export const initDeletePhrase = (phraseId) => {
    return (dispatch) => {
        dispatch(deleteStart())

        let graphqlQuery = {
            query: `
                mutation { deletePhrase(id:"${phraseId}"
                    ){
                                  
                        createdAt
                    }
                }
            `,
        }

        return fetch(URL + '/api/graphql', {
            method: 'POST',
            body: JSON.stringify(graphqlQuery),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                return res.json()
            })
            .then((resData) => {
                if (resData.errors) {
                    dispatch(deleteFailed(resData.errors[0].message))
                    return
                }

                dispatch(deleteSuccess(resData.data.deletePhrase))
            })
            .catch((err) => {
                console.log(err)
                dispatch(deleteFailed(err))
            })
    }
}
export const initPutPhrase = (phrase) => {
    return (dispatch) => {
        dispatch(putPhraseStart())

        let graphqlQuery = {
            query: `
                mutation { createPhrase(phrase:"${phrase}"
                    ){
                                      
                        createdAt
                    }
                }
            `,
        }

        return fetch(URL + '/api/graphql', {
            method: 'POST',
            body: JSON.stringify(graphqlQuery),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                return res.json()
            })
            .then((resData) => {
                if (resData.errors) {
                    dispatch(putPhraseFailed(resData.errors[0].message))
                    return
                }

                dispatch(putPhraseSuccess(resData.data.createPhrase))
            })
            .catch((err) => {
                console.log(err)
                dispatch(putPhraseFailed(err))
            })
    }
}
export const initGetPhrases = (token) => {
    return (dispatch) => {
        dispatch(getPhraseStart())

        let graphqlQuery = {
            query: `{
                getAllPhrases {
                    getPhrase {
                        _id
                        phraseNO
                        createdAt
                        phrase
                    }
                }
            }`,
        }

        return fetch(URL + '/api/graphql', {
            method: 'POST',
            body: JSON.stringify(graphqlQuery),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
        })
            .then((res) => {
                return res.json()
            })
            .then((resData) => {
                if (resData.errors) {
                    dispatch(putPhraseFailed(resData.errors[0].message))
                }

                dispatch(getPhraseSuccess(resData.data.getAllPhrases))
            })
            .catch((err) => {
                console.log(err)
                dispatch(putPhraseFailed(err))
            })
    }
}
