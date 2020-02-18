import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import './Event.sass';

const EventPage = ({ event, match, fetchEvent }) => {
	const [matchId, setMatchId] = useState(0);
	useEffect(() => {
		if (matchId) {
			try {
				fetchEvent(matchId);
			} catch (err) {
				console.error(err);
			}
		}
		setMatchId(match.params.id);
		// eslint-disable-next-line
	}, [match, matchId]);

	const getTitle = () => {
		let value = event.title || '';
		// не все названия в дата начинаются с заглавной буквы,
		// поэтому делаем это вручную
		return value.charAt(0).toUpperCase() + value.slice(1);
	};

	const getImage = () => {
		if (!event.images) return '';
		return event.images[0].image;
	};
	// eslint-disable-next-line
	return event.id != matchId ? (
		<div className="event">
			<div className="container">Loading...</div>
		</div>
	) : (
		<div className="event">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="event__back-link">
							<Link to="/">Все события</Link>
						</div>
						<h1>{getTitle()}</h1>
						<img
							src={getImage()}
							alt={event.short_title}
							className="event__image"
						/>
						<div dangerouslySetInnerHTML={{ __html: event.body_text }}></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default connect(state => ({ event: state.event }), actions)(EventPage);
