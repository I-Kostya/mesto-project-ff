import { fillImageData, openModal } from "./modal";
import { imagePopup } from "./constants";

export function createCard (card, deleteCard, cardTemplate) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');
  const likeButton = cardElement.querySelector('.card__like-button');

  cardElement.querySelector('.card__title').textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  
  cardImage.addEventListener('click', () => {
		const image = imagePopup.querySelector('.popup__image') // cardElement
		const imageCaption = imagePopup.querySelector('.popup__caption') // cardElement
		
    image.src = card.link
		image.alt = card.name
		imageCaption.textContent = card.name;

    openModal(imagePopup)
	});

  deleteButton.addEventListener('click', () => {
    deleteCard(cardElement);
	});

  likeButton.addEventListener('click', likeCard);

  return cardElement;
}

function deleteCard(card) {
  card.remove();
}

function likeCard(event) {
	event.target.classList.toggle('card__like-button_is-active')
}

export function showCards (cards, container, cardTemplate) {
  cards.forEach(elem => {
    const card = createCard(elem, deleteCard, cardTemplate);
    
    container.append(card);
  });
}