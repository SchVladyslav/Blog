import { elements } from "../views/base.js";
import * as postView from "../views/postView.js";

export default class Post {
  clearPosts() {
    elements.postsList.innerHTML = "";
  }

  uniqueID() {
    return `f${(~~(Math.random() * 1e8)).toString(32)}`;
  }

  addPost() {
    const value = elements.postInput.value;

    if (value.length) {
      this.clearPosts();
      let post = {
        id: this.uniqueID(),
        text: value,
        date: new Date().getHours()
      };
      this.addPostToLocalStorage(post);
    }
    elements.postInput.value = "";
  }

  addPostToLocalStorage(post) {
    const postsList = this.getPostsFromLocalStorage() || [];
    postsList.push(post);
    localStorage.setItem("posts", JSON.stringify(postsList));

    postView.displayPosts();
  }

  getPostsFromLocalStorage() {
    const JSONposts = localStorage.getItem("posts");
    const posts = JSON.parse(JSONposts);
    return posts;
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
    elements.postLink.addEventListener("click", evt => {
      evt.preventDefault();

      elements.modalPost.classList.add("modal-show");
      elements.modalOverlay.classList.add("modal-overlay-show");
      elements.postInput.focus();
    });

    elements.modalClose.addEventListener("click", evt => {
      evt.preventDefault();
      elements.modalPost.classList.remove("modal-show");
      elements.modalOverlay.classList.remove("modal-overlay-show");
    });

    window.addEventListener("keydown", evt => {
      if (evt.keyCode === 27) {
        if (elements.modalPost.classList.contains("modal-show")) {
          evt.preventDefault();
          elements.modalPost.classList.remove("modal-show");
          elements.modalOverlay.classList.remove("modal-overlay-show");
        }
      }
    });
  }
}
