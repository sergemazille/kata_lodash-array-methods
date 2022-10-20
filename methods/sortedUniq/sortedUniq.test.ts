import { expect, test } from 'vitest';
import { sortedUniq } from './sortedUniq';

test('behaves as expected', () => {
  const sortedArray = ['apple', 'banana', 'banana', 'cherry', 'cherry', 'peach'];

  const result = sortedUniq(sortedArray);
  const expected = ['apple', 'banana', 'cherry', 'peach'];

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const array = ['apple', 'banana', 'banana', 'cherry'];
  sortedUniq(array);

  expect(array).toEqual(['apple', 'banana', 'banana', 'cherry']);
});
