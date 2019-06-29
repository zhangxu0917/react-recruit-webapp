import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Result, List, WhiteSpace, Modal} from 'antd-mobile';
import cookies from 'browser-cookies';
import {Redirect} from 'react-router-dom'
import {logoutSubmit} from '../../redux/user.redux'

const alert = Modal.alert;

class User extends Component {
	logout() {
		alert('注销', '确认要退出么?', [
			{text: '取消', onPress: () => console.log('cancel')},
			{
				text: '确定', onPress: () => {
					cookies.erase('userid');
					this.props.logoutSubmit();
				}
			},
		])
	}

	render() {
		const {user} = this.props;
		const Item = List.Item;
		const Brief = List.Item.Brief;

		return (
			<div>
				{user.user ? (
					<div>
						<Result
							img={<img src={require(`../../component/avatar-selector/images/${user.avatar}.png`)}
							          style={{width: 40}}/>}
							title={user.user}
							message={user.type === 'boss' ? user.company : user.title}
						/>
						<List renderHeader={() => '简介'}>
							<Item multipleLine>
								{user.title}
								{
									user.desc.split('\n').map((item, index) => (
										<Brief key={index}>{item}</Brief>
									))
								}
							</Item>
						</List>
						<WhiteSpace/>
						<List>
							<Item onClick={this.logout.bind(this)}>退出登录</Item>
						</List>
						<WhiteSpace/>
					</div>
				) : <Redirect to={this.props.user.redirectTo}/>}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		logoutSubmit: (...args) => dispatch(logoutSubmit(...args))
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(User);
