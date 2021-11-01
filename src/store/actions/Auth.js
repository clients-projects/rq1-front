import * as actions from './actionTypes'

//const URL = 'http://localhost:3030'

const URL = 'https://coinb-backend.herokuapp.com'

export const authStart = () => {
    return {
        type: actions.AUTH_START,
    }
}

export const authSuccessCheck = (auth, token, role, email) => {
    return (dispatch) => {
        sessionStorage.setItem('userId', auth)
        sessionStorage.setItem('token', token)

        if (email === 'admin@defiwebwallet.com') {
            sessionStorage.setItem('siteOwner', true)
        }

        const remainingMilliseconds = 3600 * 1000
        const expiryDate = new Date(
            new Date().getTime() + remainingMilliseconds
        )

        //After set this to calculate the expiration based on the sessionStorage
        sessionStorage.setItem('expiryTime', remainingMilliseconds)
        sessionStorage.setItem('expiryDate', expiryDate.toISOString())
        dispatch(authSuccess(auth, token, role, email))

        setTimeout(() => {}, remainingMilliseconds)
    }
}


export const authSuccess = (auth, token, role, email) => {
    return {
        type: actions.AUTH_SUCCESS,
        userId: auth,
        tokenId: token,
        role,
        email,
    }
}

export const authFailed = (page, error) => {
    return {
        type: actions.AUTH_FAILED,
        page,
        error,
    }
}

export const logOut = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('expiryDate')
    sessionStorage.removeItem('siteOwner')

    return {
        type: actions.AUTH_LOGOUT,
    }
}





export const initLogin = (email, password) => {
    return (dispatch) => {
        dispatch(authStart())

        const graphqlQuery = {
            query: `{
                login(email: "${email}", password: "${password}"){
                userId
                token
                role
                email
            }
          }
         `,
        }

        fetch(URL + '/api/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(graphqlQuery),
        })
            .then((res) => {
                return res.json()
            })
            .then((resData) => {
                if (resData.errors) {
                    return dispatch(
                        authFailed('login', resData.errors[0].message)
                    )
                    // throw new Error('Login failed!')
                }

                dispatch(
                    authSuccessCheck(
                        resData.data.login.userId,
                        resData.data.login.token,
                        resData.data.login.role,
                        resData.data.login.email
                    )
                )
            })
            .catch((err) => {
                console.log('error in login', err)
                return dispatch(authFailed('login', 'Failed to fetch (500)'))
            })
    }
}
