import { logInData, elements } from "../views/base.js";

class Login {
  constructor() {
    this.MIN_EMAIL_LEN = 5;
    this.MIN_PASS_LEN = 8;
    this.ADMIN_PAGE = "/admin.html";
    this.USER_PAGE = "/user.html";
  }

  init() {
    this.checkValidity();
    this.logIn();
  }

  checkValidity() {
    this.checkEmail();
    this.checkPassword();
  }

  checkEmail() {
    elements.email.addEventListener("keyup", () => {
      const pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";
      const matched = elements.email.value.match(pattern);

      matched && elements.email.value.length >= this.MIN_EMAIL_LEN
        ? this.enableButton()
        : this.disableButton();
    });
  }

  checkPassword() {
    elements.password.addEventListener("keyup", () => {
      elements.password.value.length >= this.MIN_PASS_LEN
        ? this.enableButton()
        : this.disableButton();
    });
  }

  enableButton() {
    elements.loginBtn.disabled = false;
  }

  disableButton() {
    elements.loginBtn.disabled = true;
  }

  logIn() {
    elements.loginBtn.addEventListener("click", evt => {
      evt.preventDefault();

      const email = elements.email.value;
      const pass = elements.password.value;

      if (email === logInData.adminEmail && pass === logInData.adminPass) {
        //addRoleToLocalStorage(email, pass);
        window.location.pathname = this.ADMIN_PAGE;
      } else if (email === logInData.userEmail && pass === logInData.userPass) {
        //addRoleToLocalStorage(email, pass);
        window.location.pathname = this.USER_PAGE;
      } else {
        this.showErrorMessage();
        elements.password.value = "";
        this.disableButton();
      }
    });
  }

  // addRoleToLocalStorage(email, pass) {
  //   localStorage.setItem("logged", JSON.stringify());
  // }

  showErrorMessage() {
    const message =
      "<strong>Warning!</strong> Your Email or Password is Incorrect!";
    elements.alertError.innerHTML = message;
    setTimeout(() => {
      elements.alertError.innerHTML = "";
    }, 2500);
  }
}

new Login().init();
