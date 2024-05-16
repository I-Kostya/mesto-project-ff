import './pages/index.css';
import { showCards } from './components/card';
import { initialCards } from './components/cards';
import { cardTemplate, listContainer, listPopups } from './components/constant';
import { initPopups } from './components/modal';

showCards(initialCards, listContainer, cardTemplate);
initPopups(listPopups);