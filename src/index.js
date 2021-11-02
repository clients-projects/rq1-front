import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './containers/App'


import './styles/tailwind.css'
import './styles/styles.css'



const app = (
        <BrowserRouter>
            <App />
        </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'))
