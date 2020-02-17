import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Event from './Event';
import './EventList.sass';

const EventList = ({ events }) => {
	const [search, setSearch] = useState('');

	const renderEvents = () => {
		let filteredEvents = getFilteredEvents();
		return filteredEvents.map(event => {
			return (
				<div className="col col-sm col-md col-lg" key={event.id}>
					<Event event={event} />
				</div>
			);
		});
	};

	const getFilteredEvents = () => {
		if (!search) return events || [];

		let re = new RegExp(search, 'i');
		console.log({ re, search });
		return events.filter(event => re.test(event.short_title));
	};

	const handleSearch = event => {
		setSearch(event.target.value);
	};

	const resetSearch = () => {
		setSearch('');
	};

	return (
		<div className="event-list">
			<div className="row">
				<div className="col">
					<div className="event-list__header">
						<div className="event-list__search-wrapper">
							<input
								type="text"
								placeholder="Search"
								value={search}
								onChange={handleSearch}
								className="input-label"
							/>
							{search && (
								<i className="material-icons clear" onClick={resetSearch}>
									clear
								</i>
							)}
						</div>
						<div className="event-list-filter">

						</div>
					</div>
				</div>
			</div>
			<div className="row">{renderEvents()}</div>
		</div>
	);
};

export default connect(null, actions)(EventList);
