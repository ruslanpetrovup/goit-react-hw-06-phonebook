import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from "./redux/store"


// console.log(store.dispatch(action()))
ReactDOM.render(
    <Provider store={store} ><App /></Provider>, document.getElementById('root'))