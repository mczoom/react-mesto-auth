import React from 'react';
import logo from '../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="логотип сервиса Mesto" />
    </header>
  );
}
  
export default Header;