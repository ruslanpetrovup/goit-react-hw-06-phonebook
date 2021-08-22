import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import storeList from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
    <Provider store={storeList.store} >
        <PersistGate loading={null} persistor={storeList.persistor}>
        <App />
        </PersistGate >
    </Provider>,
    document.getElementById('root'))