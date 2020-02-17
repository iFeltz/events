import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

import Event from "../components/Event";
import '../styles/EventList.css';

class EventList extends React.Component {
  renderEvents() {
    if (this.props.events)
      return this.props.events.map(event => {
        return (
          <div className="col s12 m6 l4 xl3" key={event.id}>
            <Event event={event} />
          </div>
        );
      });
    return "";
  }

  render() {
    return (
      <div className="event-list">
        <div className="row">
          <div className="col right">
            <div className="event-list__header">
              <div className="search-wrapper">
                <input type="text" placeholder="Search" className="search-input" />
                <i className="material-icons">search</i>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-flex">{this.renderEvents()}</div>
      </div>
    );
  }
}

export default connect(null, actions)(EventList);
