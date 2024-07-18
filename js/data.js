import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './util.js';


const PHOTO_COUNT = 25;
const MAX_PHOTO_COUNT = 25;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_MIN_COUNT = 0;
const COMMENT_MAX_COUNT = 30;
const AVATAR_MIN_COUNT = 1;
const AVATAR_MAX_COUNT = 6;
const MESSAGE_MIN_COUNT = 1;
const MESSAGE_MAX_COUNT = 2;

const DESCRIPTION = [
  'Something 1', 'Something 2', 'Something 3', 'Something 4',
  'Something 5', 'Something 6', 'Something 7', 'Something 8',
  'Something 9', 'Something 10', 'Something 11', 'Something 12',
  'Something 13', 'Something 14', 'Something 15', 'Something 16',
  'Something 17', 'Something 18', 'Something 19', 'Something 20',
  'Something 21', 'Something 22', 'Something 23', 'Something 24',
  'Something 25',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Айми', 'Ай', 'Айка', 'Аканэ', 'Акира', 'Аюми', 'Ёсико',
  'Иошико', 'Казуми', 'Каори', 'Касуми', 'Кими', 'Киоко',
  'Котонэ', 'Куми', 'Марико', 'Ми', 'Мизуки', 'Миюки',
  'Мия', 'Мэйко', 'Натсуми', 'Нэтсу', 'Рей', 'Рин',
  'Сакура', 'Сумико',
];

const generateRandomId = createIdGenerator();

const createMessage = () => Array.from(
  {length: getRandomInteger(MESSAGE_MIN_COUNT, MESSAGE_MAX_COUNT)},
  () => getRandomArrayElement(MESSAGES),
).join(' ');

const createComment = () => ({
  id: generateRandomId(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN_COUNT, AVATAR_MAX_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = (index) => ({
  id: index,
  url: index <= MAX_PHOTO_COUNT ? `photos/${index}.jpg` : 'photos/4.jpg',
  description: index <= MAX_PHOTO_COUNT ? DESCRIPTION[index - 1] : DESCRIPTION[3],
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    {length: getRandomInteger(COMMENT_MIN_COUNT, COMMENT_MAX_COUNT)},
    createComment,
  ),
});

const getPhotos = () => Array.from(
  {length: PHOTO_COUNT},
  (_, index) => createPhoto(index + 1),
);


export {
  getPhotos
};
