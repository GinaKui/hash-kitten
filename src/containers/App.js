import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Loading from '../components/Loading';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      entityArray: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {this.setState({ entityArray: data })})
      .catch(err => console.log(err));
  }

  handleSearchChange = e => {
    this.setState({ searchfield: e.target.value });
  }

  render() {
    const { entityArray, searchfield } = this.state;
    const filteredResults = entityArray.filter( entity => {
      return entity.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !!entityArray.length ?
      <Loading /> :
      (
        <div className='App tc'>
          <h1>Hash Kitten</h1>
          <SearchBox searchChange={this.handleSearchChange}/>
          <hr />
          <CardList entityArray={filteredResults} />     
        </div>
      );
  }
}

export default App;