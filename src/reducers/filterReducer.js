import { UPDATE_FILTER } from '../actions/types';

export default (
	state = {
		search: '',
		category: null,
		priceSort: null,
		favoritesOnly: false
	},
	action
) => {
	switch (action.type) {
		case UPDATE_FILTER:
			return action.payload || state;
		default:
			return state;
	}
};
