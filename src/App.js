import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Details from './pages/Details';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="CarsProject">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details/:id" component={Details} />
          <Route path="/notFound" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
