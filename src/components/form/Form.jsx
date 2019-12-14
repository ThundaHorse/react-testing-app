import React from "react";
import { validateText } from "../../services/validator";

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: {
        value: "",
        valid: true,
        touched: false
      },
      lastName: {
        value: "",
        valid: true,
        touched: false
      },
      isDisabled: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.formValidation();
  }

  componentDidUpdate() {
    this.formValidation();
  }

  handleChange = event => {
    let isValid = validateText(event.target.value);
    if (event.target.name && isValid) {
      const partialState = {
        [event.target.name]: {
          value: event.target.value,
          valid: isValid,
          touched: true
        }
      };
      this.setState(partialState);
    }
  };

  formValidation = () => {
    let enable = true;

    Object.keys(this.state).forEach(item => {
      console.log(item);
      if (this.state[item].hasOwnProperty("valid")) {
        if (!this.state[item].valid && this.state[item].touched) {
          enable = false;
        } else if (this.state[item].valid && !this.state[item].touched) {
          enable = false;
        }
      }
    });

    if (this.state.isDisabled && enable) {
      this.setState({ isDisabled: false });
    } else if (!this.state.isDisabled && !enable) {
      this.setState({ isDisabled: true });
    }
  };

  handleSubmit(event) {
    event.preventDefault();
    alert(`Submitted information with:
    First Name: ${this.state.firstName.value}
    Last Name: ${this.state.lastName.value}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={this.state.firstName.value}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={this.state.lastName.value}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
