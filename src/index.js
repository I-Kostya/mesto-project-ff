import "./pages/index.css";
import { initialCards } from "./components/cards";
import { createCard, deleteCard, likeCard } from "./components/card";
import { openModal, closeModal } from "./components/modal";
import { clearValidation, enableValidation } from "./components/validation";
import {
  getCards,
  getUserInfo,
  postNewCard,
  updateCardOwner,
  updateUserAvatar,
  updateUserInfo,
} from "./components/api";

const cardTemplate = document.querySelector("#card-template").content;
const listContainer = document.querySelector(".places__list");

const popupProfileEdit = document.querySelector(".popup_type_edit");
const popupCardAdd = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");
const popupAvatar = document.querySelector(".popup_type_edit-avatar");

const image = popupImage.querySelector(".popup__image");
const imageCaption = popupImage.querySelector(".popup__caption");

const buttonProfileEdit = document.querySelector(".profile__edit-button");
const buttonProfileAdd = document.querySelector(".profile__add-button");
const buttonsPopupClose = document.querySelectorAll(".popup__close");

const formPopupProfile = document.forms["edit-profile"];
const formPopupCardAdd = document.forms["new-place"];
const formPopupAvatar = document.forms["edit-avatar"];

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileImage = document.querySelector(".profile__image");

const inputImgName = document.querySelector(".popup__input_type_card-name");
const inputImgUrl = document.querySelector(".popup__input_type_url");
const inputAvatarUrl = document.querySelector(".popup__input_type_avatar-url");

const cardHandlers = {
  deleteCard,
  showPicture,
  likeCard,
};
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

function showPicture(card) {
  image.src = card.link;
  image.alt = card.name;
  imageCaption.textContent = card.name;

  openModal(popupImage);
}

function renderLoading(isLoading) {
  const openedPopup = document.querySelector(".popup_is-opened");

  if (openedPopup) {
    const submitButton = openedPopup.querySelector(".popup__button");

    if (isLoading) {
      submitButton.textContent = "Сохранение...";
    } else {
      submitButton.textContent = "Сохранить";
    }
  }
}

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();

  const name = formPopupProfile.name.value;
  const about = formPopupProfile.description.value;

  renderLoading(true);
  updateUserInfo(name, about)
    .then((data) => {
      profileTitle.textContent = data.name;
      profileDescription.textContent = data.about;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false);
      closeModal(popupProfileEdit);
    });
}

function handleEditAvatarFormSubmit(evt) {
  evt.preventDefault();

  renderLoading(true);
  updateUserAvatar(inputAvatarUrl.value)
    .then((data) => {
      profileImage.style.backgroundImage = `url(${data.avatar})`;
      formPopupAvatar.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false);
      closeModal(popupAvatar);
    });
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();

  const name = inputImgName.value;
  const link = inputImgUrl.value;

  renderLoading(true);
  postNewCard({ name, link })
    .then((cardData) => {
      const newCard = createCard(
        cardData,
        cardTemplate,
        cardHandlers,
        cardData.owner._id
      );

      listContainer.prepend(newCard);
      formPopupCardAdd.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false);
      closeModal(popupCardAdd);
    });
}

document.querySelectorAll(".popup").forEach((elem) => {
  elem.classList.add("popup_is-animated");
});

buttonsPopupClose.forEach((btn) => {
  const closestPopup = btn.closest(".popup");

  btn.addEventListener("click", () => closeModal(closestPopup));
});

profileImage.addEventListener("click", () => {
  openModal(popupAvatar);
});
buttonProfileEdit.addEventListener("click", () => {
  formPopupProfile.name.value = profileTitle.textContent;
  formPopupProfile.description.value = profileDescription.textContent;
  clearValidation(popupProfileEdit, validationConfig);
  openModal(popupProfileEdit);
});
buttonProfileAdd.addEventListener("click", () => {
  openModal(popupCardAdd);
});

formPopupProfile.addEventListener("submit", handleEditProfileFormSubmit);
formPopupCardAdd.addEventListener("submit", handleAddCardFormSubmit);
formPopupAvatar.addEventListener("submit", handleEditAvatarFormSubmit);

enableValidation(validationConfig);

function renderProfile(user) {
  profileTitle.textContent = user.name;
  profileDescription.textContent = user.about;
  profileImage.style.backgroundImage = `url(${user.avatar})`;
}
function renderCards(cards, userId) {
  cards.forEach((card) => {
    const newCard = createCard(card, cardTemplate, cardHandlers, userId);

    listContainer.append(newCard);
  });
}

Promise.all([getUserInfo(), getCards()])
  .then(([user, cards]) => {
    renderProfile(user);
    renderCards(cards, user._id);
  })
  .catch((err) => console.log(err));
