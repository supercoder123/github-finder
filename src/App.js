import React, { Fragment, Component } from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar title=" Github Finder" icon="fab fa-github" />
        <h1 className="App-header">Hello App</h1>
      </Fragment>
    );
  }
}

export default App;
