import { expect, test } from 'vitest';
import { flattenDeep } from './flattenDeep';

const array = ['banana', ['apple', ['peach'], 'tomato']];

test('behaves as expected', () => {
  const result = flattenDeep(array);
  const expected = ['banana', 'apple', 'peach', 'tomato'];

  expect(result).toEqual(expected);
});

test('returns an empty array is none is provided', () => {
  const result = flattenDeep([]);
  const expected: [] = [];

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  flattenDeep(array);

  expect(array).toEqual(['banana', ['apple', ['peach'], 'tomato']]);
});
