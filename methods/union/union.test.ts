import { expect, test } from 'vitest';
import { union } from './union';

test('behaves as expected', () => {
  const array1 = ['banana', 'apple', 'banana', 'cherry'];
  const array2 = ['peach', 'cherry'];

  const result = union(array1, array2);
  const expected = ['banana', 'apple', 'cherry', 'peach'];

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const array = ['banana', 'banana']
  union(array);

  expect(array).toEqual(['banana', 'banana']);
});
