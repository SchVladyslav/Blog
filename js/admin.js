class Admin {
  constructor() {
    this.button__post = document.querySelectorAll(".button__post");
    this.modalPost = document.querySelector(".modal-post");
    this.modalOverlay = document.querySelector(".modal-overlay");
    this.close = this.modalPost.querySelector(".modal-close");

    this.post = this.modalPost.querySelector("[name=post]");
    //this.storage = localStorage.getItem("login");
  }

  setup() {
    this.button__post.forEach(item => {
      item.addEventListener("click", evt => {
        evt.preventDefault();

        this.modalPost.classList.add("modal-show");
        this.modalOverlay.classList.add("modal-overlay-show");
        this.modal__textarea.focus();

        //   if (storage) {
        //     login.value = storage;
        //   }
      });
    });

    this.close.addEventListener("click", evt => {
      console.log(this.close);
      evt.preventDefault();
      this.modalPost.classList.remove("modal-show");
      this.modalOverlay.classList.remove("modal-overlay-show");
      this.modalPost.classList.remove("modal-error");
    });

    // this.form.addEventListener("submit", function(event) {
    //   if (!login.value || !password.value) {
    //     event.preventDefault();
    //     popup.classList.add("modal-error");
    //   } else {
    //     localStorage.setItem("login", login.value);
    //   }
    // });

    window.addEventListener("keydown", evt => {
      if (evt.keyCode === 27) {
        if (this.modalPost.classList.contains("modal-show")) {
          evt.preventDefault();
          this.modalPost.classList.remove("modal-show");
          this.modalOverlay.classList.remove("modal-overlay-show");
        }
      }
    });
  }

  showDialog() {}
}

const admin = new Admin();
admin.setup();
