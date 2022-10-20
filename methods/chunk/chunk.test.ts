import { expect, test } from 'vitest';
import { chunk } from './chunk';

const array = ['a', 'b', 'c', 'd'];

test('behaves as expected', () => {
  const useCases = [
    {
      result: chunk(array, 2),
      expected: [
        ['a', 'b'],
        ['c', 'd'],
      ],
    },

    {
      result: chunk(array, 3),
      expected: [['a', 'b', 'c'], ['d']],
    },
  ];

  useCases.forEach(({ result, expected }) => {
    expect(result).toEqual(expected);
  });
});

test('uses 1 as a default size', () => {
  const result = chunk(array);
  const expected = [['a'], ['b'], ['c'], ['d']];

  expect(result).toEqual(expected);
});

test('floors a floating point size', () => {
  const result = chunk(array, 2.999);
  const expected = [
    ['a', 'b'],
    ['c', 'd'],
  ];

  expect(result).toEqual(expected);
});

test('returns an empty array if size is smaller than 1', () => {
  const sizes = [-1, 0];

  sizes.forEach((size) => {
    const result = chunk(array, size);
    const expected: [] = [];

    expect(result).toEqual(expected);
  });
});

test('returns one chunk if size is greater than the number of items', () => {
  const result = chunk(array, 5);
  const expected = [['a', 'b', 'c', 'd']];

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  chunk(array, 2);

  expect(array).toEqual(['a', 'b', 'c', 'd']);
});
