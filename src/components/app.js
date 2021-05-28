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
import Garage from './pages/garage';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginStatus: "NOT_LOGGED_IN"
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
    console.log(this.state);
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
    console.log(this.state);
  }

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
                <Route path='/garage' component={Garage}/>
                <Route path='/racing-team' component={RacingTeam}/>
                <Route path='/users' render={ (props)=>(
                  <Users {...props} 
                    handleSuccessfulLogin={this.handleSuccessfulLogin} handleUnsuccessfulLogin={this.handleUnsuccessfulLogin} 
                  />
                )}
                />
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}
