import { expect, test } from 'vitest';
import { sortedLastIndex } from './sortedLastIndex';

test('behaves as expected with numbers', () => {
  const sortedArray = [11, 25, 40, 40, 86];
  const value = 40;

  const result = sortedLastIndex(sortedArray, value);
  const expected = 4;

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const sortedArray = [11, 25, 40, 40, 86];
  const value = 40;
  sortedLastIndex(sortedArray, value);

  expect(sortedArray).toEqual([11, 25, 40, 40, 86]);
});
