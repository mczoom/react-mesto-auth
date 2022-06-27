import React from 'react';

function ImagePopup ({card, onClose}) {

  
    return(
      <div className={`popup image-popup ${card ? 'popup_opened' : ''}`} >
        <figure className="image-popup__container">
          <button className="popup__close-button image-popup__close-button" onClick={onClose}></button>
          <img className="image-popup__image" src={card ? card.link : ''} alt={card ? card.name : ''} />
          <figcaption className="image-popup__title">{card ? card.name : ''}</figcaption>
        </figure>
      </div>
    )
}

export default ImagePopup;