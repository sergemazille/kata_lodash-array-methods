import { expect, test } from 'vitest';
import { uniqWith } from './uniqWith';

function comparator(a: string, b: string) {
  const hasSameCharactersCount = a.length === b.length;
  const startsWithSameLetter = a.charAt(0) === b.charAt(0);

  return hasSameCharactersCount && startsWithSameLetter;
}

test('behaves as expected', () => {
  const array = ['John', 'Jane', 'Jim', 'Jerry', 'Jill', 'Lynda'];

  const result = uniqWith(array, comparator);
  const expected = ['John', 'Jim', 'Jerry', 'Lynda'];

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  const array = ['John', 'Jane'];
  uniqWith(array, comparator);

  expect(array).toEqual(['John', 'Jane']);
});
