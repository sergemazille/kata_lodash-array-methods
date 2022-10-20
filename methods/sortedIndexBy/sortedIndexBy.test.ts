import { expect, test } from 'vitest';
import { sortedIndexBy } from './sortedIndexBy';

test('behaves as expected with numbers', () => {
  const sortedArray = [1.3, 1.9, 2.4, 3.6];
  const value = 2.6;

  const result = sortedIndexBy(sortedArray, value, Math.floor);
  const expected = 2;

  expect(result).toEqual(expected);
});

test('behaves as expected with strings', () => {
  const numberOfCharacters = (item: string) => item.length;
  const sortedArray = ['fig', 'date', 'peach', 'tomato'];
  const value = 'apple';

  const result = sortedIndexBy(sortedArray, value, numberOfCharacters);
  const expected = 2;

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const sortedArray = [1.3, 1.9, 2.4, 3.6];
  const value = 2.6;
  sortedIndexBy(sortedArray, value, Math.floor);

  expect(sortedArray).toEqual([1.3, 1.9, 2.4, 3.6]);
});
