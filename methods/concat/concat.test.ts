import { expect, test } from 'vitest';
import { concat } from './concat';

test('behaves as expected', () => {
  const useCases = [
    {
      result: concat(['banana', 'apple'], 1, [2, 3], [[4], 5]),
      expected: ['banana', 'apple', 1, 2, 3, [4], 5],
    },
    {
      result: concat([], [1, [2, 3]]),
      expected: [1, [2, 3]],
    },
  ];

  useCases.forEach(({ result, expected }) => {
    expect(result).toEqual(expected);
  });
});

test('can receive array and non-array arguments', () => {
  const result = concat(1, [2, 3], [[4], 5]);
  const expected = [1, 2, 3, [4], 5];

  expect(result).toEqual(expected);
});

test('does not mutate arguments', () => {
  const array1 = ['banana', 'apple'];
  const array2 = [1, [2, 3]];
  concat(array1, array2);

  expect(array1).toEqual(['banana', 'apple']);
  expect(array2).toEqual([1, [2, 3]]);
});
