export function openModal(popup) {
  popup.classList.add('popup_is-opened');
  
  const popupCloseBtn = popup.querySelector('.popup__close');
  const popupContent = popup.querySelector('.popup__content');
  

  popup.addEventListener("click", closeModalByOverlay);
  popupCloseBtn.addEventListener('click', () => {
    closeModal(popup);
  }, {once: true});
  popupContent.addEventListener('click', event => {
    event.stopPropagation();
  });
  document.addEventListener("keydown", closeModalByEsc);
}

function closeModalByEsc(evt) {
  const popup = document.querySelector('.popup_is-opened');

  if(popup && evt.key === "Escape") {
    closeModal(popup);
  }
}

function closeModalByOverlay(evt) {
  const popup = evt.target.closest('.popup');
    if(popup && popup.classList.contains('popup_is-opened')){
      closeModal(popup);
    }
}

function closeModal(popup) {
  popup.closest('.popup').classList.remove('popup_is-opened');

  document.removeEventListener("keydown", closeModalByEsc);
}

export function initPopups(popupList) {
  popupList.forEach(popup => {

		popup.openButton.addEventListener('click', () => {
			openModal(popup.window);
		});
	});
};