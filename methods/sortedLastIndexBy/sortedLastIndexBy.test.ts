import { expect, test } from 'vitest';
import { sortedLastIndexBy } from './sortedLastIndexBy';

test('behaves as expected with numbers', () => {
  const sortedArray = [1.3, 1.9, 2.4, 3.6];
  const value = 2.6;

  const result = sortedLastIndexBy(sortedArray, value, Math.floor);
  const expected = 3;

  expect(result).toEqual(expected);
});

test('behaves as expected with strings', () => {
  const numberOfCharacters = (item: string) => item.length;
  const sortedArray = ['fig', 'date', 'peach', 'peach', 'apple', 'tomato'];
  const value = 'apple';

  const result = sortedLastIndexBy(sortedArray, value, numberOfCharacters);
  const expected = 5;

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const sortedArray = [1.3, 1.9, 2.4, 3.6];
  const value = 2.6;
  sortedLastIndexBy(sortedArray, value, Math.floor);

  expect(sortedArray).toEqual([1.3, 1.9, 2.4, 3.6]);
});
