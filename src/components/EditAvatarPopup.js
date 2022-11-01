import React from 'react';
import PopupWithForm from './PopupWithForm';


function EditAvatarPopup ({isOpen, onClose, onUpdateAvatar, isLoading}) {

    const inputRef = React.useRef();

    function handleSubmit(e) {
      e.preventDefault();
      onUpdateAvatar({
        avatar: inputRef.current.value,
      });
    }

    React.useEffect(() => {
        inputRef.current.value = '';
      }, [isOpen]);


return (
    <PopupWithForm title="Обновить аватар" buttonText={isLoading ? "Сохранение..." : "Сохранить"} name="edit-avatar" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
        <div className="popup-edit-avatar__section">
            <input className="popup__input popup__input_type_url" ref={inputRef} id="link-input" placeholder="Ссылка на аватар" name="avatar" type="url" required />
            <span className="popup__input-error link-input-error"></span>
        </div>
    </PopupWithForm>
)
}

export default EditAvatarPopup;