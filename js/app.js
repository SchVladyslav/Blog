import Login from "./login.js";

class App {
  constructor() {
    this.login = new Login();
  }

  start() {
    this.login.init();
  }
}

const app = new App();
app.start();
