import React from 'react';
import Auth from './Auth';

export default function Login() {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleChangeEmailInput(e) {
        setEmail(e.target.value);
    }

    function handleChangePasswordInput(e) {
        setPassword(e.target.value);
    }

    return(
        <Auth title="Вход" buttonText="Войти" name="login">
          <div className="popup__section">
            <input className="popup__input popup__input_type_name" id="username-input" value={email || ''} onChange={handleChangeEmailInput} 
            placeholder="Email" name="username" type="text" minLength="2" maxLength="40" required />
            <span className="popup__input-error username-input-error"></span>
          </div>
          <div className="popup__section">
            <input className="popup__input popup__input_type_occupation" id="occupation-input" value={password || ''} onChange={handleChangePasswordInput} 
            placeholder="Пароль" name="useroccupation" type="password" minLength="6" maxLength="200" required />
            <span className="popup__input-error occupation-input-error"></span>
          </div>
        </Auth>
    )
}