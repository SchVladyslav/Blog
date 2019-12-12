import Post from "../models/Post.js";
import { elements } from "./base.js";

export const displayPosts = () => {
  const postsList = new Post().getPostsFromLocalStorage();

  postsList.forEach(item => {
    const markup = preparePost(item);
    elements.postsList.insertAdjacentHTML("afterbegin", markup);
  });
};

const preparePost = item => {
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
};
