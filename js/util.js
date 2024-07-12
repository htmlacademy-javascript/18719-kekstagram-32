// Функция для проверки длины строки
const isStringValid = (string, numMaxLength) => (string.length <= numMaxLength);

// Функция для проверки, является ли строка палиндромом
const isStringPalindrome = (string) => {
  const myString = string.toLowerCase();
  const reversedString = myString.split('').reverse().join('');

  return myString === reversedString;
};

// Функция возвращает цифры от 0 до 9 в виде целого положительного числа
const getPositiveNumber = (string) => {
  const myString = string.toString().replaceAll(' ', '');
  let positiveNumber = '';

  for (const i of myString) {
    if (!isNaN(i)) {
      positiveNumber += i;
    }
  }

  return positiveNumber ? Number(positiveNumber) : NaN;
};

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createIdGenerator = () => {
  let numberId = 0;

  return () => {
    numberId += 1;
    return numberId;
  };
};

const generateRandomId = createIdGenerator();


export {isStringValid, isStringPalindrome, getPositiveNumber, getRandomInteger, getRandomArrayElement, generateRandomId};
