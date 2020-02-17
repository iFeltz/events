import React from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import * as actions from "../actions";
import "../styles/Event.css";

class Event extends React.Component {
  getTitle() {
    let value = this.props.event.short_title;
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  getImage() {
    return this.props.event.images[0].image;
  }

  render() {
    const { id, description } = this.props.event;
    
    return (
      <Link to={`/event/${id}`} className="event-list__item">
        <img width="100%" src={this.getImage()} alt="" />
        <h6>{this.getTitle()}</h6>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </Link>
    );
  }
}

export default connect(null, actions)(Event);
