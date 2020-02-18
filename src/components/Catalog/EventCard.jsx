import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './EventCard.sass';

const EventCard = ({ event, favoriteEvents, updateFavorites }) => {
	const [favorite, setFavorite] = useState(null);

	useEffect(() => {
		let newFavorites = favoriteEvents;
		const key = favoriteEvents.findIndex(el => el.id === event.id);

		if (favorite === null) {
			// Если компонент перерендерился, но событие добавлено в избранное,
			// указываем флажок favorite
			if (key !== -1) {
				setFavorite(true);
			}
			return;
		} else if (favorite) {
			if (key === -1) newFavorites.push(event);
		} else {
			if (key === -1) return;
			newFavorites.splice(key, 1);
		}

		console.log({ eventId: event.id, favorite });
		updateFavorites([...newFavorites]);
		// eslint-disable-next-line
	}, [favorite]);

	const getTitle = () => {
		let value = event.short_title;
		// не все названия в дата начинаются с заглавной буквы,
		// поэтому делаем это вручную
		return value.charAt(0).toUpperCase() + value.slice(1);
	};

	const getImage = () => {
		return event.images[0].image;
	};

	const handleFavorite = () => {
		setFavorite(!favorite);
	};

	const { id, description } = event;

	return (
		<div className="event-card">
			<Link to={`/event/${id}`} className="event-card__link">
				<img width="100%" src={getImage()} alt="" />
				<h3 className="event-card__title">{getTitle()}</h3>
			</Link>
			<div
				className="event-card__description"
				dangerouslySetInnerHTML={{ __html: description }}
			></div>
			<div className="event-card__favorite" onClick={handleFavorite}>
				<i className="material-icons">
					{favorite ? 'favorite' : 'favorite_border'}
				</i>
			</div>
		</div>
	);
};

const mapStateToProps = ({ favoriteEvents }) => ({
	favoriteEvents
});

export default connect(mapStateToProps, actions)(EventCard);
