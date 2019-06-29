import React, { Component } from 'react';
import Logo from '../../component/logo/logo';
import {List, InputItem, WingBlank, Radio, WhiteSpace, Button} from 'antd-mobile';
import {connect} from 'react-redux';
import {register} from '../../redux/user.redux';
import {Redirect} from 'react-router-dom'

class Register extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      pwd: '',
      repeatpwd: '',
      type: 'genius' // 或者'boss'
    };
    this.register = this.register.bind(this);
  }

  register () {
    this.props.register(this.state);
  }

  handleChange (key, val) {
    this.setState({
      [key]: val
    })
  }

  render() {
    const RadioItem = Radio.RadioItem;
    return (
      <div>
        <Logo/>
        <h2>注册页面</h2>
        {
          this.props.user.msg !== '' ? <p style={{paddingLeft: '10px', color: '#f50'}}>{this.props.user.msg}</p> : null
        }
        {
          this.props.user.redirectTo ? <Redirect to={this.props.user.redirectTo}/> : null 
        }
        <WingBlank>
          <List>
            <InputItem onChange={v => this.handleChange('user', v)}>用户名</InputItem>
            <InputItem onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
            <InputItem onChange={v => this.handleChange('repeatpwd', v)}>确认密码</InputItem>
            <WhiteSpace/>
            <RadioItem 
              checked={this.state.type==='genius'}  
              onChange={v => this.handleChange('type', 'genius')}>牛人</RadioItem>
            <RadioItem 
              checked={this.state.type==='boss'}
              onChange={v => this.handleChange('type', 'boss')}>BOSS</RadioItem>
          </List>
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
    register: (...args) => dispatch(register(...args))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)