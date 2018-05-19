import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './common-component/header/header.js';
import Footer from './common-component/footer/footer.js';
import Home from './pages/home/home.js';
import About from './pages/about/about.js';

class App extends Component {
  render() {
    return (
      
      <Router>
      <div>
        <Header />
        <Route exact path="/" exact={true}  component = {Home} />
        <Route exact path="/about" component = {About} />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
