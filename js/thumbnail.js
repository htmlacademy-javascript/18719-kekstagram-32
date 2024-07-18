const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnail = ({url, description, likes, comments}) => {
  const thumbnailElement = thumbnailTemplate.cloneNode(true);

  thumbnailElement.querySelector('.picture__img').src = url;
  thumbnailElement.querySelector('.picture__img').alt = description;
  thumbnailElement.querySelector('.picture__comments').textContent = comments.length;
  thumbnailElement.querySelector('.picture__likes').textContent = likes;

  return thumbnailElement;
};


const generateThumbnail = (array) => {
  const fragment = document.createDocumentFragment();

  array.forEach((element) => {
    const thumbnailElement = createThumbnail(element);

    fragment.append(thumbnailElement);
  });

  container.append(fragment);
};


export {
  generateThumbnail
};
