import React from 'react';
import './App.css';

function App(props) {
  let store = props.store
  let counter = store.getState();
  let {
    add,
    minus,
    addAsync
  } = props
  return (
    <div className="App">
      The Counter is {counter}     
      <button onClick={() => { store.dispatch(add())}}>Add</button> 
      <button onClick={() => { store.dispatch(minus())}}>Minus</button> 
      <button onClick={() => { store.dispatch(addAsync())}}>AddAsync</button> 
    </div>
  );
}

export default App;
