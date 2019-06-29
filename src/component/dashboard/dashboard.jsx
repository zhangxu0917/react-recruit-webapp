import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {NavBar, Icon, TabBar} from 'antd-mobile';
import {connect} from 'react-redux';
import Boss from '../../container/boss/boss';
import Genius from '../../container/genius/genius';
import Msg from '../../container/msg/msg';
import User from '../../container/user/user';
import Navlink from '../navlink/navlink';

class Dashboard extends Component {
	render() {
		const {pathname} = this.props.location;
		let user = this.props.user;
		const navList = [{
			path: '/boss',
			text: '牛人',
			icon: 'boss',
			title: '牛人列表',
			component: Genius ,
			hide: user.type === 'genius'
		}, {
			path: '/genius',
			text: 'Boss',
			icon: 'job',
			title: 'Boss列表',
			component: Boss,
			hide: user.type === 'boss'
		}, {
			path: '/msg',
			text: '消息',
			icon: 'msg',
			title: '消息列表',
			component: Msg,
		}, {
			path: '/me',
			text: '我',
			icon: 'user',
			title: '个人中心',
			component: User,
		}];

		return (
			<div>
				<NavBar className={"fixed-header"} mode="dark">{navList.find(v => v.path === pathname).title}</NavBar>
				<div style={{marginTop: 45}}>
					<Switch>
						{
							navList.map(v => (
								<Route
									key={v.path}
									path={v.path}
									component={v.component}
								/>
							))
						}
					</Switch>
				</div>
				<Navlink data={navList}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		// register: (...args) => dispatch(register(...args))
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard)
