import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import {add, minus, addAsync} from './index.redux'

function App(props) {
  let counter = props;
  let {
    add,
    minus,
    addAsync
  } = props
  return (
    <div className="App">
      The Counter is {counter}     
      <button onClick={add}>Add</button> 
      <button onClick={minus}>Minus</button> 
      <button onClick={addAsync}>AddAsync</button> 
    </div>
  );
}

function mapStateToProps (state) {
  return { 
    counter: state
  }
} 

const actionCreator = {
  add,
  minus,
  addAsync
}

App = connect(mapStateToProps, actionCreator)(App)
export default App;
