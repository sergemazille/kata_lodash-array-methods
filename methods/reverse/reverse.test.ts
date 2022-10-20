import { describe, expect, test } from 'vitest';
import { reverse } from './reverse';

describe('behaves as expected', () => {
  test('with even number of elements', () => {
    const array = ['banana', 'pear', 'kiwi', 'orange'];

    const result = reverse(array);
    const expected = ['orange', 'kiwi', 'pear', 'banana'];

    expect(result).toEqual(expected);
  });

  test('with odd number of elements', () => {
    const array = ['banana', 'pear', 'kiwi', 'orange', 'apple'];

    const result = reverse(array);
    const expected = ['apple', 'orange', 'kiwi', 'pear', 'banana'];

    expect(result).toEqual(expected);
  });
});

test('does mutate the original array', () => {
  const array = ['banana', 'apple', 'orange', 'kiwi', 'pear'];

  reverse(array);

  expect(array).not.toEqual(['banana', 'apple', 'orange', 'kiwi', 'pear']);
});
