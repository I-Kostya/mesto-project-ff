import "./pages/index.css";
import { initialCards } from "./components/cards";
import { createCard, deleteCard, likeCard } from "./components/card";
import { openModal, closeModal } from "./components/modal";

const cardTemplate = document.querySelector("#card-template").content;
const listContainer = document.querySelector(".places__list");

const profileEditPopup = document.querySelector(".popup_type_edit");
const cardAddPopup = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");

const image = imagePopup.querySelector(".popup__image");
const imageCaption = imagePopup.querySelector(".popup__caption");

const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const listCloseButton = document.querySelectorAll(".popup__close");

const editProfileForm = document.forms["edit-profile"];
const addCardForm = document.forms["new-place"];

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
  openModal(imagePopup);
}

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = editProfileForm.name.value;
  profileDescription.textContent = editProfileForm.description.value;

  closeModal(profileEditPopup);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

  const cardData = {
    name: addCardForm['place-name'].value,
    link: addCardForm.link.value,
  }

  const newCard = createCard(cardData, cardTemplate, cardHandlers);

  listContainer.prepend(newCard);

  addCardForm.reset();
  closeModal(cardAddPopup);
}

document.querySelectorAll(".popup").forEach((elem) => {
  elem.classList.add("popup_is-animated");
});

listCloseButton.forEach((btn) => {
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

profileEditButton.addEventListener("click", () => {
  editProfileForm.name.value = profileTitle.textContent;
  editProfileForm.description.value = profileDescription.textContent;
  openModal(profileEditPopup);
});
profileAddButton.addEventListener("click", () => {
  openModal(cardAddPopup);
});

editProfileForm.addEventListener("submit", handleEditProfileFormSubmit);
addCardForm.addEventListener("submit", handleAddCardFormSubmit);
