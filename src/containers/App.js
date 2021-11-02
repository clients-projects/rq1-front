import React from 'react'
import {
    Switch,
    Route,
    Redirect,
    withRouter,
} from 'react-router-dom'

import Home from './Home'
import Otp from '../components/Otp'
import VerifyOtp from '../components/VerifyOtp'


function App() {
   

    let AuthGuard = (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/otp' exact component={Otp} />
            <Route path='/verifyotp' exact component={VerifyOtp} />
            
            <Redirect to='/' />
       
        </Switch>
    )

    return <div className='rootApp'>{AuthGuard}</div>
}

export default withRouter(App)
