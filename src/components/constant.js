export const cardTemplate = document.querySelector('#card-template').content;
export const listContainer = document.querySelector('.places__list');

export const profileEditPopup = document.querySelector('.popup_type_edit');
export const cardAddPopup = document.querySelector('.popup_type_new-card');
export const imagePopup = document.querySelector('.popup_type_image');

export const formEditProfile = document.forms['edit-profile'];
export const formAddCard = document.forms['new-place'];

export const profileTitle = document.querySelector('.profile__title');
export const profileDescription = document.querySelector('.profile__description');

export const listPopups = [
  {
    openButton: document.querySelector('.profile__edit-button'),
    window: profileEditPopup,
  },
  {
    openButton: document.querySelector('.profile__add-button'),
    window: cardAddPopup,
  },
];