import { expect, test } from 'vitest';
import { join } from './join';

test('behaves as expected', () => {
  const array = ['banana', ['apple', [0, NaN], undefined, { age: 42 }, null]];

  const useCases = [
    {
      result: join(array, ':'),
      expected: 'banana:apple:0:NaN:undefined:[object Object]:null',
    },
    {
      result: join(array, 0),
      expected: 'banana0apple000NaN0undefined0[object Object]0null',
    },
  ];

  useCases.forEach(({ result, expected }) => {
    expect(result).toEqual(expected);
  });
});

test('does not mutate the original array', () => {
  const array = ['banana', 1, ['peach', 2]];

  join(array, '-');

  expect(array).toEqual(['banana', 1, ['peach', 2]]);
});
