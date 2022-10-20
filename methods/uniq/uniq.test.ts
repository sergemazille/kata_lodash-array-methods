import { expect, test } from 'vitest';
import { uniq } from './uniq';

test('behaves as expected', () => {
  const array = ['banana', 'apple', 'banana', 'cherry', 'peach', 'cherry'];

  const result = uniq(array);
  const expected = ['banana', 'apple', 'cherry', 'peach'];

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const array = ['banana', 'apple', 'banana', 'cherry'];
  uniq(array);

  expect(array).toEqual(['banana', 'apple', 'banana', 'cherry']);
});
