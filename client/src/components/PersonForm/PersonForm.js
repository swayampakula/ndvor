import React, { Component } from "react";

class PersonForm extends Component {
  state = {
    name: "Mr.",
    age: "",
    present_address: "",
    city: "",
    postalcode: "",
    country: ""
  };

  handleChange = event => {
    //console.log(event.target.name);
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        console.log("sample", this.state);
      }
    );
  };

  handleSubmit = async event => {
    event.preventDefault();

    let person = {};

    person.name = this.state.name;
    person.age = this.state.age;
    person.address = {};
    person.address.present_address = this.state.present_address;
    person.address.city = this.state.city;
    person.postal_code = this.state.postalcode;
    person.country = this.state.country;

    try {
      let persons = [];
      persons.push(person);

      let response = await fetch("/api/persons/add", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(persons)
      });
      let data = response.json();
      console.log(data);
      this.props.history.push("/");
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message });
    }
  };

  render() {
    return (
      <div>
        <form className="card" onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter the name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
          <br></br>
          <label>Age:</label>
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          ></input>
          <br></br>
          <label>Address:</label>
          <br></br>
          <input
            type="text"
            placeholder="Address"
            name="present_address"
            value={this.state.present_address}
            onChange={this.handleChange}
          ></input>
          <label>City:</label>
          <br></br>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          ></input>{" "}
          <br></br>
          <label>Postal Code:</label>
          <input
            type="text"
            placeholder="Postal Code"
            name="postalcode"
            value={this.state.postalcode}
            onChange={this.handleChange}
          ></input>
          <br></br>
          <label>Country:</label>
          <input
            type="text"
            placeholder="Country"
            name="country"
            value={this.state.country}
            onChange={this.handleChange}
          ></input>
          <input type="submit" />
          {/* <button onClick={this.handleSubmit}>Submit</button> */}
        </form>
      </div>
    );
  }
}

export default PersonForm;
