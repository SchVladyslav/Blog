import * as postView from "../views/postView.js";
import { elements, logInData } from "../views/base.js";

postView.displayPosts();

elements.logOut.addEventListener("click", evt => {
  evt.preventDefault();
  window.location.href = logInData.login;
});
