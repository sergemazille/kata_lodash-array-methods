import { expect, test } from 'vitest';
import { intersectionWith } from './intersectionWith';

test('behaves as expected', () => {
  const array1 = [4, 3, 6, 8, 1, 9];
  const array2 = [5, 6, 7, 12];
  const array3 = [6, 4, 5, 7];

  const isSmaller = (a: number, b: number) => a < b;

  const result = intersectionWith(array1, array2, array3, isSmaller);
  const expected = [4, 3, 6, 1];

  expect(result).toEqual(expected);
});

test('ignore arguments that are not arrays', () => {
  const array1 = [1];
  const array2 = [6];
  const wrongArg = 1;

  const isEqual = (a: number, b: number) => a === b;

  const result = intersectionWith(array1, array2, wrongArg, isEqual);
  const expected: [] = [];

  expect(result).toEqual(expected);
});

test('does not mutate original arguments', () => {
  const array1 = [4, 3, 6, 8, 1, 9];
  const array2 = [5, 9, 7, 8];
  const isEqual = (a: number, b: number) => a === b;
  intersectionWith(array1, array2, isEqual);

  expect(array1).toEqual([4, 3, 6, 8, 1, 9]);
  expect(array2).toEqual([5, 9, 7, 8]);
});
