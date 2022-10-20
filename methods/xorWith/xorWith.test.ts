import { expect, test } from 'vitest';
import { xorWith } from './xorWith';

function comparator(a: string, b: string) {
  const hasSameCharactersCount = a.length === b.length;
  const startsWithSameLetter = a.charAt(0) === b.charAt(0);

  return hasSameCharactersCount && startsWithSameLetter;
}

test('behaves as expected', () => {
  const array1 = ['apple', 'cherry', 'longan', 'avocado'];
  const array2 = ['apricot', 'date', 'cashew'];
  const array3 = ['banana', 'berry', 'loquat'];

  const result = xorWith(array1, array2, array3, comparator);
  const expected = ['apple', 'date', 'banana', 'berry'];

  expect(result).toEqual(expected);
});

test('does not mutate the original arrays', () => {
  const array1 = ['avocado'];
  const array2 = ['apricot'];
  xorWith(array1, array2, comparator);

  expect(array1).toEqual(['avocado']);
  expect(array2).toEqual(['apricot']);
});
