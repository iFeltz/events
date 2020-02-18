import { UPDATE_FAVORITES } from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case UPDATE_FAVORITES:
			return action.payload || state;
		default:
			return state;
	}
};
