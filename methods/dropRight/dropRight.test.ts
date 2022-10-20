import { expect, test } from 'vitest';
import { dropRight } from './dropRight';

const array = ['banana', 'apple', 'peach', 'tomato'];

test('behaves as expected', () => {
  const useCases = [
    {
      result: dropRight(array, 1),
      expected: ['banana', 'apple', 'peach'],
    },
    {
      result: dropRight(array, 5),
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
      result: dropRight(array, 0),
      expected: array,
    },
    {
      result: dropRight(array, -1),
      expected: array,
    },
  ];

  useCases.forEach(({ result, expected }) => {
    expect(result).toEqual(expected);
  });
});

test('defaults to 1 if no "count" is given', () => {
  const result = dropRight(array);

  expect(result).toEqual(['banana', 'apple', 'peach']);
});

test('returns an empty array if the first argument is an empty array itself', () => {
  const result = dropRight([], 2);

  expect(result).toEqual([]);
});

test('does not mutate the original array', () => {
  dropRight(array, 1);

  expect(array).toEqual(['banana', 'apple', 'peach', 'tomato']);
});
