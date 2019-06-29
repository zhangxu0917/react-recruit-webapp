import React, {Component} from 'react';
import UserCard from '../../component/user-card/user-card'
import {getUserList} from '../../redux/chatuser.redux';
import {connect} from 'react-redux';

class Genius extends Component {
	componentDidMount() {
		this.props.getUserList('genius')
	}

	render() {
		return (
			<UserCard userList={this.props.userList} />
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
)(Genius);
