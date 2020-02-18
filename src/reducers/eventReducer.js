import { FETCH_EVENT_ITEM } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_EVENT_ITEM:
			return action.payload || {};
		default:
			return state;
	}
};
