import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App02';
import {createStore} from 'redux'
import counter, {add, minus} from './index.redux'
import * as serviceWorker from './serviceWorker';

// FIXME: 新建store


// FIXME: 新建store
const store = createStore(counter)

function render () {
 ReactDOM.render(<App store={store} add={add} minus={minus}/>, document.getElementById('root'));
}
render()
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
