import * as postView from "../views/postView.js";
import { elements } from "../views/base.js";

postView.displayPosts();

elements.logOut.addEventListener("click", evt => {
  evt.preventDefault();
  window.location.href = "http://127.0.0.1:5500/login.html";
});
