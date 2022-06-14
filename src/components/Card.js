import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Card ({card, onCardClick, onCardLike, onConfirmPopup, onCardDelete}) {

  const user = React.useContext(CurrentUserContext);
  
  const isOwn = card.owner._id === user._id;
  
  const cardDeleteButtonClassName = (
    `item__delete-button ${isOwn ? 'item__delete-button_active' : ''}`
  );

  const isLiked = card.likes.some(i => i._id === user._id);

  const cardLikeButtonClassName = `item__like-button ${isLiked ? 'item__like-button_active' : ''}`;

    const handleCardClick = () => {
        onCardClick(card);
        
    }

    const handleLikeClick = () => {
      onCardLike(card);
    }

    const handleDeleteClick = () => {
      onConfirmPopup();
      onCardDelete(card);
    }

    return (
        <div className="item elements__item">
            <button className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>                          
            <div className="item__image" style={{ backgroundImage: `url(${card.link})` }} onClick={handleCardClick} />              
            <div className="item__info">
              <p className="item__title">{card.name}</p>  
              <div className="item__likebutton-wrap">
                <button className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                <p className="item__like-counter">{card.likes.length}</p>
              </div>
            </div>              
          </div>
    )
}

export default Card;