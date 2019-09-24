import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Loading from '../components/Loading';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  handleSearchChange = e => {
    this.setState({ searchfield: e.target.value });
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter( robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ?
      <Loading /> :
      (
        <div className='App tc'>
          <h1>Hash Kitten</h1>
          <SearchBox searchChange={this.handleSearchChange}/>
          <hr />
          <div style={{ overflow: 'scroll'}}>
            <CardList robots={filteredRobots} />
          </div>    
        </div>
      );
  }
}

export default App;