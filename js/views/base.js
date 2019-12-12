export const elements = {
  /* admin.html */
  postBtn: document.querySelector(".admin-main__post"),
  postInput: document.querySelector("[name=post]"),
  postLink: document.querySelector(".nav__btn-post"),

  modalPost: document.querySelector(".modal-post"),
  messageForm: document.querySelector(".message__form"),
  modalClose: document.querySelector(".modal-close"),

  postsList: document.querySelector(".posts__list"),
  modalOverlay: document.querySelector(".modal-overlay"),
  logOut: document.querySelector(".admin-main__logout"),

  /* login.html */
  email: document.querySelector(".input__email"),
  password: document.querySelector(".input__password"),
  loginBtn: document.querySelector(".button__login"),
  alertError: document.querySelector(".alert__error")
};

export const logInData = {
  userEmail: "user@gmail.com",
  userPass: "22222222",
  adminEmail: "admin@gmail.com",
  adminPass: "11111111"
};
