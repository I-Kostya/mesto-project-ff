export const cardTemplate = document.querySelector('#card-template').content;
export const listContainer = document.querySelector('.places__list');

export const imagePopup = document.querySelector('.popup_type_image');
export const profileEditPopup = document.querySelector('.popup_type_edit');
export const profileAddPopup = document.querySelector('.popup_type_new-card');

export const initialCards = [
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
	},
];
export const listPopups = [
	{
		openButton: document.querySelector('.profile__edit-button'),
		window: profileEditPopup,
	},
	{
		openButton: document.querySelector('.profile__add-button'),
		window: profileAddPopup,
	},
];