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
       
        </Switch>
    )

    return <div className='rootApp'>{AuthGuard}</div>
}

export default App
