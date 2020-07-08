import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'react-router-redux';
import {applyMiddleware, createStore, Middleware} from 'redux';
import {createLogger} from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer';



export const history = createBrowserHistory();

const persistedReducer = persistReducer({
    key: 'homfy-data',
    storage,
    whitelist: ['auth',],
}, rootReducer);

const middleware: Middleware[] = [
    thunkMiddleware,
    routerMiddleware(history),
];
if (process.env.NODE_ENV === 'development') {
    middleware.push(createLogger());
}
const store = createStore(persistedReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);
export default store;
