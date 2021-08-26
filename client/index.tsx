import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/App'
import './styles/main.scss'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './src/reducers'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

