import { expect, test } from 'vitest';
import { pull } from './pull';

test('behaves as expected', () => {
  const array = ['banana', 'apple', 'cherry', 'peach', 'apple'];

  const result = pull(array, 'apple', 'peach');
  const expected = ['banana', 'cherry'];

  expect(result).toEqual(expected);
});

test('does mutate the original array', () => {
  const array = ['banana', 'apple', 'cherry', 'peach'];

  pull(array, 'apple');

  expect(array).not.toEqual(['banana', 'apple', 'cherry', 'peach']);
});
