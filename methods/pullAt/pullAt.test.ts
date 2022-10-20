import { expect, test } from 'vitest';
import { pullAt } from './pullAt';

test('behaves as expected', () => {
  const array = ['banana', 'apple', 'cherry', 'peach'];

  const result = pullAt(array, [1, 2]);
  const expected = ['apple', 'cherry'];

  expect(result).toEqual(expected);
});

test('returns the removed element in the order of the indexes', () => {
  const array = ['banana', 'apple', 'cherry', 'peach'];

  const result = pullAt(array, [3, 2]);
  const expected = ['peach', 'cherry'];

  expect(result).toEqual(expected);
});

test('does mutate the original array', () => {
  const array = ['banana', 'apple', 'cherry', 'peach'];

  pullAt(array, [1, 2]);
  const updatedArray = ['banana', 'peach'];

  expect(array).not.toEqual(['banana', 'apple', 'cherry', 'peach']);
  expect(array).toEqual(updatedArray);
});
