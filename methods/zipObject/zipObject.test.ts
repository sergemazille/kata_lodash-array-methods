import { expect, test } from 'vitest';
import { zipObject } from './zipObject';

test('behaves as expected', () => {
  const properties = ['fruit', 'age', 'movie'];
  const values = ['apple', 42, 'Avatar'];

  const result = zipObject(properties, values);
  const expected = { fruit: 'apple', age: 42, movie: 'Avatar' };

  expect(result).toEqual(expected);
});

test('keeps only the last value for a duplicate key', () => {
  const properties = ['fruit', 'fruit'];
  const values = ['apple', 'banana'];

  const result = zipObject(properties, values);
  const expected = { fruit: 'banana' };

  expect(result).toEqual(expected);
});

test('ignores values in excess', () => {
  const properties = ['fruit', 'age'];
  const values = ['apple', 42, 'Avatar'];;

  const result = zipObject(properties, values);
  const expected = { fruit: 'apple', age: 42 };

  expect(result).toEqual(expected);
});

test('resolves missing values with undefined', () => {
  const properties = ['fruit', 'age', 'movie'];
  const values = ['apple', 42];

  const result = zipObject(properties, values);
  const expected = { fruit: 'apple', age: 42, movie: undefined };

  expect(result).toEqual(expected);
});
