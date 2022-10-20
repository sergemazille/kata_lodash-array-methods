import { expect, test } from 'vitest';
import { last } from './last';

test('behaves as expected', () => {
  const array = ['banana', 'apple', 'peach', 'tomato'];

  const result = last(array);
  const expected = 'tomato';

  expect(result).toEqual(expected);
});

test('returns undefined if empty', () => {
  const array: [] = [];

  const result = last(array);
  const expected = undefined;

  expect(result).toEqual(expected);
});
