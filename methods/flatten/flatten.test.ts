import { expect, test } from 'vitest';
import { flatten } from './flatten';

const array = ['banana', ['apple', ['peach'], 'tomato']];

test('behaves as expected', () => {
  const result = flatten(array);
  const expected = ['banana', 'apple', ['peach'], 'tomato'];

  expect(result).toEqual(expected);
});

test('returns an empty array is none is provided', () => {
  const result = flatten([]);
  const expected: [] = [];

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  flatten(array);

  expect(array).toEqual(['banana', ['apple', ['peach'], 'tomato']]);
});
