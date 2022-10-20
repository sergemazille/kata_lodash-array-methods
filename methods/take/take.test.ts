import { expect, test } from 'vitest';
import { take } from './take';

const array = ['banana', 'apple', 'peach', 'tomato'];

test('behaves as expected', () => {
  const useCases = [
    {
      result: take(array, 2),
      expected: ['banana', 'apple'],
    },
    {
      result: take(array, 5),
      expected: ['banana', 'apple', 'peach', 'tomato'],
    },
  ];

  useCases.forEach(({ result, expected }) => {
    expect(result).toEqual(expected);
  });
});

test('returns an empty array if count is less than 1', () => {
  const useCases = [
    {
      result: take(array, 0),
      expected: [],
    },
    {
      result: take(array, -1),
      expected: [],
    },
  ];

  useCases.forEach(({ result, expected }) => {
    expect(result).toEqual(expected);
  });
});

test('defaults to 1 if no "count" is given', () => {
  const result = take(array);

  expect(result).toEqual(['banana']);
});

test('returns an empty array if the first argument is an empty array itself', () => {
  const result = take([], 2);

  expect(result).toEqual([]);
});

test('does not mutate the original array', () => {
  take(array, 1);

  expect(array).toEqual(['banana', 'apple', 'peach', 'tomato']);
});
