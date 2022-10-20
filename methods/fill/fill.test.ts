import { describe, expect, test } from 'vitest';
import { fill } from './fill';

test('behaves as expected', () => {
  const array = ['banana', 0, 1, undefined, 'apple', null, [], false, {}, NaN];

  const result = fill(array, 'KO', 2, 6);
  const expected = ['banana', 0, 'KO', 'KO', 'KO', 'KO', [], false, {}, NaN];

  expect(result).toEqual(expected);
});

describe('provides default indexes values', () => {
  test('with a missing end index', () => {
    const array = ['banana', 0, 1, undefined, 'apple'];

    const result = fill(array, 'KO', 2);
    const expected = ['banana', 0, 'KO', 'KO', 'KO'];

    expect(result).toEqual(expected);
  });

  test('with a missing start index', () => {
    const array = ['banana', 0, 1, undefined, 'apple'];

    const result = fill(array, 'KO');
    const expected = ['KO', 'KO', 'KO', 'KO', 'KO'];

    expect(result).toEqual(expected);
  });
});

test('does mutate the original array', () => {
  const array = ['banana', 0, 1];

  fill(array, '', 0, 1);

  expect(array).not.toEqual(['banana', 0, 1]);
  expect(array).toEqual(['', 0, 1]);
});
