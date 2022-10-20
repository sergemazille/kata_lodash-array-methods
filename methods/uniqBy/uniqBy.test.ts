import { expect, test } from 'vitest';
import { uniqBy } from './uniqBy';

function getFirstCharacter(item: string) {
  return item.charAt(0);
}

test('behaves as expected', () => {
  const array = ['banana', 'apple', 'blackberry', 'cherry', 'apricot', 'cherry'];

  const result = uniqBy(array, getFirstCharacter);
  const expected = ['banana', 'apple', 'cherry'];

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const array = ['banana', 'apple', 'banana', 'cherry'];
  uniqBy(array, getFirstCharacter);

  expect(array).toEqual(['banana', 'apple', 'banana', 'cherry']);
});
