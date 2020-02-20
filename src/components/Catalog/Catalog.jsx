import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Event from './EventCard';
import CatalogFilter from './CatalogFilter';
import './Catalog.sass';

const Catalog = ({
	filter: { search, category, priceSort, favoritesOnly },
	events,
	favoriteEvents
}) => {
	const [filteredEvents, setFilteredEvents] = useState([]);
	useEffect(() => {
		/********************/
		/****** FILTER ******/
		/********************/
		let result = events;

		if (favoritesOnly) result = favoriteEvents;
		if (search) result = filterSearch(result);
		if (category) result = filterCategory(result);

		/* TODO: i should add price sort, probably */

		setFilteredEvents(result);

		// eslint-disable-next-line
	}, [events, search, category, favoriteEvents, favoritesOnly]);

	const filterSearch = elements => {
		let re = new RegExp(search, 'i');
		// поиск по названию и описанию
		return elements.filter(event =>
			re.test(`${event.short_title} ${event.description}`)
		);
	};

	const filterCategory = elements => {
		return elements.filter(event => event.categories.includes(category));
	};

	const renderEvents = () => {
		return filteredEvents.map(event => {
			return (
				<div className="col col-sm col-md col-lg" key={event.id}>
					<Event event={event} />
				</div>
			);
		});
	};

	return (
		<div className="catalog">
			<div className="row">
				<div className="col">
					<div className="catalog__header">
						<CatalogFilter />
					</div>
				</div>
			</div>
			<div className="row">{renderEvents()}</div>
		</div>
	);
};

const mapStateToProps = ({ filter, favoriteEvents }) => ({
	filter,
	favoriteEvents
});

export default connect(mapStateToProps, null)(Catalog);
