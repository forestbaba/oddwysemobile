import { createStore, applyMiddleware, compose } from "redux";
// import { composeWithDevtools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import createSagaMiddleware from 'redux-saga'
import { logger } from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {};
const sagaMiddleWare = createSagaMiddleware();

const middleware = [thunk, sagaMiddleWare];

if (process.env.NODE_ENV === 'development') {
    middleware.push(logger)
}
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
