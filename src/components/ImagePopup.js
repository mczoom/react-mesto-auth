import React from 'react';

function ImagePopup ({card, onClose}) {

  function handleEscClose(evt) {
    if(evt.key === 'Escape') {
    window.addEventListener("keydown", onClose)
    console.log(evt.key);
    }   
    console.log(evt.key); 
  }


 /* React.useEffect(() => {
    handleEscClose();
  })*/

    return(
      <div className={`popup image-popup ${card ? 'popup_opened' : ''}`} onKeyDown={handleEscClose} >
        <figure className="image-popup__container">
          <button className="popup__close-button image-popup__close-button" onClick={onClose}></button>
          <img className="image-popup__image" src={card ? card.link : ''} alt={card ? card.name : ''} />
          <figcaption className="image-popup__title">{card ? card.name : ''}</figcaption>
        </figure>
      </div>
    )
}

export default ImagePopup;