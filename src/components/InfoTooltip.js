import React from 'react';


export default function InfoTooltip({isOpen, onClose, registrationResponse}) {


    return(
        <div className={`popup popup-registration ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup-registration__container">
          <button className="popup__close-button" onClick={onClose}></button>                
            <img className="popup__image" src={registrationResponse.image} alt="" />
            <p className="popup__title popup-registration__title">{registrationResponse.text}</p>                  
        </div>
      </div>
    )
}