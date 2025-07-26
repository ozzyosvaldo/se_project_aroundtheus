import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";

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

const validationSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

// ✅ Create FormValidator instance for the add card form
const addCardFormValidator = new FormValidator(
  validationSettings,
  addCardFormElement
);
addCardFormValidator.enableValidation();

// Functions

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscape);
}

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

// validation

function getCardElement(cardData) {
  const card = new Card(cardData, "#card-template", handlePreviewImage);
  return card.getview();
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

  renderCard({ name, link });
  evt.target.reset();
  addCardFormValidator.toggleButtonState();
  closeModal(addCardModal);
}
// function handleAddCardSubmit(evt) {
//   evt.preventDefault();
//   const name = cardTitleInput.value;
//   const link = cardUrlInput.value;
//   renderCard({
//     name,
//     link,
//   });
//   evt.target.reset();
//   closeModal(addCardModal);
// }

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
