export function openModal(popup) {
  popup.classList.add("popup_is-opened");

  popup.addEventListener("click", closeModalByOverlay);
  document.addEventListener("keydown", closeModalByEsc);
}

export function closeModal(popup) {
  popup.classList.remove("popup_is-opened");

  document.removeEventListener("keydown", closeModalByEsc);
}

function closeModalByEsc(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened");
    if (popup) {
      closeModal(popup);
    }
  }
}

function closeModalByOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
  }
}
