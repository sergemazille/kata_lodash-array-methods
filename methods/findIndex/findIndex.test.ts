import { expect, test } from 'vitest';
import { findIndex } from './findIndex';

const array = ['banana', 'apple', 'peach', 'cherry'];
const has5Characters = (item: string) => item.length === 5;

test('behaves as expected', () => {
  const useCases = [
    {
      result: findIndex(array, has5Characters, 2),
      expected: 2,
    },
    {
      result: findIndex(array, has5Characters, 12),
      expected: -1,
    },
  ];

  useCases.forEach(({ result, expected }) => {
    expect(result).toEqual(expected);
  });
});

test('starts from the first index as a default', () => {
  const result = findIndex(array, has5Characters)
  const expected = 1

  expect(result).toEqual(expected);
})
