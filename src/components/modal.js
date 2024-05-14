export function openModal(evt) {
  evt.style.display = "flex";
}

export function closeModal(evt) {
  if(evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup')) {
    evt.currentTarget.style.display = "none";
  }
}

export function fillImageData(card) {
  const popupImage = document.querySelector(".popup__image");
  const imageCaption = document.querySelector(".popup__caption");
  popupImage.src = card.link;
  popupImage.alt = card.name;
  imageCaption.textContent = card.name;
}