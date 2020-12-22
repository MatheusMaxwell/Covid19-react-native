import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithTools} from 'redux-devtools-extension';

import rootReducer from './reducers';

const initialState = {

};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;