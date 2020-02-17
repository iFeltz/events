import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Event.sass';

class Event extends React.Component {
	getTitle() {
		let value = this.props.event.short_title;
		// не все названия в дата начинаются с заглавной буквы,
		// поэтому делаем это вручную
		return value.charAt(0).toUpperCase() + value.slice(1);
	}

	getImage() {
		return this.props.event.images[0].image;
	}

	render() {
		const {
			event: { id, description }
		} = this.props;

		return (
			<div className="event-list__item">
				<Link to={`/event/${id}`}>
					<img width="100%" src={this.getImage()} alt="" />
					<h4>{this.getTitle()}</h4>
				</Link>
				<div dangerouslySetInnerHTML={{ __html: description }}></div>
			</div>
		);
	}
}

export default connect(null, actions)(Event);
