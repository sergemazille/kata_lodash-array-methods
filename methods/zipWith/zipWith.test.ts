import { expect, test } from 'vitest';
import { zipWith } from './zipWith';

test('behaves as expected', () => {
  const array1 = [1, 10, 100];
  const array2 = [2, 20, 200];
  const array3 = [3, 30, 300];

  const multiply = (...args: number[]) => {
    return args.reduce((acc, current) => {
      return acc * current;
    }, 1);
  };

  const result = zipWith(array1, array2, array3, multiply);
  const expected = [6, 6000, 6000000]; // [1*2*3, 10*20*30, 100*200*300]

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const array = ['banana', 'apple'];
  zipWith(array);

  expect(array).toEqual(['banana', 'apple']);
});
