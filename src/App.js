import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <div className="CarsProject">
      <Header/>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/details/:id" component={Details} />
        </Router>
      <Footer/>
    </div>
  );
}

export default App;
