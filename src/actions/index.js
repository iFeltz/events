import axios from "axios";
import { FETCH_EVENTS, FETCH_EVENT_ITEM } from "./types";

export const fetchEvents = () => async dispatch => {
	// proxy for requests in package.json
	const res = await axios.get('/public-api/v1.4/events/?location=spb&fields=id,title,slug,categories,short_title,description,images');
	if (res.status !== 200) throw new Error(res.statusText);
	
	dispatch({ 
		type: FETCH_EVENTS, 
		payload: res.data.results
	});
};

export const fetchEvent = (id) => async dispatch => {
	// proxy for requests in package.json
	const res = await axios.get(`/public-api/v1.4/events/${id}`);
	if (res.status !== 200) throw new Error(res.statusText);
	
	dispatch({ 
		type: FETCH_EVENT_ITEM, 
		payload: res.data
	});
}