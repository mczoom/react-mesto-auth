import React from 'react';
import AuthSection from './AuthSection';
import * as auth from '../utils/auth';
import { useHistory } from 'react-router-dom';

export default function Login({handleLogIn}) {

    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    const history = useHistory();

    function handleChangeEmailInput(e) {
        setLogin(e.target.value);
    }

    function handleChangePasswordInput(e) {
        setPassword(e.target.value);
    }

    function handleSubmitLogin(e) {
        e.preventDefault();
        if(!login || !password) {
            return;
        }
        handleLogIn(login, password);
        // auth.login(login, password)
        //   .then((data) => {
        //     if(data.token) {
        //         setLogin('');
        //         setPassword('');
        //         localStorage.setItem('token', data.token);
        //         handleLogIn();
        //         history.push('/');            
        //   }
        //   })    
  }


  
    
    

    return(
        <AuthSection title="Вход" buttonText="Войти" formName="login" onSubmit={handleSubmitLogin}>
          <div className="popup__section">
            <input className="popup__input popup__input_type_name popup__input_auth" id="username-input" value={login || ''} onChange={handleChangeEmailInput} 
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