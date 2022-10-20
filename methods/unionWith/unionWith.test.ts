import { expect, test } from 'vitest';
import { unionWith } from './unionWith';

function comparator(a: string, b: string) {
  const hasSameCharactersCount = a.length === b.length;
  const startsWithSameLetter = a.charAt(0) === b.charAt(0);

  return hasSameCharactersCount && startsWithSameLetter;
}

test('behaves as expected', () => {
  const array1 = ['John', 'Jane'];
  const array2 = ['Jim'];
  const array3 = ['Jerry', 'Jill', 'Lynda'];

  const result = unionWith(array1, array2, array3, comparator);
  const expected = ['John', 'Jim', 'Jerry', 'Lynda'];

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const array = ['John', 'John'];
  unionWith(array, comparator);

  expect(array).toEqual(['John', 'John']);
});
