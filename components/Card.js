// export default class Card {
//   constructor({ name, link }, cardSelector, handleImageClick) {
//     this._name = name;
//     this._link = link;
//     this._cardSelector = cardSelector;
//   }

//   _setEventListeners() {
//     this._cardElement
//       .querySelector(".card__like-button")
//       .addEventListener("click", () => {
//         this._handleLikeIcon();
//       });

//     //.card__like-button
//     //card__delete-button

//     const deleteButton = this._cardElement
//       .querySelector(".card__delete-button")
//       .addEventListener("click", () => {
//         this._handleDeleteCard();
//       });
//   }

//   _handleDeleteCard() {
//     this._cardElement.remove();
//     this._cardElement = null;
//   }

//   _handleLikeIcon() {
//     this._cardElement
//       .querySelector(".card__like-button")
//       .classList.toggle("card__like-button_active");
//   }

//   getview() {
//     this._cardElement = document
//       .querySelector(this._cardSelector)
//       .content.querySelector(".card")
//       .cloneNode(true);

//     this._setEventListeners();

//     return this._cardElement; // ✅ return the card element
//   }
// }

export default class Card {
  constructor({ name, link }, cardSelector, handleImageClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick; // store the handler
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });

    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        if (this._handleImageClick) {
          this._handleImageClick(this._name, this._link);
        }
      });
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  getview() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    // Set card content here
    this._cardElement.querySelector(".card__title").textContent = this._name;
    const imageEl = this._cardElement.querySelector(".card__image");
    imageEl.src = this._link;
    imageEl.alt = this._name;

    this._setEventListeners();

    return this._cardElement; // return the card element
  }
}
