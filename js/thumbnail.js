const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = ({ url, description, likes, comments, id }) => {
  const thumbnailElement = thumbnailTemplate.cloneNode(true);

  thumbnailElement.querySelector('.picture__img').src = url;
  thumbnailElement.querySelector('.picture__img').alt = description;
  thumbnailElement.querySelector('.picture__comments').textContent = comments.length;
  thumbnailElement.querySelector('.picture__likes').textContent = likes;
  thumbnailElement.dataset.thumbnailId = id;

  return thumbnailElement;
};

const renderThumbnails = (array, container) => {
  const fragment = document.createDocumentFragment();

  array.forEach((element) => {
    const thumbnailElement = createThumbnail(element);

    fragment.append(thumbnailElement);
  });

  container.append(fragment);
};


export {
  renderThumbnails
};
