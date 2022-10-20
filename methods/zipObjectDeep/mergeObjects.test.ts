import { expect, test } from 'vitest';
import { mergeObjects } from './mergeObjects';

test('accepts a single object', () => {
  const objectA = { user: { name: 'Jane' } };
  const result = mergeObjects([objectA]);
  const expected = { user: { name: 'Jane' } };

  expect(result).toEqual(expected);
});

test('merges two simple objects', () => {
  const objectA = { user: { name: 'Jane' } };
  const objectB = { player: { age: 24 } };

  const result = mergeObjects([objectA, objectB]);
  const expected = {
    user: { name: 'Jane' },
    player: { age: 24 },
  };

  expect(result).toEqual(expected);
});

test('merges two objects with common properties', () => {
  const objectA = { user: { name: 'Jane' } };
  const objectB = { user: { age: 24 } };

  const result = mergeObjects([objectA, objectB]);
  const expected = { user: { name: 'Jane', age: 24 } };

  expect(result).toEqual(expected);
});

test('overrides conflicting values with the last one', () => {
  const objectA = { user: { name: 'Jane' } };
  const objectB = { user: { name: 'John' } };

  const result = mergeObjects([objectA, objectB]);
  const expected = { user: { name: 'John' } };

  expect(result).toEqual(expected);
});

test('merges two objects containing arrays', () => {
  const objectA = { user: { fruits: ['apple', 'pear', 'apricot'] } };
  const objectB = { user: { fruits: ['banana', 'cherry'] } };

  const result = mergeObjects([objectA, objectB]);
  const expected = { user: { fruits: ['banana', 'cherry', 'apricot'] } };

  expect(result).toEqual(expected);
});
