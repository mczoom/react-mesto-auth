import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmationPopup from './ConfirmationPopup';
import api from '../utils/Api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';


function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupState] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupState] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupState] = React.useState(false);
  const [isConfirmationPopupOpen, setConfirmationPopupOpen] = React.useState(false);
  const [cardToDelete, setCardToDelete] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLogged, setIsLogged] = React.useState(false);
  

  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data);        
    })
      .catch(err => console.log(err));
}, [])


function handleCardLike (card) {
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  api.toggleLikeCard(card._id, !isLiked)
    .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(err => console.log(err));
}

function handleCardDelete (card) {
  setIsLoading(true);
  api.deleteCard(card._id)
    .then(() => {
      setCards(cards => cards.filter((c) => c._id != card._id));
      closeAllPopups();
    })
    .catch(err => console.log(err))
    .finally(() => setIsLoading(false));
}

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch(err => console.log(err));
}, [])
 

  function editProfile () {
    setEditProfilePopupState(!isEditProfilePopupOpen);
  }

  function addPlace () {
    setAddPlacePopupState(!isAddPlacePopupOpen);
  }

  function editAvatar () {
    setEditAvatarPopupState(!isEditAvatarPopupOpen);
  }

  function openConfirmPopup () {
    setConfirmationPopupOpen(!isConfirmationPopupOpen);
  }

  function closeAllPopups () {
    setEditProfilePopupState(false);
    setAddPlacePopupState(false);
    setEditAvatarPopupState(false);
    setConfirmationPopupOpen(false);
    setSelectedCard(false);
  }

  function handleUpdateUser(userInfo) {
    setIsLoading(true);
    api.setUserInfo(userInfo)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }

  function handleUpdateAvatar(pic) {
    setIsLoading(true);
    api.setNewAvatar(pic)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups ();
      })
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
  }

  function handleAddPlaceSubmit(card) {
    setIsLoading(true);
    api.addNewCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups ();
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }
  

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header isLogged={isLogged} />
      <Switch>
      <Route path='/sign-up'>
        <Register />
      </Route>
      <Route path='/sign-in'>
        <Login />
      </Route>
      
      <ProtectedRoute exact path='/' cards={cards} onEditProfile={editProfile} onAddPlace={addPlace} onEditAvatar={editAvatar} onConfirmPopup={openConfirmPopup}
       onCardClick={setSelectedCard} onCardLike={handleCardLike} onCardDelete={setCardToDelete} isLogged={isLogged} component={Main} />
      
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} isLoading={isLoading} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} isLoading={isLoading} />
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} isLoading={isLoading} />
      <ConfirmationPopup onConfirmDelete={handleCardDelete} isOpen={isConfirmationPopupOpen} onClose={closeAllPopups} card={cardToDelete} isLoading={isLoading} />
     
      
      </Switch>
      <Footer />
  </div>
  </CurrentUserContext.Provider>
  );
}

export default App;