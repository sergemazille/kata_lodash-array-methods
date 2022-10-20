import { expect, test } from 'vitest';
import { intersectionBy } from './intersectionBy';

test('behaves as expected, use case 1', () => {
  const array1 = [2.1, 1.2, 4.8, 6.3];
  const array2 = [2.3, 3.4, 4.1];
  const array3 = [4.6, 1.3, 2.2];

  const result = intersectionBy(array1, array2, array3, Math.floor);
  const expected = [2.1, 4.8];

  expect(result).toEqual(expected);
});

test('behaves as expected, use case 2', () => {
  const array1 = ['apple', 'banana', 'pineapple'];
  const array2 = ['tomato', 'apricot', 'peach'];
  const array3 = ['fig', 'grape', 'cherry'];

  const numberOfCharacters = (item: string) => item.length;

  const result = intersectionBy(array1, array2, array3, numberOfCharacters);
  const expected = ['apple', 'banana'];

  expect(result).toEqual(expected);
});

test('does not mutate original arguments', () => {
  const array1 = ['apple', 'banana', 'cherry'];
  const array2 = ['apricots', 'clementine'];

  const numberOfCharacters = (item: string) => item.length;

  intersectionBy(array1, array2, numberOfCharacters);

  expect(array1).toEqual(['apple', 'banana', 'cherry']);
  expect(array2).toEqual(['apricots', 'clementine']);
});
