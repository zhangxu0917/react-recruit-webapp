import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Login from './container/login/login.jsx';
import Register from './container/register/register.jsx';
import AuthRoute from './component/authroute/autoroute.jsx';
import BossInfo from './container/bossinfo/bossinfo';
import GeniusInfo from './container/geniusinfo/geniusinfo.jsx';
import Dashboard from './component/dashboard/dashboard.jsx';
import reducers from './reducer';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';

// FIXME: 新建store
const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AuthRoute></AuthRoute>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/bossinfo" component={BossInfo}/>
        <Route path="/geniusinfo" component={GeniusInfo}/>
        <Route component={Dashboard}/>
      </Switch>
    </Router>
  </Provider>
, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
