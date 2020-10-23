import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'; //Must import in order for react and redux to be linked
import rootReducer from './rootReducer';
import {Provider} from 'react-redux';

const store = createStore(rootReducer); //Google redux dev tool link must be pasted next to the rootReducer, does not seem to work on linux tho 

ReactDOM.render(
  //After we link Provider with the redux store we allow for any react component to get acces to the store
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
