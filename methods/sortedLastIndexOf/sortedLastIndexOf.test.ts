import { expect, test } from 'vitest';
import { sortedLastIndexOf } from './sortedLastIndexOf';

test('behaves as expected', () => {
  const sortedArray = ['apple', 'banana', 'banana', 'banana', 'peach'];
  const value = 'banana';

  const result = sortedLastIndexOf(sortedArray, value);
  const expected = 3;

  expect(result).toEqual(expected);
});

test('behaves as expected with an endIndex override', () => {
  const sortedArray = ['apple', 'apricot', 'banana', 'banana'];
  const value = 'banana';
  const excludedEndIndex = 3;

  const result = sortedLastIndexOf(sortedArray, value, excludedEndIndex);
  const expected = 2;

  expect(result).toEqual(expected);
});

test('returns "-1" if the value is not present in the array', () => {
  const sortedArray = ['apple', 'banana', 'cherry', 'peach'];
  const value = 'tomato';

  const result = sortedLastIndexOf(sortedArray, value);
  const expected = -1;

  expect(result).toEqual(expected);
});

test('returns "-1" if the value is not found in the array because of an endIndex override', () => {
  const sortedArray = ['apple', 'banana'];
  const value = 'banana';
  const excludedEndIndex = 0;

  const result = sortedLastIndexOf(sortedArray, value, excludedEndIndex);
  const expected = -1;

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const sortedArray = ['apple', 'banana', 'cherry', 'peach'];
  const value = 'apple';
  sortedLastIndexOf(sortedArray, value);

  expect(sortedArray).toEqual(['apple', 'banana', 'cherry', 'peach']);
});
