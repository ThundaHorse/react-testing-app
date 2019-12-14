import React from "react";
import { validateText } from "../../services/validator";

export default class ClassForm extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      pastSubmissions: []
    };
  }

  handleChange = e => {
    const val = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: val
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (
      validateText(this.state.firstName) &&
      validateText(this.state.lastName)
    ) {
      alert(`Submitted information with:
    First Name: ${this.state.firstName}
    Last Name: ${this.state.lastName}`);

      var joined = this.state.pastSubmissions.concat(
        `First Name: ${this.state.firstName},
        Last Name: ${this.state.lastName}`
      );
      this.setState({ pastSubmissions: joined });

      this.setState({ firstName: "", lastName: "" });
    } else {
      alert("There are errors");
      this.setState({ firstName: "", lastName: "" });
    }
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button
            className="btn btn-round btn-primary"
            type="submit"
            value="Submit"
          >
            Submit
          </button>
        </form>
        <br />
        <ul>
          <h2>Previous Submissions:</h2>
          {this.state.pastSubmissions.map(e => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
    );
  }
}
