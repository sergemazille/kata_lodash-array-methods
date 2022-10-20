import { expect, test } from 'vitest';
import { sortedIndexOf } from './sortedIndexOf';

test('behaves as expected', () => {
  const sortedArray = ['banana', 'banana', 'banana', 'cherry', 'peach'];
  const value = 'banana';

  const result = sortedIndexOf(sortedArray, value);
  const expected = 0;

  expect(result).toEqual(expected);
});

test('behaves as expected with a startIndex override', () => {
  const sortedArray = ['banana', 'banana', 'cherry', 'peach'];
  const value = 'banana';
  const startIndex = 1;

  const result = sortedIndexOf(sortedArray, value, startIndex);
  const expected = 1;

  expect(result).toEqual(expected);
});

test('returns "-1" if the value is not present in the array', () => {
  const sortedArray = ['apple', 'banana', 'cherry', 'peach'];
  const value = 'tomato';

  const result = sortedIndexOf(sortedArray, value);
  const expected = -1;

  expect(result).toEqual(expected);
});

test('returns "-1" if the value is not found in the array because of a startIndex override', () => {
  const sortedArray = ['apple', 'banana'];
  const value = 'apple';
  const startIndex = 1;

  const result = sortedIndexOf(sortedArray, value, startIndex);
  const expected = -1;

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const sortedArray = ['apple', 'banana', 'cherry', 'peach'];
  const value = 'apple';
  sortedIndexOf(sortedArray, value);

  expect(sortedArray).toEqual(['apple', 'banana', 'cherry', 'peach']);
});
