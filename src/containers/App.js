import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Loading from '../components/Loading';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entityArray: [],
      searchfield: ''
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  async componentDidMount() {
  //  fetch('https://jsonplaceholder.typicode.com/users')
  //  .then(response => response.json())
  //    .then(data => this.setState({ entityArray: data }))
  //    .catch(err => console.log(err));
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await response.json();
      this.setState({ entityArray: json });

    } catch (err) {
      console.log(err);
    }

  }

  handleSearchChange(e) {
    this.setState({ searchfield: e.target.value });
  }

  render() {
    const { entityArray, searchfield } = this.state;
    const filteredResults = entityArray.filter( entity => {
      return entity.username.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (
      <div className='App tc'>
        <h1>Hash Kitten</h1>
        <SearchBox searchChange={this.handleSearchChange}/>
        <hr />
        {
          !entityArray.length ? <Loading /> : 
          <CardList entityArray={filteredResults} />    
        } 
      </div>
    );
  }
}

export default App;