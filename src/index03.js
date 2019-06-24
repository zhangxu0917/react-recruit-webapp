import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import * as serviceWorker from './serviceWorker';

// FIXME: 新建store
// 通过reducer建立
// 根据老的state和action，生成新的state
function counter(state=0, action) {
  const {type} = action
  switch (type) {
    case 'ADD':
      return state + 1;
    case 'MINUS':
      return state - 1;
    default:
      return state;
  }
}

// FIXME: 新建store
const store = createStore(counter)

const init = store.getState();
console.log(init)

function listener() {
  const current = store.getState()
  console.log(`The current is ${current}`);
}
// FIXME: 订阅监听器函数
store.subscribe(listener);

// FIXME: 派发事件，通过action
store.dispatch({type: 'ADD'});
store.dispatch({type: 'ADD'});
store.dispatch({type: 'ADD'});
store.dispatch({type: 'MINUS'});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
