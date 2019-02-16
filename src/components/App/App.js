import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import Header from "../Header/Header";
import Spinner from "../Spinner/Spinner";
import Users from "../Users/Users";

class App extends Component {
  state = {
    users: [],
    page: 1,
    perPage: 10,
    loading: false
  };

  componentDidMount() {
    this.fetchUsers();
    this.scrollListener = window.addEventListener('scroll', e => {
      this.handleScroll(e);
    })
  }

  fetchUsers = () => {
    const { page, perPage } = this.state;
    const url = `https://randomuser.me/api/?inc=picture,name,email&page=${page}&results=${perPage}`;

    this.setState({ loading: true });

    axios.get(url).then(res => {
      const users = res.data.results.map(user => {
        return {
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          avatar: user.picture.large
        };
      });

      this.setState({ users: [...this.state.users, ...users] });
      this.setState({ loading: false });
    });
  };

  handleScroll = (e) => {
    const {loading} = this.state;
    if (loading) {
      return;
    }
    const lastUser = document.querySelector('.App > div:last-child');
    const lastUserOffset = lastUser.offsetTop;
    const pageOffset = window.pageYOffset + window.innerHeight;
    const bottomOffset = 20;
    if (pageOffset > lastUserOffset - bottomOffset) {
      this.handleLoadMore()
    }
  }

  handleLoadMore = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.fetchUsers();
    });
  };

  render() {
    const result = <Users users={this.state.users} />;
    return (
      <div className="App">
        <Header />
        {result}
        {this.state.loading ? <Spinner /> : null}
      </div>
    );
  }
}

export default App;
