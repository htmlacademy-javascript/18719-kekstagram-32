// Функция для проверки длины строки
const isStringValid = (string, numMaxLength) => (string.length <= numMaxLength);

// Функция для проверки, является ли строка палиндромом
const isStringPalindrome = (string) => {
  const myString = string.toLowerCase().trim().split(' ').join('');
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

const convertToMinutes = (time) => {
  const MINUTES_IN_HOUR = 60;
  const myTimeArr = time.split(':');
  return Number(myTimeArr[0]) * MINUTES_IN_HOUR + Number(myTimeArr[1]);
};

// Функция для проверки выходит ли встреча за рамки рабочего дня
const isTimeInWorkday = (startDay, endDay, meetingStart, duration) => {
  const myStartDayMinutes = convertToMinutes(startDay);
  const myEndDayMinutes = convertToMinutes(endDay);
  const myMeetingStartMinutes = convertToMinutes(meetingStart);

  const option1 = myStartDayMinutes <= myMeetingStartMinutes;
  const option2 = myMeetingStartMinutes < myEndDayMinutes;
  const option3 = myMeetingStartMinutes + duration <= myEndDayMinutes;

  if (option1 && option2 && option3) {
    return true;
  }

  return false;
};

isStringValid('проверяемая строка', 20); // true
isStringValid('проверяемая строка', 18); // true
isStringValid('проверяемая строка', 10); // false

isStringPalindrome('топот'); // true
isStringPalindrome('ДовОд'); // true
isStringPalindrome('Кекс'); // false
isStringPalindrome('Лёша на полке клопа нашёл '); // true

getPositiveNumber('2023 год'); // 2023
getPositiveNumber('ECMAScript 2022'); // 2022
getPositiveNumber('1 кефир, 0.5 батона'); // 105
getPositiveNumber('агент 007'); // 7
getPositiveNumber('а я томат'); // NaN
getPositiveNumber(2023); // 2023
getPositiveNumber(-1); // 1
getPositiveNumber(1.5); // 15

isTimeInWorkday('08:00', '17:30', '14:00', 90); // true
isTimeInWorkday('8:0', '10:0', '8:0', 120); // true
isTimeInWorkday('08:00', '14:30', '14:00', 90); // false
isTimeInWorkday('14:00', '17:30', '08:0', 90); // false
isTimeInWorkday('8:00', '17:30', '08:00', 900); // false
