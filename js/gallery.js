import { renderThumbnails } from './thumbnail.js';
import { showBigPhoto } from './big-photo.js';


const container = document.querySelector('.pictures');

const renderGallery = (array) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }

    evt.preventDefault();

    const photo = array.find((element) => element.id === Number(thumbnail.dataset.thumbnailId));
    showBigPhoto(photo);
  });

  renderThumbnails(array, container);
};


export {
  renderGallery
};
