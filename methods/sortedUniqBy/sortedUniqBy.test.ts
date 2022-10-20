import { expect, test } from 'vitest';
import { sortedUniqBy } from './sortedUniqBy';

function getFirstCharacter(item: string) {
  return item.charAt(0);
}

test('behaves as expected', () => {
  const sortedArray = ['apple', 'apricot', 'banana', 'blackberry', 'cherry', 'cherry'];

  const result = sortedUniqBy(sortedArray, getFirstCharacter);
  const expected = ['apple', 'banana', 'cherry'];

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const array = ['apple', 'banana', 'banana', 'cherry'];
  sortedUniqBy(array, getFirstCharacter);

  expect(array).toEqual(['apple', 'banana', 'banana', 'cherry']);
});
