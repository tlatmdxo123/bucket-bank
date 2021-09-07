import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/App'
import './styles/main.scss'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import createSagaMiddlewear from 'redux-saga'
import rootSaga from './src/middleware'
import rootReducer from './src/reducers'
import logger from 'redux-logger'


const sagaMiddleware = createSagaMiddlewear()
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware,logger))
sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

