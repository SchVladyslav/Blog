import Login from './login.js';

class App {
  start() {
    const login = new Login();
    login.init();
  }
}

const app = new App();
app.start();
