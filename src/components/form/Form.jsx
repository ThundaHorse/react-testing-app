import React from "react";
import { validateText } from "../../services/validator";

export default function Form() {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    pastSubmissions: []
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateText(state.firstName) && validateText(state.lastName)) {
      alert(`Submitted information with:
    First Name: ${state.firstName}
    Last Name: ${state.lastName}`);
      let old = [];
      old.push({
        firstName: state.firstName,
        lastName: state.lastName
      });
      setState({ pastSubmissions: old.map(e => e) });
      setState({ firstName: "", lastName: "" });
    } else {
      alert("There are errors");
      setState({ firstName: "", lastName: "" });
    }
    console.log(state.pastSubmissions);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
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
    </div>
  );
}
