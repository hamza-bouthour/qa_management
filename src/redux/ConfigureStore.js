import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { bands } from './bands';
import { user } from './user';
import { bandReducer } from './band';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            bands,
            user,
            bandReducer
        }),
        composeEnhancer(applyMiddleware(thunk, logger))
    );
    return  store; 
}