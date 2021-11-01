import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './containers/App'
import phrase from './store/reducers/phrase'
import authReducer from './store/reducers/auth'

import './styles/tailwind.css'
import './styles/styles.css'

const rootReducer = {
    phrase,
    auth: authReducer,
}

const store = createStore(
    combineReducers(rootReducer),
    composeWithDevTools(applyMiddleware(thunk))
)

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
