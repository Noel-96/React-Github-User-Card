import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';
import GithubUser from './components/GithubUser';
import Search from './components/Search';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
        login: "Noel-96",
        user: {}
    }
}

componentDidMount() {
  axios.get(`https://api.github.com/users/${this.state.login}`)
    .then(res => { 
      console.log("res.data: ", res.data)
      this.setState({
        ...this.state.user,
        user: res.data 
      })
    })
    .catch(err => console.log(err))
}

searchUser = searchTerm => {
  axios.get(`https://api.github.com/users/${searchTerm}`)
    .then(res => {
      this.setState({
        ...this.state,
        user: res.data
      })
    })
    .catch(err => console.log(err))
}


  render () {
  return (
    <div className="App">
      <GithubUser user={this.state.user}/>
      <Search searchUser={this.searchUser}/>
    </div>
  );
  }
}

export default App;
