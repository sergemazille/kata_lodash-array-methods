import { expect, test } from 'vitest';
import { tail } from './tail';

test('behaves as expected', () => {
  const array = ['banana', 'apple', ['peach'], 'tomato'];

  const result = tail(array);
  const expected = ['apple', ['peach'], 'tomato'];

  expect(result).toEqual(expected);
});

test('returns an empty array is none is provided', () => {
  const result = tail([]);
  const expected: [] = [];

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const array = ['banana', 'apple', ['peach'], 'tomato'];

  tail(array);

  expect(array).toEqual(['banana', 'apple', ['peach'], 'tomato']);
});
