import React, { Component } from 'react';

import SignInForm from './signinForm';

import { connect} from 'react-redux';
import * as actions from '../../actions';


class SignIn extends Component {
  onSubmit = (fields) => {
    console.log(fields);
    // this.props.signIn(fields);
    // this.props.history.push('/account');
  }
  render() {
    return (
      <div className='sign-in'>
          <SignInForm onSubmit={this.onSubmit} className='sign-in__form' />
      </div>
    );
  }
}

SignIn = connect(null, actions)(SignIn);

export default SignIn;