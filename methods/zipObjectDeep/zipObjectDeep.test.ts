import { expect, test } from 'vitest';
import { zipObjectDeep } from './zipObjectDeep';

test('handles "simple" paths', () => {
  const properties = ['user.fruit', 'user.movie'];
  const values = ['apple', 'Avatar'];

  const result = zipObjectDeep(properties, values);
  const expected = { user: { fruit: 'apple', movie: 'Avatar' } };

  expect(result).toEqual(expected);
});

test('behaves as expected', () => {
  const properties = ['user.fruits[0].best', 'user.fruits[1].worst'];
  const values = ['apple', 'banana', 'Avatar'];

  const result = zipObjectDeep(properties, values);
  const expected = { user: { fruits: [{ best: 'apple' }, { worst: 'banana' }] } };

  expect(result).toEqual(expected);
});

test('keeps only the last value for a duplicate key', () => {
  const properties = ['user.fruit', 'user.fruit'];
  const values = ['apple', 'banana'];

  const result = zipObjectDeep(properties, values);
  const expected = { user: { fruit: 'banana' } };

  expect(result).toEqual(expected);
});

test('ignores values in excess', () => {
  const properties = ['user.fruit', 'user.age'];
  const values = ['apple', 42, 'Avatar'];

  const result = zipObjectDeep(properties, values);
  const expected = { user: { fruit: 'apple', age: 42 } };

  expect(result).toEqual(expected);
});

test('resolves missing values with undefined', () => {
  const properties = ['user.fruit', 'user.age', 'user.movie'];
  const values = ['apple', 42];

  const result = zipObjectDeep(properties, values);
  const expected = { user: { fruit: 'apple', age: 42, movie: undefined } };

  expect(result).toEqual(expected);
});

test('accepts multiple object paths', () => {
  const properties = ['user.fruit[0].best', 'user.fruit[1].best', 'user.movie'];
  const values = ['apple', 'banana', 'Avatar'];

  const result = zipObjectDeep(properties, values);
  const expected = { user: { fruit: [{ best: 'apple' }, { best: 'banana' }], movie: 'Avatar' } };

  expect(result).toEqual(expected);
});
