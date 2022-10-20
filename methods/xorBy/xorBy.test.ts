import { expect, test } from 'vitest';
import { xorBy } from './xorBy';

const getFirstCharacter = (item: string) => item.charAt(0);

test('behaves as expected', () => {
  const array1 = ['apple', 'cherry', 'durian', 'avocado'];
  const array2 = ['apricot', 'date', 'tomato'];
  const array3 = ['banana', 'berry'];

  const result = xorBy(array1, array2, array3, getFirstCharacter);
  const expected = ['cherry', 'tomato', 'banana'];

  expect(result).toEqual(expected);
});

test('does not mutate the original arrays', () => {
  const array1 = ['apple'];
  const array2 = ['avocado'];
  xorBy(array1, array2, getFirstCharacter);

  expect(array1).toEqual(['apple']);
  expect(array2).toEqual(['avocado']);
});
