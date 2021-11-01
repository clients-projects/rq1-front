import React, { useEffect, useRef } from 'react'
import {
    Switch,
    Route,
    Redirect,
    withRouter,
} from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../store/actions'
import Home from './Home'
import Dashboard from './Dashboard'

import LoginPage from './Login'

function App(props) {
    console.log('update')
    const ref = useRef()
    useEffect(() => {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        if (!ref.current) {
            if (token) {
                props.onCheckState(token, userId)
            } 
        }
        ref.current = true
    }, [props])

    let AuthGuard = (
        <Switch>
            <Route
                path='/'
                exact
                component={Home}
            />
            <Route
                path='/Auth/login'
                component={LoginPage}
            />

            <Redirect to='/' />
        </Switch>
    )
    if (props.auth) {
        AuthGuard = (
            <Switch>
                <Route path='/' exact component={Home} />
                <Route
                    path='/Auth/login'
                    render={(props) => <LoginPage {...props} />}
                />
                <Route
                    path='/admin'
                    render={(props) => <Dashboard {...props} />}
                />{' '}
                <Redirect to='/' />
            </Switch>
        )
    }

    return <div className='rootApp'>{AuthGuard}</div>
}

const mapStateToProps = (state) => {
    return {
        siteOwner: state.auth.siteOwner,
        auth: state.auth.tokenId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCheckState: (tokenId, userId) =>
            dispatch(actions.authSuccess(tokenId, userId)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
