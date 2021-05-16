import React, { Component } from 'react';
import Home from './pages/home';
import Category from './pages/categories';
import Vehicles from './pages/vehicles';
import Configuration from './pages/configuration';
import RacingTeam from './pages/racingTeam';

import Layout from './layout';
import { Router, Switch, Route } from  'react-router-dom';

import history from "../history";
import Users from './pages/users';


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
                <Route path='/configuration/:id' component={Configuration}/>
                <Route path='/racing-team' component={RacingTeam}/>
                <Route path='/users' component={Users}/>
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}
