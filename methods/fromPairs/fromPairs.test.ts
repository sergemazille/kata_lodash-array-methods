import { expect, test } from 'vitest';
import { fromPairs } from './fromPairs';

test('behaves as expected', () => {
  const array = [
    ['fruit', 'apple'],
    ['age', 42],
    ['movie', 'Avatar'],
  ];

  const result = fromPairs(array);
  const expected = { fruit: 'apple', age: 42, movie: 'Avatar' };

  expect(result).toEqual(expected);
});

test('keeps only the last value for a duplicate key', () => {
  const array = [
    ['fruit', 'apple'],
    ['fruit', 'banana'],
  ];

  const result = fromPairs(array);
  const expected = { fruit: 'banana' };

  expect(result).toEqual(expected);
});

test('ignores items in excess', () => {
  const array = [['fruit', 'apple', 42]];

  const result = fromPairs(array);
  const expected = { fruit: 'apple' };

  expect(result).toEqual(expected);
});

test('resolves missing items with undefined', () => {
  const array = [['fruit'], [, 42]];

  const result = fromPairs(array);
  const expected = { fruit: undefined, undefined: 42 };

  expect(result).toEqual(expected);
});
