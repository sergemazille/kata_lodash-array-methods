import { expect, test } from 'vitest';
import { compact } from './compact';

const array = ['banana', 0, 1, undefined, 'apple', null, [], false, {}, NaN];

test('behaves as expected', () => {
  const result = compact(array);
  const expected = ['banana', 1, 'apple', [], {}];

  expect(result).toEqual(expected);
});

test('does not mutate the original array', () => {
  compact(array);

  expect(array).toEqual(['banana', 0, 1, undefined, 'apple', null, [], false, {}, NaN]);
});
