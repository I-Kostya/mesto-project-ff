// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

function addCard (cardName, cardLink, deleteCard) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  
  cardElement.querySelector('.card__title').textContent = cardName;
  cardElement.querySelector('.card__image').src = cardLink;
  cardElement.querySelector('.card__image').alt = cardName;
  
  deleteButton.addEventListener('click', () => {
    deleteCard(cardElement);
	});
  
  return cardElement;
}

function deleteCard(card) {
  card.remove();
}

function showCards () {
  const listContainer = document.querySelector('.places__list'); 
  
  initialCards.forEach(elem => {
    const card = addCard(elem.name, elem.link, deleteCard);
    
    listContainer.append(card);
  });
}

showCards();

