import { fillImageData } from "./modal";

export function createCard (card, deleteCard, cardTemplate) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');

  cardElement.querySelector('.card__title').textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  
  cardImage.addEventListener("click", () => {
    fillImageData(card)
  });
  deleteButton.addEventListener('click', () => {
    deleteCard(cardElement);
	});

  return cardElement;
}

function deleteCard(card) {
  card.remove();
}

export function showCards (cards, container, cardTemplate) {
  cards.forEach(elem => {
    const card = createCard(elem, deleteCard, cardTemplate);
    
    container.append(card);
  });
}