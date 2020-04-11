import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import {createStore, combineReducers,applyMiddleware,compose} from 'redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
// import counterReducer from '../src/store/reducer'
// import resultReducer from './store/resultReducer';

import reducer from './store/reducer/reducer'
import rootReducer from './store/reducer/rootReducer';

const logger = store => {
    return next => {
        return action => {

            const result=next(action)
            return result
        }
    }
}
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const myStore = createStore(reducer,applyMiddleware(logger,thunk))


ReactDOM.render(<Provider store = {myStore} > <App/></Provider>, document.getElementById('root'));
registerServiceWorker();