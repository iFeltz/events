import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class EventPage extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    try {
      this.props.fetchEvent(id);
    } catch (err) {
      console.error(err);
    }

    console.log('props:', this.props);
  }

  render() {
    const event = this.props.event;
    
    return (
      event === null ? <div className="event"></div> : (
        <div className="event">
          <div className="container">
            <div className="row row-flex">
              <div className="col s12">
                <h1>{event.title}</h1>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default connect(state => ({ event: state.event }), actions)(EventPage);
