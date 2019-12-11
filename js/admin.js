class Admin {
  constructor() {
    this.messageForm = document.querySelector(".message__form");
    this.button__post = document.querySelector(".admin-main__post");
    this.link__post = document.querySelector(".nav__btn-post");

    this.modalPost = document.querySelector(".modal-post");
    this.modalOverlay = document.querySelector(".modal-overlay");
    this.modalClose = this.modalPost.querySelector(".modal-close");

    this.post = this.messageForm.querySelector("[name=post]");
    this.postsList = document.querySelector(".posts__list");
  }

  clearPosts() {
    this.postsList.innerHTML = "";
  }

  uniqueID() {
    return `f${(~~(Math.random() * 1e8)).toString(32)}`;
  }

  addPost() {
    this.clearPosts();
    const value = this.post.value;

    if (value.length) {
      let post = {
        id: this.uniqueID(),
        text: value,
        date: new Date().getHours()
      };
      this.addPostToLocalStorage(post);
    }
    this.post.value = "";
  }

  addPostToLocalStorage(post) {
    const postsList = this.getPostsFromLocalStorage() || [];
    postsList.push(post);
    localStorage.setItem("posts", JSON.stringify(postsList));

    this.displayPosts();
  }

  getPostsFromLocalStorage() {
    const JSONposts = localStorage.getItem("posts");
    const posts = JSON.parse(JSONposts);
    return posts;
  }

  displayPosts() {
    const postsList = this.getPostsFromLocalStorage();
    postsList.forEach(item => {
      const markup = this.preparePost(item);
      this.postsList.insertAdjacentHTML("afterbegin", markup);
    });
  }

  preparePost(item) {
    const markup = `
    <li class="posts__item" data-id="${item.id}">
    <img class="user-logo" src="./img/Barak.jpg" alt="User Logo" />
    <div class="content-wrap">
      <div class="item__title">
        <div class="item__title-wrap">
            <h3 class="item__name">Barack Obama</h3>
            <p class="item__username">@BarackObama</p>
            <span class="item__time">${item.date}h</span>
        </div>
        <button type="button" class="item__btn item__delete" type="button">Delete</button>
      </div>
      <p class="item__desc">
        ${item.text}
      </p>      
      <div class="item__actions-wrap">
        <ul class="item-actions__list">
          <li class="item-actions__item">
            <i class="icon icon-chat icon-16"></i>
            <span class="count">457</span>
          </li>
          <li class="item-actions__item">
            <i class="icon icon-share icon-16"></i>
            <span class="count">4.7K</span>
          </li>
          <li class="item-actions__item">
            <i class="icon icon-heart icon-16"></i>
            <span class="count">457</span>
          </li>
          <li class="item-actions__item">
            <i class="icon icon-upload icon-16"></i>
          </li>
        </ul>
      </div>
    </div>
  </li>
    `;
    return markup;
  }

  deletePost(evt) {
    const id = evt.target.closest(".posts__item").dataset.id;
    if (evt.target.matches(".item__delete, .item__delete *")) {
      const item = document.querySelector(`[data-id='${id}']`);
      if (item) item.parentElement.removeChild(item); // li
      this.deletePostFromLocalStorage(id);
    }
  }

  deletePostFromLocalStorage(id) {
    let postsList = this.getPostsFromLocalStorage();
    if (postsList.length) {
      postsList = postsList.filter(item => item.id != id);
      localStorage.setItem("posts", JSON.stringify(postsList));
    }
  }

  showDialog() {
    this.link__post.addEventListener("click", evt => {
      evt.preventDefault();

      this.modalPost.classList.add("modal-show");
      this.modalOverlay.classList.add("modal-overlay-show");
      this.post.focus();
    });

    this.modalClose.addEventListener("click", evt => {
      evt.preventDefault();
      this.modalPost.classList.remove("modal-show");
      this.modalOverlay.classList.remove("modal-overlay-show");
      this.modalPost.classList.remove("modal-error");
    });

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
}

function eventListeners() {
  const messageForm = document.querySelector(".message__form");
  const navPostBtn = document.querySelector(".nav__btn-post");
  const postsList = document.querySelector(".posts__list");

  const admin = new Admin();

  messageForm.addEventListener("submit", evt => {
    evt.preventDefault();
    admin.addPost();
  });

  navPostBtn.addEventListener("click", evt => {
    evt.preventDefault();
    admin.showDialog();
  });

  postsList.addEventListener("click", evt => {
    evt.preventDefault();
    admin.deletePost(evt);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  new Admin().displayPosts();
  eventListeners();
});
