import React, { useEffect, useRef } from 'react'
import {
    Switch,
    Route,
    Redirect,
    withRouter,
} from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home'


function App(props) {
   

    let AuthGuard = (
        <Switch>
            <Route path='/' exact component={Home} />
            <Redirect to='/' />
            {/* <Route
                path='/Auth/login'
                component={LoginPage}
            />

           */}
        </Switch>
    )
    if (props.auth) {
        AuthGuard = (
            <Switch>
                <Route path='/' exact component={Home} />
                {/* <Route
                    path='/Auth/login'
                    render={(props) => <LoginPage {...props} />}
                />
                <Route
                    path='/admin'
                    render={(props) => <Dashboard {...props} />}
                />{' '} */}
                <Redirect to='/' />
            </Switch>
        )
    }

    return <div className='rootApp'>{AuthGuard}</div>
}

export default App
