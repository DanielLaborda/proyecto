import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

import history from '../../history';

class SignInForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    const links = [
      {
        index: 0,
        title: 'Not registered? Create account here',
        onClick: () => history.push('/signup')
      },
      {
        index: 1,
        title: 'Forgot account email?',
        onClick: () => console.log('forgot email')
      },
      {
        index: 2,
        title: 'Forgot password?',
        onClick: () => console.log('forgot password')
      }
    ];
    return (
        <form onSubmit={handleSubmit} className={`${className}`}>
            <Field className='sign-in-form__email'
            type='email'
            placeholder='Email'
            name='email'
            component={FormInput}/>
    
            <Field className='sign-in-form__password'
            type='password'
            placeholder='Password'
            name='password'
            component={FormInput}/>
            
            <div className='sign-in-form__line'></div>
            <Field className='sign-in-form__login'
            type='submit'
            title='Login'
            name='login'
            component={FormButton}/>

        </form>
    );
  }
}

SignInForm = reduxForm({
  form: 'SignInForm'
})(SignInForm);

export default SignInForm;