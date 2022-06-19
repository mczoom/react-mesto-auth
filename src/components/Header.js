import React from 'react';
import logo from '../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Header({isLogged}) {

  const location = useLocation();

  console.log(localStorage.getItem('token'));
  

  return (
    <header className="header">
      <div className="header__container">  
        <img src={logo} className="header__logo" alt="логотип сервиса Mesto" />
        <div className="header__info">
          <p className="header__email">e-mail</p>
          {isLogged && location.pathname === "/" ? <Link to='/sign-in' className="header__link link">Выйти</Link> :
          ((location.pathname === "/sign-up" && <Link to='/sign-in' className="header__link link">Войти</Link>) || 
          (location.pathname === "/sign-in" && <Link to='/sign-up' className="header__link link">Регистрация</Link>))}
        </div>
      </div>
    </header>
  );
}
  
export default Header;