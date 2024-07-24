import { isEscapeKey } from './util.js';


const bigPhotoElement = document.querySelector('.big-picture');
const commentCountElement = bigPhotoElement.querySelector('.social__comment-count');
const commentListElement = bigPhotoElement.querySelector('.social__comments');
const commentsLoaderElement = bigPhotoElement.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');
const cancelButtonElement = bigPhotoElement.querySelector('.big-picture__cancel');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const createComment = ({ avatar, name, message }) => {
  const commentElement = commentTemplate.cloneNode(true);

  commentElement.querySelector('.social__picture').src = avatar;
  commentElement.querySelector('.social__picture').alt = name;
  commentElement.querySelector('.social__text').textContent = message;

  return commentElement;
};

const renderComments = (array) => {
  commentListElement.innerHTML = '';

  const fragment = document.createDocumentFragment();

  array.forEach((element) => {
    const commentElement = createComment(element);

    fragment.append(commentElement);
  });

  commentListElement.append(fragment);
};

const hideBigPhoto = () => {
  bigPhotoElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideBigPhoto();
  }
}

const onCancelButtonClick = () => {
  hideBigPhoto();
};

const renderPhotoDetails = ({ url, description, likes }) => {
  bigPhotoElement.querySelector('.big-picture__img img').src = url;
  bigPhotoElement.querySelector('.big-picture__img img').alt = description;
  bigPhotoElement.querySelector('.likes-count').textContent = likes;
  bigPhotoElement.querySelector('.social__caption').textContent = description;
};

const showBigPhoto = (data) => {
  bigPhotoElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  commentsLoaderElement.classList.add('hidden');
  commentCountElement.classList.add('hidden');

  document.addEventListener('keydown', onDocumentKeydown);

  renderPhotoDetails(data);
  renderComments(data.comments);
};

cancelButtonElement.addEventListener('click', onCancelButtonClick);


export {
  showBigPhoto
};
