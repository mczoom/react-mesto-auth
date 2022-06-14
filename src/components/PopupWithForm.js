import React from 'react';

function PopupWithForm ({title, name, buttonText, isOpen, onClose, children, onSubmit}) {
    
    return(
      <div className={`popup popup-${name} ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container popup-edit-profile__container">
          <button className="popup__close-button" onClick={onClose}></button>
          <form className="form popup__form" onSubmit={onSubmit} name={name} method="post" noValidate>          
            <p className="popup__title">{title}</p>
            {children}
            <button className="popup__submit-button submit-button" type="submit">{buttonText}</button>
          </form>
        </div>
      </div>

    )
}

export default PopupWithForm;