import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function ConfirmationPopup({card, isOpen, onClose, onConfirmDelete, isLoading}) {


    function handleSubmit(e) {
      e.preventDefault();
      onConfirmDelete(card);
    }

    return(
      <PopupWithForm name="confirm" title="Вы уверены?" buttonText={isLoading ? "Удаление..." : "Да"} card={card} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} />
    )
}