import {getRandomNumber, generateId} from './utils.js';

const OBJECT_SIZE = 25;

const descriptions = [
  'золотая осень',
  'прогулка в парке',
  'борюсь с хмурой осенью',
  'собираем грибы',
  'ритм большого города',
  'последняя ночь в Париже'
];

const getId = generateId();

const createPhoto = function(){
  const id = getId();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: descriptions[getRandomNumber(0, descriptions.length - 1)],
    likes: getRandomNumber(15, 200),
    comments: getRandomNumber(0, 200)
  };
};

const generatePhotos = function(){
  return Array.from({length:OBJECT_SIZE}, createPhoto);
};
export {generatePhotos};