import { renderThumbnails } from './thumbnail.js';
import { showBigPhoto } from './big-photo.js';


const container = document.querySelector('.pictures');

let photos = [];

const onContainerClick = (evt) => {
  const thumbnail = evt.target.closest('[data-thumbnail-id]');
  if (!thumbnail) {
    return;
  }

  evt.preventDefault();

  const photo = photos.find((element) => element.id === Number(thumbnail.dataset.thumbnailId));
  showBigPhoto(photo);
};

const renderGallery = (currentPhotos) => {
  photos = currentPhotos;
  renderThumbnails(photos, container);

  container.addEventListener('click', onContainerClick);
};


export {
  renderGallery
};
