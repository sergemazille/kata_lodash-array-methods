import { expect, test } from 'vitest';
import { bubbleSort, sortArraySafe, sortCollectionSafe, sortObjectSafe } from './sorting';

test('sortObjectSafe', () => {
  const obj = {
    job: 'baker',
    age: 21,
    address: {
      street: 'baker street',
      city: 'London',
    },
  };

  const result = JSON.parse(JSON.stringify(sortObjectSafe(obj)));

  const expected = JSON.parse(
    JSON.stringify({
      address: {
        city: 'London',
        street: 'baker street',
      },
      age: 21,
      job: 'baker',
    })
  );

  expect(result).toEqual(expected);
});

test('bubbleSort handles strings', () => {
  const array = ['banana', 'peach', 'apple', 'cherry', 'tomato', 'durian'];

  const result = bubbleSort(array);
  const expected = ['apple', 'banana', 'cherry', 'durian', 'peach', 'tomato'];

  expect(result).toEqual(expected);
});

test('bubbleSort handles numbers', () => {
  const array = [6, 4, 5, 1, 3, 2];

  const result = bubbleSort(array);
  const expected = [1, 2, 3, 4, 5, 6];

  expect(result).toEqual(expected);
});

test('bubbleSort handles mixed types', () => {
  const array = [6, 'a', 1, '3', 2];

  const result = bubbleSort(array);
  const expected = [1, 2, 6, '3', 'a'];

  expect(result).toEqual(expected);
});

test('bubbleSort mutates input', () => {
  const array = [6, 4, 5, 1, 3, 2];

  bubbleSort(array);

  expect(array).not.toEqual([6, 4, 5, 1, 3, 2]);
});

test('sortArraySafe', () => {
  const array = ['banana', 'peach', 'apple', 'cherry', 'tomato', 'durian'];

  const result = sortArraySafe(array);
  const expected = ['apple', 'banana', 'cherry', 'durian', 'peach', 'tomato'];

  expect(result).toEqual(expected);
});

test('sortCollectionSafe sorts an array', () => {
  const array = ['banana', 'peach', 'apple', 'cherry', 'tomato', 'durian'];

  const result = sortCollectionSafe(array);
  const expected = ['apple', 'banana', 'cherry', 'durian', 'peach', 'tomato'];

  expect(result).toEqual(expected);
});

test('sortCollectionSafe sorts an object', () => {
  const obj = { name: 'John', age: 42, hobby: 'movies' };

  const result = sortCollectionSafe(obj);
  const expected = { age: 42, hobby: 'movies', name: 'John' };

  expect(result).toEqual(expected);
});

test('sortCollectionSafe sorts an array containing objects', () => {
  const john = { name: 'John', age: 42, hobby: 'movies' };
  const jane = { age: 24, name: 'Jane', hobby: 'painting' };
  const array = [john, jane];

  const result = sortCollectionSafe(array);
  const expected = [
    { age: 24, hobby: 'painting', name: 'Jane' },
    { age: 42, hobby: 'movies', name: 'John' },
  ];

  expect(result).toEqual(expected);
});

test('sortCollectionSafe sorts an object containing arrays', () => {
  const friends = ['John', 'Jane', 'Eric', 'Lynda'];
  const matthew = { name: 'Matthew', friends };

  const result = sortCollectionSafe(matthew);
  const expected = {
    friends: ['Eric', 'Jane', 'John', 'Lynda'],
    name: 'Matthew',
  };

  expect(result).toEqual(expected);
});
