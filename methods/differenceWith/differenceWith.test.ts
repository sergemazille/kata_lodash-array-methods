import { expect, test } from 'vitest';
import { differenceWith } from './differenceWith';

test('behaves as expected', () => {
  const array = ['apple', 'banana', 'cherry'];
  const hasSameCharactersCount = (refValue: string, otherValue: string) => refValue.length === otherValue.length;

  const result = differenceWith(array, ['apricots', 'durian'], ['mandarin'], hasSameCharactersCount);
  const expected = ['apple'];

  expect(result).toEqual(expected);
});

test('keeps duplicates', () => {
  type Arg = { firstname: string; lastname: string; age: number; city: string };

  const array = [
    { firstname: 'John', lastname: 'Doe' },
    { firstname: 'John', lastname: 'Doe' },
    { age: 34, city: 'New York' },
  ];

  const objectsAreEqual = (a: Partial<Arg>, b: Partial<Arg>) => {
    return JSON.stringify(a) === JSON.stringify(b);
  };

  const result = differenceWith(array, [{ age: 34, city: 'New York' }], objectsAreEqual);
  const expected = [
    { firstname: 'John', lastname: 'Doe' },
    { firstname: 'John', lastname: 'Doe' },
  ];

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const array = ['apple', 'banana', 'cherry'];
  const hasSameCharactersCount = (refValue: string, otherValue: string) => refValue.length === otherValue.length;

  differenceWith(array, ['apricots', 'durian'], ['mandarin'], hasSameCharactersCount);

  expect(array).toEqual(['apple', 'banana', 'cherry']);
});
