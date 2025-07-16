# 📝 ToDo App

A responsive ToDo List application built using Object-Oriented JavaScript. Users can add tasks, mark them complete, and delete them. Validation is handled using reusable class logic.

## 🚀 Live Demo

[🔗 View the deployed project](https://ozzyosvaldo.github.io/se_project_aroundtheus)

## 💡 Features

- Add new todos via a modal form
- Real-time form validation using `FormValidator` class
- Each todo has a unique ID (via `Date.now()` or UUID)
- Mark tasks as completed or delete them
- Fully responsive and accessible UI

## 🧩 Core Classes

### `Todo`

- Encapsulates todo logic
- Private fields for title, ID, and completion state
- `getView()` returns DOM element
- Handles internal event listeners (complete, delete)

### `FormValidator`

- Validates inputs in real-time
- Manages submit button state
- Supports `resetValidation()` on modal open

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript (ES6+)

video=
https://www.loom.com/share/b9be1c1c3e8548158b3ead210d72c8d0?sid=6bcd346f-b436-4d2a-bdc5-7f85265c82a1
