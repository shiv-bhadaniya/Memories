import React from 'react'
import ReactDom from "react-dom"
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";


import App from "./App";
import {reducers } from "./reducers";
import "./index.css";

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(), compose(applyMiddleware(thunk)))
)

ReactDom.render(

    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root")
)