import React from 'react';
import logo from '../images/logo.svg';
import { Link, useLocation, useHistory } from 'react-router-dom';

function Header({isLogged, email}) {

  const location = useLocation();
  const history = useHistory();

  
  function signOut() {
    localStorage.removeItem('token');
    history.push('/sign-in');
  }
  

  return (
    <header className="header">
      <div className="header__container">  
        <img src={logo} className="header__logo" alt="логотип сервиса Mesto" />
        <div className="header__info">
          <p className={`header__email ${isLogged ? 'header__email_on' : ''}`}>{email}</p>
          {isLogged && location.pathname === "/" ? <button className="header__link header__button" onClick={signOut}>Выйти</button> :
          ((location.pathname === "/sign-up" && <Link to='/sign-in' className="header__link link">Войти</Link>) || 
          (location.pathname === "/sign-in" && <Link to='/sign-up' className="header__link link">Регистрация</Link>))}
        </div>
      </div>
    </header>
  );
}
  
export default Header;