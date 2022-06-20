import React from 'react';
import accepted from '../images/accepted.svg';

export default function InfoTooltip({isOpen, onClose, registrationResponse}) {


    return(
        <div className={`popup popup-registration ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup-registration__container">
          <button className="popup__close-button" onClick={onClose}></button>                
            <img className="popup__image" src={registrationResponse.image} />
            <p className="popup__title popup-registration__title">{registrationResponse.text}</p>                  
        </div>
      </div>
    )

}