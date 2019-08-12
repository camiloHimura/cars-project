import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

const generalConfig = {
  delay: 600,
  loading: () => <Loading text={"Loading..."}/>
}

const AsyncHome = Loadable({
  loader: () => import('./pages/Home'),
  ...generalConfig
});

const AsyncDetails = Loadable({
  loader: () => import('./pages/Details'),
  ...generalConfig
});

const AsyncNotFound = Loadable({
  loader: () => import('./pages/NotFound'),
  ...generalConfig
});

function App() {
  return (
    <div className="CarsProject">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={AsyncHome} />
          <Route path="/details/:id" component={AsyncDetails} />
          <Route path="/notFound" component={AsyncNotFound} />
          <Route component={AsyncNotFound} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
