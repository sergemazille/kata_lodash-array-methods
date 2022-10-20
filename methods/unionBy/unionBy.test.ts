import { expect, test } from 'vitest';
import { unionBy } from './unionBy';

function getFirstCharacter(item: string) {
  let safeItem = item;

  if (typeof item !== 'string') {
    safeItem = JSON.stringify(item);
  }

  return safeItem.charAt(0);
}

test('behaves as expected', () => {
  const array1 = ['banana', 'apple', 'blackberry', 'cherry'];
  const array2 = ['apricot', 'cherry'];

  const result = unionBy(array1, array2, getFirstCharacter);
  const expected = ['banana', 'apple', 'cherry'];

  expect(result).toEqual(expected);
});

test('handles objects', () => {
  const array1 = [{ age: 42 }, 'apple'];
  const array2 = [{ age: 42 }, 'peach'];

  const result = unionBy(array1, array2, getFirstCharacter);
  const expected = [{ age: 42 }, 'apple', 'peach'];

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const array = ['banana', 'banana'];
  unionBy(array, getFirstCharacter);

  expect(array).toEqual(['banana', 'banana']);
});
