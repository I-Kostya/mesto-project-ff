import { deleteCardRequest, toggleLikeState } from "./api";
import { closeModal, openModal } from "./modal";

const popupDeleteCard = document.querySelector(".popup_type_delete-card");

let cardToDelete = null;
let cardToDeleteId = null;

export function createCard(cardData, cardTemplate, handlers, userId) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const cardImage = cardElement.querySelector(".card__image");
  const likeCounter = cardElement.querySelector(".card__like-counter");
  const likeButton = cardElement.querySelector(".card__like-button");
  cardElement.querySelector(".card__title").textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  if (userId === cardData.owner._id) {
    deleteButton.addEventListener("click", () => {
      handlers.deleteCard(cardElement, cardData._id);
    });
  } else {
    deleteButton.remove();
  }

  likeCounter.textContent = cardData.likes.length;

  if (cardData.likes.some((like) => like._id === userId)) {
    likeButton.classList.add("card__like-button_is-active");
  }

  likeButton.addEventListener("click", (evt) =>
    handlers.likeCard(evt, cardData._id, likeCounter)
  );
  cardImage.addEventListener("click", () => {
    handlers.showPicture(cardData);
  });

  return cardElement;
}

export function deleteCard(card, cardId) {
  cardToDelete = card;
  cardToDeleteId = cardId;
  openModal(popupDeleteCard);
}

export function confirmDeleteCard() {
  if (cardToDelete && cardToDeleteId) {
    deleteCardRequest(cardToDeleteId)
      .then(() => {
        cardToDelete.remove();
        closeModal(popupDeleteCard);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export function likeCard(evt, cardId, likeCounter) {
  toggleLikeState(
    cardId,
    evt.target.classList.contains("card__like-button_is-active")
  )
    .then((result) => {
      evt.target.classList.toggle("card__like-button_is-active");
      likeCounter.textContent = result.likes.length;
    })
    .catch((err) => console.log(err));
}
