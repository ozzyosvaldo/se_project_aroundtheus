// enabling validation by calling enableValidation()
// pass all the settings on call

function enableValidation(options) {
  const formEls = [...document.querySelectorAll(".modal__form")];
  formEls.forEach((formEl) => {
    formEl.addEventListener("Submit" () =>{});
  });
}

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

enableValidation(config);
