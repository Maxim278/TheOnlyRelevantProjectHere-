import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import App from './App';
import store from "./Redux/ReduxStore";
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

//rerenderWholeTree();
//store.subscribe(rerenderWholeTree); connect делает свой subscribe на нижнем уровне, вместо перерисовки всего дерева.