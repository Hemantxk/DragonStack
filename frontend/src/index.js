import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import Generation from './components/Generation';
import Dragon from './components/Dragon';

import './index.css';

const store = createStore(
    rootReducer,
    compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

render(
    <Provider store={store}>
        <div>
            <Generation />
            <Dragon />
        </div>
    </Provider>,
    document.getElementById('root')
);