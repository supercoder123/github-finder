import React, { Fragment, Component } from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import axios from "axios";
import Users from "./components/users/Users";
import Search from "./components/users/Search";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    let res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <Fragment>
        <Navbar title=" Github Finder" icon="fab fa-github" />
        <Search />
        <div className="container">
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </Fragment>
    );
  }
}

export default App;
