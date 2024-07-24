import { isEscapeKey } from './util.js';


const COMMENTS_PER_PORTION = 5;

const bigPhotoElement = document.querySelector('.big-picture');
const commentShownCountElement = bigPhotoElement.querySelector('.social__comment-shown-count');
const commentTotalCountElement = bigPhotoElement.querySelector('.social__comment-total-count');
const commentListElement = bigPhotoElement.querySelector('.social__comments');
const commentsLoaderElement = bigPhotoElement.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');
const cancelButtonElement = bigPhotoElement.querySelector('.big-picture__cancel');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

let commentsShown = 0;
let comments = [];

const createComment = ({ avatar, name, message }) => {
  const commentElement = commentTemplate.cloneNode(true);

  commentElement.querySelector('.social__picture').src = avatar;
  commentElement.querySelector('.social__picture').alt = name;
  commentElement.querySelector('.social__text').textContent = message;

  return commentElement;
};

const renderComments = () => {
  commentsShown += COMMENTS_PER_PORTION;

  if (commentsShown >= comments.length) {
    commentsLoaderElement.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < commentsShown; i++) {
    const commentElement = createComment(comments[i]);
    fragment.append(commentElement);
  }

  commentListElement.innerHTML = '';
  commentListElement.append(fragment);
  commentShownCountElement.textContent = commentsShown;
  commentTotalCountElement.textContent = comments.length;
};

const hideBigPhoto = () => {
  bigPhotoElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  commentsShown = 0;

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

const onCommentsLoaderClick = () => renderComments();

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

  document.addEventListener('keydown', onDocumentKeydown);

  renderPhotoDetails(data);

  comments = data.comments;
  if (comments.length > 0) {
    renderComments();
  }
};

cancelButtonElement.addEventListener('click', onCancelButtonClick);
commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);


export {
  showBigPhoto
};
