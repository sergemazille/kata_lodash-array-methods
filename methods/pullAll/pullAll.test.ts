import { expect, test } from 'vitest';
import { pullAll } from './pullAll';

test('behaves as expected', () => {
  const array = ['banana', 'apple', 'cherry', 'peach', 'apple'];

  const result = pullAll(array, ['apple', 'peach']);
  const expected = ['banana', 'cherry'];

  expect(result).toEqual(expected);
});

test('does mutate the original array', () => {
  const array = ['banana', 'apple', 'cherry', 'peach'];

  pullAll(array, ['apple']);

  expect(array).not.toEqual(['banana', 'apple', 'cherry', 'peach']);
});
