import React from 'react';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete, onConfirmPopup}) {

  const user = React.useContext(CurrentUserContext);

    
  return (
    <div>
      <section className="profile">
        <div className="profile__user">
          <button className='profile__avatar-edit-button' onClick={onEditAvatar}>
            <div style={{backgroundImage: `url(${user.avatar})`}} className="profile__avatar" />
            <div className="profile__avatar-edit-icon"></div>
          </button>
          <div className="profile__user-info">
            <div className="profile__wrap">
              <h1 className="profile__user-name">{user.name}</h1>
              <button className="profile__edit-button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__user-occupation">{user.about}</p>
          </div>
        </div>  
        <button className="profile__add-button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} onConfirmPopup={onConfirmPopup} />            
        ))}    
      </section>        
    </div>
    )
}

export default Main;