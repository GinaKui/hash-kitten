import React, { Component } from 'react';
import KittenList from '../components/KittenList';
import SearchBox from '../components/SearchBox';
import Loading from '../components/Loading';
import Footer from '../components/Footer';

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
      <div className='App tc flex flex-column justify-between'>
        <h1>Hash Kitten</h1>
        <SearchBox searchChange={this.handleSearchChange}/>
        {
          !entityArray.length ? <Loading /> : 
          <KittenList entityArray={filteredResults} />    
        }
        <Footer />
      </div>
    );
  }
}

export default App;