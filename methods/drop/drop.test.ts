import { expect, test } from 'vitest';
import { drop } from './drop';

const array = ['banana', 'apple', 'peach', 'tomato'];

test('behaves as expected', () => {
  const useCases = [
    {
      result: drop(array, 2),
      expected: ['peach', 'tomato'],
    },
    {
      result: drop(array, 5),
      expected: [],
    },
  ];

  useCases.forEach(({ result, expected }) => {
    expect(result).toEqual(expected);
  });
});

test('returns the original array if count argument is less than 1', () => {
  const useCases = [
    {
      result: drop(array, 0),
      expected: array,
    },
    {
      result: drop(array, -1),
      expected: array,
    },
  ];

  useCases.forEach(({ result, expected }) => {
    expect(result).toEqual(expected);
  });
});

test('defaults to 1 if no "count" is given', () => {
  const result = drop(array);

  expect(result).toEqual(['apple', 'peach', 'tomato']);
});

test('returns an empty array if the first argument is an empty array itself', () => {
  const result = drop([], 2);

  expect(result).toEqual([]);
});

test('does not mutate the original array', () => {
  drop(array, 1);

  expect(array).toEqual(['banana', 'apple', 'peach', 'tomato']);
});
