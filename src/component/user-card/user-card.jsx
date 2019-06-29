import React, {Component} from 'react';
import {Card, WingBlank, WhiteSpace} from 'antd-mobile';

import PropTypes from 'prop-types';

class UserCard extends Component {
	render() {
		const Header = Card.Header;
		const Body = Card.Body;

		return (
			<WingBlank>
				<WhiteSpace/>
				{
					this.props.userList.map((user) => (
						user.avatar ? (
							<Card key={user._id}>
								<Header
									title={user.user}
									thumb={require(`../../component/avatar-selector/images/${user.avatar}.png`)}
									extra={<span>{user.title}</span>}
								/>
								<Body>
									{ user.type === 'boss' ? <div>公司：{user.company}</div> : null }
									{
										user.desc.split('\n').map((item, index) => (
											<div key={index}>{item}</div>
										))
									}
									{ user.money ? <div>薪资：{user.money}</div> : null }
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

UserCard.propTypes = {
	userList: PropTypes.array.isRequired
};

export default UserCard;
