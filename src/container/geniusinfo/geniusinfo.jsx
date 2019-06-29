import React, { Component } from 'react'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile';
import AvatarSelector from '../../component/avatar-selector/avatar-selector.jsx';
import {connect} from 'react-redux';
import {update} from '../../redux/user.redux.js';
import {Redirect} from 'react-router-dom';

class GeniusInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      avatar: '',
      desc: '',
    };
  }

  selectAvatar () {}

  onChange (title, value) {
    this.setState({
      [title]: value 
    })
  }

  render() {
    const path = this.props.location.pathname;
    const redirect = this.props.redirectTo;
    return (
      <div>
        {redirect && redirect !== path ? <Redirect to={this.props.redirectTo}></Redirect> : null}
        <NavBar
          mode="dark"
        >牛人完善信息页</NavBar> 
        <AvatarSelector selectAvatar={(imgName) => {
          this.setState({
            avatar: imgName
          })
        }}/>
        <InputItem onChange={v => this.onChange('title', v)}>求值岗位</InputItem>
        <TextareaItem onChange={v => this.onChange('desc', v)} rows={3} autoHeight title="个人简介"/>
        <Button 
          type="primary"
          onClick={() => {
            this.props.update(this.state)
          }}
        >保存</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    update: (...args) => dispatch(update(...args))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GeniusInfo)