import Login from './login.js';
import Admin from './admin.js';

class App {
  constructor() {
    this.login = new Login();
    this.admin = new Admin(); 
  }

  start() {
    this.login.init();
    this.admin.showDialog();
  }
}

const app = new App();
app.start();
