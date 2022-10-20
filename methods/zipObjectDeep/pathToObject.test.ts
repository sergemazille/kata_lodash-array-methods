import { expect, test } from 'vitest';
import { pathToObject } from './pathToObject';

test('creates an object', () => {
  const path = 'user.fruit';

  const result = pathToObject(path);
  const expected = { user: { fruit: undefined } };

  expect(result).toEqual(expected);
});

test('provides a value to the created object', () => {
  const path = 'user.fruit';
  const value = 'banana';

  const result = pathToObject(path, value);
  const expected = { user: { fruit: 'banana' } };

  expect(result).toEqual(expected);
});

test('accepts arrays in the path', () => {
  const path = 'user.fruit[0]';
  const value = 'banana';

  const result = pathToObject(path, value);
  const expected = { user: { fruit: ['banana'] } };

  expect(result).toEqual(expected);
});

test('can mix arrays and objects', () => {
  const path = 'user.fruit[1].best';
  const value = 'banana';

  const result = pathToObject(path, value);
  const expected = { user: { fruit: [undefined, { best: 'banana' }] } };

  expect(result).toEqual(expected);
});
