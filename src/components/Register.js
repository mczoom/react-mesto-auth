import React from 'react';
import AuthSection from './AuthSection';
import * as auth from '../utils/auth';

export default function Register({onRegister}) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleChangeEmailInput(e) {
        setEmail(e.target.value);
    }

    function handleChangePasswordInput(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        onRegister(email, password);    
  }

    return(
        <AuthSection title="Регистрация" buttonText="Зарегистрироваться" formName="register" onSubmit={handleSubmit}>
          <div className="popup__section">
            <input className="popup__input popup__input_type_name popup__input_auth" id="username-input" value={email || ''} onChange={handleChangeEmailInput} 
            placeholder="Email" name="username" type="text" minLength="2" maxLength="40" required />
            <span className="popup__input-error username-input-error"></span>
          </div>
          <div className="popup__section">
            <input className="popup__input popup__input_type_occupation popup__input_auth" id="occupation-input" value={password || ''} onChange={handleChangePasswordInput} 
            placeholder="Пароль" name="useroccupation" type="password" minLength="6" maxLength="200" required />
            <span className="popup__input-error occupation-input-error"></span>
          </div>
        </AuthSection>
    )
}