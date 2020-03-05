import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export default PersonDetails;

class PersonDetails extends Component {
  state = {
    person: {
      address: {}
    }
  };

  componentDidMount = async () => {
    try {
      // console.log(this.props.match.params);
      let response = await fetch(`/api/persons/${this.props.match.params.id}`);
      let data = await response.json();

      let copy = { ...this.state.person };
      copy = data;
      this.setState({ person: copy });
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message });
    }
  };

  render() {
    let { person } = this.state;
    return (
      <div className="person-details">
        <center>
          <h4>Person Details</h4>
        </center>

        <div>
          <p>
            <strong>Name:</strong>
            &nbsp;
            {person.name}
          </p>
          <p>
            <strong>Age:</strong>
            &nbsp;
            {person.age}
          </p>
          <p>
            <strong>Address:</strong>
            &nbsp;
            {person.address.present_address}, {person.address.city}
          </p>
          <p>
            <strong> Postal Code: </strong>
            &nbsp;
            {person.postal_code}
          </p>
          <p>
            <strong>Country:</strong>
            &nbsp;
            {person.country}
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(PersonDetails);
