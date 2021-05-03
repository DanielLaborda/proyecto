import React, { Component } from 'react';
import Logo from '../../../static/images/logo.png';
import history from '../../history';

class Navbar extends Component{
    render(){
        return (
            <div className='navbar'>
                <div className='navbar__logo'>
                    <img src={Logo} onClick={() => history.push('/')}/>
                    <div className='navbar__title'>DLMotor</div>
                </div>
                <div className='navbar__item'>
                    <a className='navbar__item__categories' onClick={() => history.push('/categories')}>Categories</a>
                    <a className='navbar__item__racing' onClick={() => history.push('/racing-team')}>Racing Team</a>
                </div>
            </div>
        );
    }
    
}

export default Navbar;