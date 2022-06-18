import React from 'react';
import {Link} from 'react-router-dom';

export default function Auth({title, buttonText, formName, children}) {


    return(        
        <div className="auth popup__container">
          <form className="popup__form popup__form_auth" name={formName} method="post" noValidate>          
            <h1 className="popup__title popup__title_auth">{title}</h1>
            {children}
            <button className="submit-button submit-button_auth" type="submit">{buttonText}</button>
            {formName === "register" && <Link className="link" to='/sign-in'>Уже зарегистрированы? Войти</Link>}
          </form>
        </div>
         
      )
}