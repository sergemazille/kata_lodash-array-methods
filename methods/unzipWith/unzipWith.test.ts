import { expect, test } from 'vitest';
import { unzipWith } from './unzipWith';

const multiply = (...args: number[]) => {
  return args.reduce((acc, current) => {
    return acc * current;
  }, 1);
};

test('behaves as expected', () => {
  const array1 = [1, 10, 100];
  const array2 = [2, 20, 200];
  const array3 = [3, 30, 300];

  const result = unzipWith([array1, array2, array3], multiply);
  const expected = [6, 6000, 6000000]; // [1*2*3, 10*20*30, 100*200*300]

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const array = [1, 10, 100];
  unzipWith([array], multiply);

  expect(array).toEqual([1, 10, 100]);
});
