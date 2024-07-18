import {getPhotos} from './data.js';


const otherUsersContainer = document.querySelector('.pictures');
const otherUsersTemplate = document.querySelector('#picture').content;

const imagesFromOtherUsers = getPhotos();

const otherUsersListFragment = document.createDocumentFragment();

imagesFromOtherUsers.forEach(({url, description, comments, likes}) => {
  const otherUserElement = otherUsersTemplate.cloneNode(true);

  otherUserElement.querySelector('.picture__img').src = url;
  otherUserElement.querySelector('.picture__img').alt = description;
  otherUserElement.querySelector('.picture__comments').textContent = comments.length;
  otherUserElement.querySelector('.picture__likes').textContent = likes;

  otherUsersListFragment.appendChild(otherUserElement);
});

otherUsersContainer.appendChild(otherUsersListFragment);
