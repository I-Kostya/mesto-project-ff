const cardTemplate = document.querySelector('#card-template').content;
const listContainer = document.querySelector('.places__list'); 

function createCard (card, deleteCard) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');

  cardElement.querySelector('.card__title').textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;
  
  deleteButton.addEventListener('click', () => {
    deleteCard(cardElement);
	});
  
  return cardElement;
}

function deleteCard(card) {
  card.remove();
}

function showCards () {
  initialCards.forEach(elem => {
    const card = createCard(elem, deleteCard);
    
    listContainer.append(card);
  });
}

showCards();

