import React, { useState } from 'react';
import Logo from '../../../static/images/logo.png';
import history from '../../history';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
        return (
            <div className='navbar'>
                <div className='navbar__logo'>
                    <img src={Logo} onClick={() => history.push('/')}/>
                    <div className='navbar__title'>DLMotor</div>
                </div>

                <ul className={click ? "navbar__options active" : "navbar__options"}>
                    <li className='navbar__options__option' onClick={closeMobileMenu}>
                        <a onClick={() => history.push('/categories')}>Modelos</a>
                    </li>
                    <li className='navbar__options__option' onClick={closeMobileMenu}>
                        <a href='#'>Nuestro Concesionario</a>
                    </li>
                    <li className='navbar__options__option' onClick={closeMobileMenu}>
                        <a onClick={() => history.push('/racing-team')}>Racing team</a>
                    </li>
                </ul>
                <div className="mobile-menu" onClick={handleClick}>
                    {click ? (
                    <div className="menu-icon">
                        <i className="fas fa-bars"/>
                    </div>
                    ) : (
                    <div className="menu-icon">
                        <i className="fas fa-bars"/>
                    </div>
                    )}
                </div>
              
            </div>
        );
    
}

export default Navbar;