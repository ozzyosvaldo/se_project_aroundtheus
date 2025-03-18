// enabling validation by calling enableValidation()
// pass all the settings on call

function setEventListeners(formEl, options) {}

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
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

enableValidation(config);
