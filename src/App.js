import React, { Component } from "react";
import Form from "./components/form/Form";
import Navbar from "./components/navbar/NavBar";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hey There</h1>
        <Form />
        <Navbar name="later" />
      </div>
    );
  }
}
export default App;
