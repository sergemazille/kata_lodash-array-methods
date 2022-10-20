import { expect, test } from 'vitest';
import { takeRightWhile } from './takeRightWhile';

const array = ['banana', 'apple', 'peach', 'cherry'];

const includesTheLetterR = (item: string) => item.includes('r');
const hasIndexLessThan1 = (_item: string, index: number) => index < 2;
const isUnder18 = (item: { age: number }) => item.age < 18;
const isAtLeast18 = (item: { age: number }) => item.age >= 18;
const includesTheLetterA = (item: string) => item.includes('a');

test('behaves as expected', () => {
  const useCases = [
    {
      result: takeRightWhile(array, includesTheLetterR),
      expected: ['cherry'],
    },
    {
      result: takeRightWhile(array, hasIndexLessThan1),
      expected: ['peach', 'cherry'],
    },
    {
      result: takeRightWhile([{ age: 42 }, { age: 18 }, { age: 16 }], isUnder18),
      expected: [{ age: 16 }],
    },
    {
      result: takeRightWhile([{ age: 42 }, { age: 18 }, { age: 16 }], isAtLeast18),
      expected: [],
    },
  ];

  useCases.forEach(({ result, expected }) => {
    expect(result).toEqual(expected);
  });
});

test('returns an empty array if the first argument is an empty array itself', () => {
  const result = takeRightWhile([], includesTheLetterA);

  expect(result).toEqual([]);
});

test('does not mutate the original array', () => {
  takeRightWhile(array, includesTheLetterA);

  expect(array).toEqual(['banana', 'apple', 'peach', 'cherry']);
});
