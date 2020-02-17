import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

import EventList from "../Event/EventList";

class HomePage extends React.Component {
  componentDidMount() {
    try {
      this.props.fetchEvents();
    } catch (err) {
      console.error(err);
    }

    console.log('props:', this.props);
  }

  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Важные мероприятия&nbsp;в&nbsp;СПб</h1>
            </div>
          </div>
          <EventList events={this.props.events} />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    events: state.events
  }),
  actions
)(HomePage);
