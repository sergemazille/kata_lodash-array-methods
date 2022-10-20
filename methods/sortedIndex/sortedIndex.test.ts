import { expect, test } from 'vitest';
import { sortedIndex } from './sortedIndex';

test('behaves as expected with numbers', () => {
  const sortedArray = [11, 25, 42, 86];
  const value = 40;

  const result = sortedIndex(sortedArray, value);
  const expected = 2;

  expect(result).toEqual(expected);
});

test('behaves as expected with duplicates', () => {
  const sortedArray = [11, 25, 40, 40, 40, 86];
  const value = 40;

  const result = sortedIndex(sortedArray, value);
  const expected = 2;

  expect(result).toEqual(expected);
});

test('behaves as expected with strings', () => {
  const sortedArray = ['apple', 'banana', 'peach', 'tomato'];
  const value = 'apricot';

  const result = sortedIndex(sortedArray, value);
  const expected = 1;

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const sortedArray = [11, 25, 42, 86];
  const value = 40;
  sortedIndex(sortedArray, value);

  expect(sortedArray).toEqual([11, 25, 42, 86]);
});
