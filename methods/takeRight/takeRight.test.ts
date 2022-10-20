import { expect, test } from 'vitest';
import { takeRight } from './takeRight';

const array = ['banana', 'apple', 'peach', 'tomato'];

test('behaves as expected', () => {
  const useCases = [
    {
      result: takeRight(array, 1),
      expected: ['tomato'],
    },
    {
      result: takeRight(array, 5),
      expected: ['banana', 'apple', 'peach', 'tomato'],
    },
  ];

  useCases.forEach(({ result, expected }) => {
    expect(result).toEqual(expected);
  });
});

test('returns an empty array if count is less than 1', () => {  const useCases = [
    {
      result: takeRight(array, 0),
      expected: [],
    },
    {
      result: takeRight(array, -1),
      expected: [],
    },
  ];

  useCases.forEach(({ result, expected }) => {
    expect(result).toEqual(expected);
  });
});

test('defaults to 1 if no "count" is given', () => {
  const result = takeRight(array);

  expect(result).toEqual(['tomato']);
});

test('returns an empty array if the first argument is an empty array itself', () => {
  const result = takeRight([], 2);

  expect(result).toEqual([]);
});

test('does not mutate the original array', () => {
  takeRight(array, 1);

  expect(array).toEqual(['banana', 'apple', 'peach', 'tomato']);
});
