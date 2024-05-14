import "./pages/index.css";
import { initialCards } from "./components/cards";
import { showCards } from "./components/card";
import { openModal, closeModal } from "./components/modal";

const cardTemplate = document.querySelector("#card-template").content;
const listContainer = document.querySelector(".places__list");

const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditPopup = document.querySelector(".popup.popup_type_edit");
const profileEditButtonClose = profileEditPopup.querySelector(".popup__close");

const profileAddButton = document.querySelector(".profile__add-button");
const profileAddPopup = document.querySelector(".popup_type_new-card");
const profileAddButtonClose = profileAddPopup.querySelector(".popup__close");

const cardImage = cardTemplate.querySelector(".card__image");
const imagePopup = document.querySelector(".popup_type_image");

showCards(initialCards, listContainer, cardTemplate);

console.log(cardImage);
console.log(imagePopup);

profileEditButton.addEventListener("click", () => {
  openModal(profileEditPopup)
});
profileEditPopup.addEventListener("click", evt => {
  closeModal(evt);
});

profileAddButton.addEventListener("click", () => {
  openModal(profileAddPopup)
});
profileAddPopup.addEventListener("click", evt => {
  closeModal(evt);
});

listContainer.addEventListener("click", evt => {
  openModal(imagePopup);
});

imagePopup.addEventListener("click", evt => {
  closeModal(evt);
});