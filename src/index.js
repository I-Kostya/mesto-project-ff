import "./pages/index.css";
import { initialCards } from "./components/cards";
import { createCard, deleteCard, likeCard } from "./components/card";
import { openModal, closeModal } from "./components/modal";

const cardTemplate = document.querySelector("#card-template").content;
const listContainer = document.querySelector(".places__list");

const popupProfileEdit = document.querySelector(".popup_type_edit");
const popupCardAdd = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");

const image = popupImage.querySelector(".popup__image");
const imageCaption = popupImage.querySelector(".popup__caption");

const buttonProfileEdit = document.querySelector(".profile__edit-button");
const buttonProfileAdd = document.querySelector(".profile__add-button");
const buttonsPopupClose = document.querySelectorAll(".popup__close");

const formPopupProfile = document.forms["edit-profile"];
const formPopupCardAdd = document.forms["new-place"];

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const cardHandlers = {
  deleteCard,
  showPicture,
  likeCard,
}

function showPicture(card) {
  image.src = card.link;
  image.alt = card.name;
  imageCaption.textContent = card.name;

  openModal(popupImage);
}

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = formPopupProfile.name.value;
  profileDescription.textContent = formPopupProfile.description.value;

  closeModal(popupProfileEdit);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

  const cardData = {
    name: formPopupCardAdd['place-name'].value,
    link: formPopupCardAdd.link.value,
  }

  const newCard = createCard(cardData, cardTemplate, cardHandlers);

  listContainer.prepend(newCard);

  formPopupCardAdd.reset();

  closeModal(popupCardAdd);
}

document.querySelectorAll(".popup").forEach((elem) => {
  elem.classList.add("popup_is-animated");
});

buttonsPopupClose.forEach((btn) => {
  const closestPopup = btn.closest(".popup");

  btn.addEventListener("click", () => closeModal(closestPopup));
});

initialCards.forEach((card) => {
  const newCard = createCard(
    card,
    cardTemplate,
    cardHandlers
  );

  listContainer.append(newCard);
});

buttonProfileEdit.addEventListener("click", () => {
  formPopupProfile.name.value = profileTitle.textContent;
  formPopupProfile.description.value = profileDescription.textContent;
  
  openModal(popupProfileEdit);
});
buttonProfileAdd.addEventListener("click", () => {
  openModal(popupCardAdd);
});

formPopupProfile.addEventListener("submit", handleEditProfileFormSubmit);
formPopupCardAdd.addEventListener("submit", handleAddCardFormSubmit);
