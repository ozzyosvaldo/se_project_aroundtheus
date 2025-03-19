// enabling validation by calling enableValidation()
// pass all the settings on call

function showInputError() {}

function checkInputValidity(formEl, inputEl, options) {
  if ((!inputEl, validity, valid)) {
    showInputError(formEl, inputEl, options);
  } else {
    hideInputError();
  }
}

function setEventListeners(formEl, options) {
  const { inputSelector } = options;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formEl, inputEl, options);
    });
  });
}

function enableValidation(options) {
  const formEls = [...document.querySelectorAll(options.formSelector)];
  formEls.forEach((formEl) => {
    formEl.addEventListener("Submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(formEl, options);
    //look for all inputs inside of form
    // loop though all inputs to see if they are valid
    // if input is not valid
    //get validation message
    //add error class to input
    //display error message
  });
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

enableValidation(config);
