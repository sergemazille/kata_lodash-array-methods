import { expect, test } from 'vitest';
import { xor } from './xor';

test('behaves as expected', () => {
  const array1 = ['apple', 'cherry', 'durian', 'apple', 'banana'];
  const array2 = ['tomato'];
  const array3 = ['cherry'];

  const result = xor(array1, array2, array3);
  const expected = ['apple', 'durian', 'banana', 'tomato'];

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const array = ['banana', 'banana'];
  xor(array);

  expect(array).toEqual(['banana', 'banana']);
});
