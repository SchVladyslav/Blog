import * as postView from "../views/postView.js";
import Post from "./Post.js";
import { elements, logInData } from "../views/base.js";

document.addEventListener("DOMContentLoaded", () => {
  postView.displayPosts();
  eventListeners();
});

function eventListeners() {
  const post = new Post();

  elements.messageForm.addEventListener("submit", evt => {
    evt.preventDefault();
    post.addPost();
  });

  elements.postLink.addEventListener("click", evt => {
    evt.preventDefault();
    post.showDialog();
  });

  elements.postsList.addEventListener("click", evt => {
    evt.preventDefault();
    post.deletePost(evt);
  });

  elements.logOut.addEventListener("click", evt => {
    evt.preventDefault();
    window.location.pathname = logInData.login;
  });
}
