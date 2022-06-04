import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { generationReducer } from './reducers/index';
import { generationActionCreator } from './actions/generation';
import Generation from './components/Generation';
import Dragon from './components/Dragon';

import './index.css';

const store = createStore(generationReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => console.log('state updated', store.getState()));

fetch('http://localhost:3000/generation')
.then(response => response.json())
.then(json => store.dispatch(generationActionCreator(json.generation)))
.catch(error => console.error(error));

render(
    <Provider store={store}>
        <div>
            <h2>Dragon Stack</h2>
            <Generation />
            <Dragon />
        </div>
    </Provider>,
    document.getElementById('root')
);