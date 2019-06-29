import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {loadData} from '../../redux/user.redux';
import {connect} from 'react-redux';

class autoroute extends Component {
  componentDidMount () {
    /**
     * 是否登录
     * 现在的url地址 login和register是不需要跳转的
     * 用户的type 身份是boss还是牛人
     * 用户是否完善信息（选择头像、个人简介）
     */
    const publicList = ['/login', '/register'];
    const pathname = this.props.location.pathname;

    if (publicList.includes(pathname)) {
      return null;
    }
    axios.get('/user/info').then(res => {
      if (res.status === 200) {
        console.log(res.data);
        this.props.loadData(res.data.data);
      } else {
        this.props.history.push('/login');
      }
    })
  }

  render() {
    return null
  }
}


const mapStateToProps = (state) => {
  return null;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadData: (...args) => dispatch(loadData(...args))
  }
}


// 导出的是 withRouter(Nav) 函数执行
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(autoroute))