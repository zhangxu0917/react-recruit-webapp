import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TabBar} from 'antd-mobile';
import {withRouter} from 'react-router-dom';

class NavLink extends Component {
	render() {
		const navList = this.props.data.filter(v => !v.hide);
		return (
			<TabBar>
				{
					navList.map(v => (
						<TabBar.Item
							key={v.path}
							title={v.text}
							icon={{uri: require(`./img/${v.icon}.png`)}}
							selectedIcon={{uri: require(`./img/${v.icon}-active.png`)}}
							onPress={() => {
								this.props.history.push(v.path);
							}}
						/>
					))
				}
			</TabBar>
		);
	}
}

NavLink.propTypes = {
	data: PropTypes.array.isRequired
};

export default withRouter(NavLink);
