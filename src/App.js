import {Provider} from 'react-redux';
import store from './store';
import React from 'react';
import Router from './Router';


// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
// const store = createStoreWithMiddleware(reducers);


export default class App extends React.Component{

  render() {
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

