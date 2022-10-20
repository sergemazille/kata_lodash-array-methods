import { expect, test } from 'vitest';
import { flattenDepth } from './flattenDepth';

const array = ['banana', ['apple', ['peach'], 'tomato']];

test('behaves as expected', () => {
  const useCases = [
    {
      result: flattenDepth(array, 0),
      expected: ['banana', ['apple', ['peach'], 'tomato']],
    },
    {
      result: flattenDepth(array, 1),
      expected: ['banana', 'apple', ['peach'], 'tomato'],
    },
    {
      result: flattenDepth(array, 2),
      expected: ['banana', 'apple', 'peach', 'tomato'],
    },
  ];

  useCases.forEach(({ result, expected }) => {
    expect(result).toEqual(expected);
  });
});

test('returns an empty array is none is provided', () => {
  const result = flattenDepth([], 1);
  const expected: [] = [];

  expect(result).toEqual(expected);
});

test('does not flatten the array if no level is given', () => {
  const result = flattenDepth(array)

  expect(result).toEqual(array);
})


test('does not mutate the original array', () => {
  flattenDepth(array, 1);

  expect(array).toEqual(['banana', ['apple', ['peach'], 'tomato']]);
});
