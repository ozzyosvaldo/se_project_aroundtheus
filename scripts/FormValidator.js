class FormValidator {
  constructor(settings, fromElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = fromElement;
  }

  _showInputError(inputEl) {
    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this._inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(this._errorClass);
  }

  _toggleButtonState() {}

  _hasInvalidInput() {}

  _checkInputValidity() {}

  _setEventListeners() {
    this._inputEls = [...this.form.querySelectorAll(this._inputSelector)];
    this._submitButton = this.form.querySelector(this._submitButtonSelector);

    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        checkInputValidity(this.form, inputEl, options);
        toggleButtonState(inputEls, submitButton, options);
      });
    });
  }

  enableValidation() {
    this._fprm.addEventListener("Submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(formEl, options);
  }
}

export default FormValidator;
