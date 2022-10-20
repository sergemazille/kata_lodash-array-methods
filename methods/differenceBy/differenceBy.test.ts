import { expect, test } from 'vitest';
import { differenceBy } from './differenceBy';

test('behaves as expected', () => {
  const array = ['apple', 'banana', 'cherry'];
  const getFirstCharacter = (item: string) => item.charAt(0);

  const result = differenceBy(array, ['apricots', 'clementine'], getFirstCharacter);
  const expected = ['banana'];

  expect(result).toEqual(expected);
});

test('does not mutate original arguments', () => {
  const array = ['apple', 'banana', 'cherry'];
  const args = ['apricots', 'clementine'];
  const getFirstCharacter = (item: string) => item.charAt(0);

  differenceBy(array, args, getFirstCharacter);

  expect(array).toEqual(['apple', 'banana', 'cherry']);
  expect(args).toEqual(['apricots', 'clementine']);
});

test('keeps duplicates', () => {
  const array = [1.2, 1.2, 2.7];
  const project = Math.floor;

  const result = differenceBy(array, [2.6], project);
  const expected = [1.2, 1.2];

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const array = [1.2, 1.2, 2.7];
  const project = Math.floor;

  differenceBy(array, project);

  expect(array).toEqual([1.2, 1.2, 2.7]);
});
