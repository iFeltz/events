import axios from 'axios';
import {
	FETCH_EVENTS,
	FETCH_EVENT_ITEM,
	FETCH_CATEGORIES,
	UPDATE_FILTER,
	UPDATE_FAVORITES
} from './types';

export const fetchEvents = () => async dispatch => {
	// proxy for requests in package.json
	const res = await axios.get(
		'/public-api/v1.4/events/?location=spb&fields=id,title,slug,categories,short_title,description,images'
	);
	if (res.status !== 200) throw new Error(res.statusText);

	dispatch({
		type: FETCH_EVENTS,
		payload: res.data.results
	});
};

export const fetchEvent = id => async dispatch => {
	// proxy for requests in package.json
	const res = await axios.get(`/public-api/v1.4/events/${id}`);
	if (res.status !== 200) throw new Error(res.statusText);

	dispatch({
		type: FETCH_EVENT_ITEM,
		payload: res.data
	});
};

export const fetchCategories = () => async dispatch => {
	// proxy for requests in package.json
	const res = await axios.get('/public-api/v1.4/event-categories/');

	dispatch({
		type: FETCH_CATEGORIES,
		payload: res.data
	});
};

export const updateFilter = filter => dispatch => {
	dispatch({
		type: UPDATE_FILTER,
		payload: filter
	});
};

export const updateFavorites = favorites => dispatch => {
	dispatch({
		type: UPDATE_FAVORITES,
		payload: favorites
	});
};
