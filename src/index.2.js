import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App02';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import counter, {add, minus, addAsync} from './index.redux'
import * as serviceWorker from './serviceWorker';

// FIXME: 新建store


// FIXME: 新建store
const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : () => {}
) )

function render () {
 ReactDOM.render(<App store={store} add={add} minus={minus} addAsync={addAsync}/>, document.getElementById('root'));
}
render()
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
