import { expect, test } from 'vitest';
import { zip } from './zip';

test('behaves as expected', () => {
  const array1 = ['John', 42, 'Avatar']
  const array2 = ['Jane', 24, 'Titanic']
  const array3 = ['Jim', 36, 'Terminator']

  const result = zip(array1, array2, array3);
  const expected = [['John', 'Jane', 'Jim'], [42, 24, 36], ['Avatar', 'Titanic', 'Terminator']];

  expect(result).toEqual(expected);
});

test('handles missing data', () => {
  const array1 = ['a', 1];
  const array2 = ['b'];

  const result = zip(array1, array2);
  const expected = [['a', 'b'], [1, undefined]];

  expect(result).toEqual(expected);
});

test('creates chunks of one item if only one array is given', () => {
  const array = ['apple', 1, 'banana', 2];

  const result = zip(array);
  const expected = [['apple'], [1], ['banana'], [2]];

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const array = ['banana', 'apple'];
  zip(array);

  expect(array).toEqual(['banana', 'apple']);
});
