import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import eventReducer from './eventReducer';
import filterReducer from './filterReducer';
import categoriesReducer from './categoriesReducer';
import favoritesReducer from './favoritesReducer';

export default combineReducers({
	events: eventsReducer,
	event: eventReducer,
	filter: filterReducer,
	categories: categoriesReducer,
	favoriteEvents: favoritesReducer
});
