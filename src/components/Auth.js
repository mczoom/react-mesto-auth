import React from 'react';

export default function Auth({title, buttonText, name, children}) {


    return(
        <form className="auth__form" name={name} method="post" noValidate>          
           <p className="popup__title">{title}</p>
           {children}
           <button className="popup__submit-button submit-button" type="submit">{buttonText}</button>
         </form>
         
  
      )
}