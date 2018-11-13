import React, { Component } from 'react';
import BrandImg from './components/brandimg';
import NavBar from './components/navbar';
import PageContent from './components/pagecontent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrandImg />
        <NavBar />
        <div className="container">
          <PageContent />
        </div>
      </div>
    );
  }
}

export default App;
