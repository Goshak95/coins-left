import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'redux-dom'
import { store } from './store/configureStore'
import './index.css'
import App from './App'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
)
