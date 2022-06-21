import React from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditProfilePopup ({isOpen, onClose, onUpdateUser, isLoading}) {

    const user = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState(user.name);
    const [description, setDescription] = React.useState(user.about);

    function handleInputNameChange(e) {
        setName(e.target.value);
    }

    function handleInputDescriptionChange(e) {
        setDescription(e.target.value);
    }


    React.useEffect(() => {
        setName(user.name);
        setDescription(user.about);
      }, [user, isOpen]); 
      
     
    function handleSubmit(e) {
      e.preventDefault();
    
      onUpdateUser({
        name,
        about: description,
      });
    } 

  return (
    <PopupWithForm title="Редактировать профиль" buttonText={isLoading ? "Сохранение..." : "Сохранить"} name="edit-profile" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
    <div className="popup__section">
      <input className="popup__input popup__input_type_name" id="username-input" value={name || ''} onChange={handleInputNameChange} placeholder="Введите имя" name="username" type="text" minLength="2" maxLength="40" required />
      <span className="popup__input-error username-input-error"></span>
    </div>
    <div className="popup__section">
      <input className="popup__input popup__input_type_occupation" id="occupation-input" value={description || ''} onChange={handleInputDescriptionChange} placeholder="Введите информацию о себе" name="useroccupation" type="text" minLength="2" maxLength="200" required />
      <span className="popup__input-error occupation-input-error"></span>
    </div>
</PopupWithForm>
  )
}

export default EditProfilePopup;