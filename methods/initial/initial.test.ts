import { expect, test } from 'vitest';
import { initial } from './initial';

test('behaves as expected', () => {
  const array = ['banana', 'apple', ['peach'], 'tomato'];

  const result = initial(array);
  const expected = ['banana', 'apple', ['peach']];

  expect(result).toEqual(expected);
});

test('returns an empty array is none is provided', () => {
  const result = initial([]);
  const expected: [] = [];

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const array = ['banana', 'apple', ['peach'], 'tomato'];

  initial(array);

  expect(array).toEqual(['banana', 'apple', ['peach'], 'tomato']);
});
