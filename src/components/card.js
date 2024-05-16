import { openModal } from './modal.js';
import { imagePopup } from './constant.js';

export function createCard(
  card,
  cardTemplate,
  deleteCard,
  showPicture,
  likeCard
) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');
  const likeButton = cardElement.querySelector('.card__like-button');

  cardElement.querySelector('.card__title').textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;

  cardImage.addEventListener('click', () => showPicture(card));
  deleteButton.addEventListener('click', () => deleteCard(cardElement));
  likeButton.addEventListener('click', likeCard);

  return cardElement;
}

export function showPicture(card) {
  const image = imagePopup.querySelector('.popup__image');
  const imageCaption = imagePopup.querySelector('.popup__caption');

  image.src = card.link;
  image.alt = card.name;
  imageCaption.textContent = card.name;
  openModal(imagePopup);
}

export function deleteCard(card) {
  card.remove();
}

export function likeCard(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}
