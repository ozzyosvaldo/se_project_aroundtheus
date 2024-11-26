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

// buttons added
const profileModalCloseButton = profileEditModal.querySelector(".modal__close");
const addCradModalCloseButton = addCardModal.querySelector(".modal__close");

const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input_type_title"
);
const cardUrlInput = addCardFormElement.querySelector(".modal__input_type_url");
// Functions

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");

  cardImageEl.src = cardData.link;

  cardImageEl.alt = cardData.name;

  cardTitleEl.textContent = cardData.name;

  return cardElement;
}

// Event Handlers

addCardModal.addEventListener("submit", handleProfileEditSubmit);
profileEditButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(profileEditModal);
}

function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  const cardElement = getCardElement();
  closeModal(addCardModal);
}

function openModal(modal) {
  modal.classList.add("modal_opened");
}

// EventListenrs

profileEditButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

profileRemoveModal.addEventListener("click", closeModal);

profileEditform.addEventListener("submit", handleProfileEditSubmit);

profileRemoveModal.addEventListener("click", () =>
  closeModal(profileEditModal)
);

addNewCardButton.addEventListener("click", () => {
  openModal(addCardModal);
});

addCardRemoveModal.addEventListener("click", () => closeModal(addCardModal));

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});

const likeButtons = document.querySelectorAll(".card__like-button");
likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
});
