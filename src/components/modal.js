import { createCard, deleteCard, likeCard, showPicture } from './card.js';
import {
  cardTemplate,
  formAddCard,
  formEditProfile,
  listContainer,
  profileDescription,
  profileEditPopup,
  profileTitle,
} from './constant.js';

document.querySelectorAll('.popup').forEach(elem => {
  elem.classList.add('popup_is-animated');
});

export function openModal(popup) {
  popup.classList.add('popup_is-opened');

  formEditProfile.name.value = profileTitle.textContent;
  formEditProfile.description.value = profileDescription.textContent;

  const popupCloseBtn = popup.querySelector('.popup__close');
  const popupContent = popup.querySelector('.popup__content');

  popup.addEventListener('click', closeModalByOverlay);
  popupContent.addEventListener('click', evt => evt.stopPropagation());
  popupCloseBtn.addEventListener('click', () => closeModal(popup), {
    once: true,
  });
  document.addEventListener('keydown', closeModalByEsc);
}

function closeModalByEsc(evt) {
  const popup = document.querySelector('.popup_is-opened');

  if (popup && evt.key === 'Escape') {
    closeModal(popup);
  }
}

function closeModalByOverlay(evt) {
  const popup = evt.target.closest('.popup');
  if (popup && popup.classList.contains('popup_is-opened')) {
    closeModal(popup);
  }
}

function closeModal(popup) {
  popup.closest('.popup').classList.remove('popup_is-opened');

  document.removeEventListener('keydown', closeModalByEsc);
}

export function initPopups(popupList) {
  popupList.forEach(popup => {
    popup.openButton.addEventListener('click', () => openModal(popup.window));
  });
}

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameInput = formEditProfile.name.value;
  const jobInput = formEditProfile.description.value;

  profileTitle.textContent = nameInput;
  profileDescription.textContent = jobInput;

  closeModal(profileEditPopup);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

  const cardTitle = formAddCard['place-name'].value;
  const cardUrl = formAddCard.link.value;
  const card = {
    name: cardTitle,
    link: cardUrl,
  };
  const newCard = createCard(
    card,
    cardTemplate,
    deleteCard,
    showPicture,
    likeCard
  );

  listContainer.prepend(newCard);

  formAddCard.reset();
  closeModal(formAddCard);
}

formEditProfile.addEventListener('submit', handleEditProfileFormSubmit);
formAddCard.addEventListener('submit', handleAddCardFormSubmit);
