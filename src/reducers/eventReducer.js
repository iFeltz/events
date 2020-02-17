import { FETCH_EVENT_ITEM } from '../actions/types';

export default (state = null, action) => {
	switch (action.type) {
		case FETCH_EVENT_ITEM:
			return action.payload || false;
		default:
			return state;
	}
}