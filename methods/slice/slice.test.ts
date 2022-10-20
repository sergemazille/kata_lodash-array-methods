import { expect, test } from 'vitest';
import { slice } from './slice';

const array = ['banana', 'apple', 'orange', 'kiwi', 'pear'];

test('behaves as expected', () => {
  const result = slice(array, 1, 3);
  const expected = ['apple', 'orange'];

  expect(result).toEqual(expected);
});

test('operates with negative indexes', () => {
  const result = slice(array, -2, -1);
  const expected = ['kiwi'];

  expect(result).toEqual(expected);
});

test('returns an empty array if excluded end index is equal or smaller than start index', () => {
  const useCases = [
    {
      result: slice(array, 1, 1),
      expected: [],
    },
    {
      result: slice(array, 2, 1),
      expected: [],
    },
  ];

  useCases.forEach(({ result, expected }) => {
    expect(result).toEqual(expected);
  });
});

test('does not mutate the original array', () => {
  slice(array, 1, 2);

  expect(array).toEqual(['banana', 'apple', 'orange', 'kiwi', 'pear']);
});
