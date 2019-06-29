import React, { Component } from 'react'
import Logo from '../../component/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile';
import {login} from '../../redux/user.redux';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

 class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: '',
      pwd: ''
    }
    this.register = this.register.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  register () {
    this.props.history.push('/register')
  }

  handleLogin () {
    this.props.login(this.state);
  }

  handleChange (key, val) {
    this.setState({
      [key]: val
    })
  }

  render() {
    return (
      <div>
        <Logo/>
        <WingBlank>
          {
            this.props.user.msg !== '' ? <p style={{paddingLeft: '10px', color: '#f50'}}>{this.props.user.msg}</p> : null
          }
          {
            this.props.user.redirectTo ? <Redirect to={this.props.user.redirectTo}/> : null 
          }
          <List>
            <InputItem onChange={v => this.handleChange('user', v)}>用户</InputItem>
            <WhiteSpace/>
            <InputItem type="password" onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
          </List>
          <WhiteSpace/>
          <Button type="primary" onClick={this.handleLogin}>登录</Button>
          <WhiteSpace/>
          <Button
            type="primary"
            onClick={this.register}
          >注册</Button>
        </WingBlank>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (...args) => dispatch(login(...args))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)