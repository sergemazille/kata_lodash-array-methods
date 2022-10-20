import { expect, test } from 'vitest';
import { first } from './first';

test('behaves as expected', () => {
  const array = ['banana', 'apple', 'peach', 'tomato'];

  const result = first(array);
  const expected = 'banana';

  expect(result).toEqual(expected);
});

test('returns undefined if empty', () => {
  const array: [] = [];

  const result = first(array);
  const expected = undefined;

  expect(result).toEqual(expected);
});
