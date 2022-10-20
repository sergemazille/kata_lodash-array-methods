import { expect, test } from 'vitest';
import { without } from './without';

test('behaves as expected', () => {
  const array = ['banana', 'apple', 'cherry', 'peach', 'apple'];

  const result = without(array, 'apple', 'peach');
  const expected = ['banana', 'cherry'];

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const array = ['banana', 'apple', 'cherry', 'peach'];

  without(array, 'apple');

  expect(array).toEqual(['banana', 'apple', 'cherry', 'peach']);
});
