import { expect, test } from 'vitest';
import { difference } from './difference';

test('behaves as expected', () => {
  const array = ['a', 'b', 'c', 'd', 'e', 'f'];
  const result = difference(array, ['b', 'c'], ['f']);
  const expected = ['a', 'd', 'e'];

  expect(result).toEqual(expected);
});

test('keeps duplicates', () => {
  const array = ['a', 'a', 'b'];
  const result = difference(array, ['b']);
  const expected = ['a', 'a'];

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const array = ['banana', 'apple'];
  difference(array, ['apple']);

  expect(array).toEqual(['banana', 'apple']);
});
