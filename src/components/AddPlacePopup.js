import React from 'react';
import PopupWithForm from './PopupWithForm';


function AddPlacePopup ({isOpen, onClose, onAddPlace, isLoading}) {

  const [place, setPlace] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleInputPlace(evt) {
      setPlace(evt.target.value);
  }

  function handleInputLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: place,
      link,
    });
  }

  React.useEffect(() => {
    setPlace('');
    setLink('');
  }, [isOpen]);


return (
    <PopupWithForm title="Новое место" buttonText={isLoading ? "Сохранение..." : "Создать"} name="add-item" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
        <div className="popup__section">
            <input className="popup__input popup__input_type_place" value={place} onChange={handleInputPlace} id="place-input" placeholder="Название" name="name" type="text" minLength="2" maxLength="30" required />
            <span className="popup__input-error place-input-error"></span>
          </div>
        <div className="popup__section">
            <input className="popup__input popup__input_type_link" value={link} onChange={handleInputLink} id="url-input" placeholder="Ссылка на картинку" name="link" type="url" required />
            <span className="popup__input-error url-input-error"></span>
        </div>
    </PopupWithForm>
)
}

export default AddPlacePopup;