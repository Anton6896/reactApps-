import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger'
import thunk from "redux-thunk";
import rootReducer from './reducers'

const initialState = {}
const middleware = [logger, thunk]

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store
