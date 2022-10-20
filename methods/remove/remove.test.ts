import { expect, test } from 'vitest';
import { remove } from './remove';

function getFreshArry() {
  return ['banana', 'apple', 'cherry', 'peach', 'fig'];
}

const hasMoreCharatersThanIndex = (item: string, index: number) => item.length > index;

test('behaves as expected', () => {
  const array = getFreshArry();

  const result = remove(array, hasMoreCharatersThanIndex);
  const expected = ['banana', 'apple', 'cherry', 'peach'];

  expect(result).toEqual(expected);
});

test('does mutate the original array', () => {
  const array = getFreshArry();

  remove(array, hasMoreCharatersThanIndex);

  const expected = ['fig'];

  expect(array).not.toEqual(getFreshArry());
  expect(array).toEqual(expected);
});
