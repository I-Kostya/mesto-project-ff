import './pages/index.css';
import { showCards } from './components/cards';
import { initPopups } from './components/modal';
import {
	initialCards,
	listContainer,
	cardTemplate,
	listPopups,
} from './components/constants'

showCards(initialCards, listContainer, cardTemplate);
initPopups(listPopups)