import React, {Component} from 'react';
import axios from 'axios';
import {Card, WingBlank, WhiteSpace} from 'antd-mobile';
import {getUserList} from '../../redux/chatuser.redux';
import {connect} from 'react-redux';

class Boss extends Component {
	componentDidMount() {
		this.props.getUserList()
	}

	render() {
		const Header = Card.Header;
		const Body = Card.Body;

		return (
			<WingBlank>
				<WhiteSpace/>
				{
					this.props.userList.map((user) => (
						user.avatar ? (
							<Card>
								<Header
									title={user.user}
									thumb={require(`../../component/avatar-selector/images/${user.avatar}.png`)}
									extra={<span>user.title</span>}
								/>
								<Body>
									{
										user.desc.split('\n').map(item => (
											<div>{item}</div>
										))
									}
								</Body>
							</Card>
						) : null
					))
				}
				<WhiteSpace/>
			</WingBlank>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		userList: state.chatUser.userList
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		getUserList: (...args) => dispatch(getUserList(...args))
	}
};


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Boss);
