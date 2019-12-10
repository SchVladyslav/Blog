export default class Login {
    constructor() {
        this.email = document.querySelector('.input__email');
        this.password = document.querySelector('.input__password');
        this.login_btn = document.querySelector('.button__login');
        this.alert__error = document.querySelector('.alert__error');

        this.userEmail = 'user@gmail.com';
        this.adminEmail = 'admin@gmail.com';
        this.adminPass = '11111111';
        this.userPass = '22222222';

        this.emailChecked = false;
        this.passChecked = false;
    }

    init() {
        this.checkValidity(); 
        this.logIn();
    }

    checkValidity() {
        this.checkEmail();
        this.checkPassword();
    }

    enableButton() {     
        if (this.emailChecked && this.passChecked) {
            this.login_btn.disabled = false;
        } else {
            this.login_btn.disabled = true;
        }
    }

    checkEmail() {
        this.email.addEventListener('keyup', () => {
            const pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            const matched = this.email.value.match(pattern);

            if (matched && this.email.value.length >= 5) {
                this.emailChecked = true;
                this.enableButton();
            } else {
                this.emailChecked = false;
                this.enableButton();
            }
        });
    }

    checkPassword() {
        this.password.addEventListener('keyup', () => {
            
            if (this.password.value.length >= 8) {
                this.passChecked = true;
                this.enableButton();
            } else {
                this.passChecked = false;
                this.enableButton();
            }
        });
    }

    logIn() {
        this.login_btn.addEventListener('click', (evt) => {
            evt.preventDefault();

            const email = this.email.value;
            const pass = this.password.value;

            if (email === this.adminEmail && pass === this.adminPass) {
                window.location.href = ("http://127.0.0.1:5500/admin.html");
            }

            else if (email === this.userEmail && pass === this.userPass) {
                window.location.href = ("http://127.0.0.1:5500/user.html");
            }
            else {
                this.showErrorMessage();
                this.password.value = "";
                this.login_btn.disabled = true;
            }
        });
    }

    showErrorMessage() {
        const message = "<strong>Warning!</strong> Your Email or Password is Incorrect!";
        this.alert__error.innerHTML = message;
        setTimeout(() => {
            this.alert__error.innerHTML = "";
        }, 2500);
    }
}

