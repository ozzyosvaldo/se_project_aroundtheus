import FormValidator from "./FormValidator.js";
import Card from "./card.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const cardData = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

const card = new Card(cardData, "#card-template");
card.getview();

/* wrappers*/
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileRemoveModal = document.querySelector("#profile-close-modal");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const addNewCardButton = document.querySelector(".profile__add-button");
const profileEditform = profileEditModal.querySelector(".modal__form");

const nameInput = document.querySelector(".modal__input_type_name");
const jobInput = document.querySelector(".modal__input_type_description");

const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const addCardModal = document.querySelector("#add-card-modal");
const addCardRemoveModal = addCardModal.querySelector("#profile-close-modal");
const addCardFormElement = addCardModal.querySelector(".modal__form");
//pop up wrappers
const previewModal = document.querySelector("#image-modal");

// buttons added
const profileModalCloseButton = profileEditModal.querySelector(".modal__close");
const addCardModalCloseButton = addCardModal.querySelector(".modal__close");
const cardTemplateDelete = document.querySelector("#card-template").content;

const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input_type_title"
);
const cardUrlInput = addCardFormElement.querySelector(".modal__input_type_url");

//Image modal

const imageModal = document.querySelector("#image-modal");
const imageModalImage = imageModal.querySelector(".modal__image");
const imageModalCaption = imageModal.querySelector(".modal__caption");

const modalList = document.querySelectorAll(".modal");

// Functions

//previous funtion used 03/20/25
// function openModal(modal) {
//   modal.classList.add("modal_opened");
//   document.addEventListener("keydown", (event) => {
//     if (event.key === "Escape") {
//       closeModal(modal);
//     }
//   });
// }

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscape);
}

const openedPopup = document.querySelector(".modal_opened");

function handleEscape(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".modal_opened");
    closeModal(openedPopup);
  }
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscape);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");

  // validation

  const validationSettings = {
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible",
  };
  const editFormElement = profileEditModal.querySelector(".modal__form");
  const addCardModal = document.querySelector("#add-card-modal");
  const addFormElement = addNewCardButton.querySelector(".modal__form");

  const newFormValidator = new FormValidator(
    validationSettings,
    editFormElement
  );
  newFormValidator.enableValidation();

  const addFormValidator = new FormValidator(
    validationSettings,
    editFormElement
  );

  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
  cardImageEl.src = cardData.link;

  cardImageEl.alt = cardData.name;

  cardTitleEl.textContent = cardData.name;

  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", () => {
      cardElement.remove();
    });

  cardImageEl.addEventListener("click", (e) => handlePreviewImage(cardData));

  return cardElement;
}
function handleModalClose(e) {
  if (e.target.classList.contains("modal")) {
    closeModal(e.currentTarget);
  }
}

modalList.forEach((modal) => {
  modal.addEventListener("mousedown", handleModalClose);
});

// Event Handlers

profileEditButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

function handlePreviewImage(data) {
  imageModalImage.src = data.link;
  imageModalImage.alt = data.name;
  imageModalCaption.textContent = data.name;
  openModal(imageModal);
}

function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(profileEditModal);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({
    name,
    link,
  });
  evt.target.reset();
  closeModal(addCardModal);
}

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
}

// EventListenrs

profileEditform.addEventListener("submit", handleProfileEditSubmit);
addCardFormElement.addEventListener("submit", handleAddCardSubmit);

addNewCardButton.addEventListener("click", () => {
  openModal(addCardModal);
});

//query select all the close buttons and put them in an array
//loop through the array, add an event listener to each close button
//so that when we click it, it close the currently opened modal
const closeButtons = [...document.querySelectorAll(".modal__close")];

closeButtons.forEach((button) => {
  // Find the closest popup only once
  const popup = button.closest(".modal");
  // Set the listener
  button.addEventListener("click", () => closeModal(popup));
});

initialCards.forEach((cardData) => {
  renderCard(cardData);
});
