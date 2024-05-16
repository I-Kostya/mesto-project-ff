import './pages/index.css';
import { initialCards } from './components/cards';
import {
  createCard,
  deleteCard,
  showPicture,
  likeCard,
} from './components/card';
import { cardTemplate, listContainer, listPopups } from './components/constant';
import { initPopups } from './components/modal';

function showCards(cards, container, cardTemplate) {
  cards.forEach(card => {
    const newCard = createCard(
      card,
      cardTemplate,
      deleteCard,
      showPicture,
      likeCard
    );
    container.append(newCard);
  });
}

showCards(initialCards, listContainer, cardTemplate);
initPopups(listPopups);
