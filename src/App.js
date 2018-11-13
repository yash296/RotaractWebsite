import React, { Component } from 'react';
import BrandImg from './components/brandimg';
import NavBar from './components/navbar';
import PageContent from './components/pagecontent';
import Menu from './components/menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="item1" id="item1">
          <BrandImg />
          <NavBar />
        </div>
        <div className="item2">
          <Menu />
        </div>
        <div className="item3">
          <PageContent />
        </div>
        <div className="item4">Footer</div>
      </div>
    );
  }
}

export default App;
