import { expect, test } from 'vitest';
import { findLastIndex } from './findLastIndex';

const array = ['banana', 'apple', 'peach', 'cherry'];
const has5Characters = (item: string) => item.length === 5;

test('behaves as expected', () => {
  const useCases = [
    {
      result: findLastIndex(array, has5Characters, 1),
      expected: 1,
    },
    {
      result: findLastIndex(array, has5Characters, 0),
      expected: -1,
    },
  ];

  useCases.forEach(({ result, expected }) => {
    expect(result).toEqual(expected);
  });
});

test("takes the last index of the array if the provided start index is greater than the array's length", () => {
  const result = findLastIndex(array, has5Characters, 12);
  const expected = 2;

  expect(result).toEqual(expected);
});

test('takes the first index of the array if the provided start index is lesser 0', () => {
  const result = findLastIndex(array, has5Characters, -2);
  const expected = -1;

  expect(result).toEqual(expected);
});

test('starts from the last index as a default', () => {
  const result = findLastIndex(array, has5Characters)
  const expected = 2

  expect(result).toEqual(expected);
})
