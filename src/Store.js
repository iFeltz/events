import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const state = {
	event: {},
	events: [],
	categories: [],
	favoriteEvents: [],
	filter: {
		search: '',
		category: null,
		priceSort: null,
		favoritesOnly: false
	}
};

export default createStore(reducers, state, applyMiddleware(reduxThunk));
