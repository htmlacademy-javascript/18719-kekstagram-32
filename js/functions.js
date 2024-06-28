// Функция для проверки длины строки
const isStringValid = (string, numMaxLength) => (string.length <= numMaxLength);

isStringValid('проверяемая строка', 20); // true
isStringValid('проверяемая строка', 18); // true
isStringValid('проверяемая строка', 10); // false

// ==========================================================

// Функция для проверки, является ли строка палиндромом
const isStringPalindrome = (string) => {
  const myString = string.toLowerCase();
  const reversedString = myString.split('').reverse().join('');

  return myString === reversedString;
};

isStringPalindrome('топот'); // true
isStringPalindrome('ДовОд'); // true
isStringPalindrome('Кекс'); // false
isStringPalindrome('Лёша на полке клопа нашёл '); // true

// ==========================================================

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

getPositiveNumber('2023 год'); // 2023
getPositiveNumber('ECMAScript 2022'); // 2022
getPositiveNumber('1 кефир, 0.5 батона'); // 105
getPositiveNumber('агент 007'); // 7
getPositiveNumber('а я томат'); // NaN
getPositiveNumber(2023); // 2023
getPositiveNumber(-1); // 1
getPositiveNumber(1.5); // 15
