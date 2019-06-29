import axios from "axios";

const USER_LIST = 'USER_LIST';

const initState = {
	userList: []
};

export function chatUser(state = initState, action) {
	switch (action.type) {
		case USER_LIST:
			return {...state, userList: action.payload}
		default:
			return state
	}
}

function userList(payload) {
	return {type: USER_LIST, payload}
}

export function getUserList(type) {
	return dispatch => {
		axios.get('/user/list', {
			params: {type: 'genius'}
		}).then(res => {
			dispatch(userList(res.data.data))
		})
	}
}
