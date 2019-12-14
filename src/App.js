import React from "react";
import Hero from "./components/header/Hero";
import Footer from "./components/footer/Footer";
// import Form from "./components/form/Form";
import ClassForm from "./components/form/FormClass";

function App() {
  let links = `
    Placeholder
    Placeholder
    Placeholder
    Placeholder
    Placeholder
  `;
  return (
    <div className="App">
      <Hero />
      <hr />
      <div className="container">
        <h2>I'm body</h2>
        {/* <Form /> */}
        <ClassForm />
      </div>
      <Footer children={links} />
    </div>
  );
}

export default App;
