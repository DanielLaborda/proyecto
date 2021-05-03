import React, { Component } from 'react';
import Home from './pages/home';
import Category from './pages/categories';
import Vehicles from './pages/vehicles';
import RacingTeam from './pages/racingTeam';

import Layout from './layout';
import { Router, Switch, Route } from  'react-router-dom';

import history from "../history";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router history={history}>
          <Layout>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/categories' component={Category}/>
                <Route path='/vehicles/:id' component={Vehicles}/>
                <Route path='/racing-team' component={RacingTeam}/>
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}
