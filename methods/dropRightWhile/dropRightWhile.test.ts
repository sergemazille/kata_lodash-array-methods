import { expect, test } from 'vitest';
import { dropRightWhile } from './dropRightWhile';

const array = ['banana', 'apple', 'peach', 'cherry'];

const includesTheLetterR = (item: string) => item.includes('r');
const hasIndexLessThan1 = (_item: string, index: number) => index < 2;
const isUnder18 = (item: { age: number }) => item.age < 18;
const isAtLeast18 = (item: { age: number }) => item.age >= 18;
const includesTheLetterA = (item: string) => item.includes('a');

test('behaves as expected', () => {
  const useCases = [
    {
      result: dropRightWhile(array, includesTheLetterR),
      expected: ['banana', 'apple', 'peach'],
    },
    {
      result: dropRightWhile(array, hasIndexLessThan1),
      expected: ['banana', 'apple'],
    },
    {
      result: dropRightWhile([{ age: 42 }, { age: 18 }, { age: 16 }], isUnder18),
      expected: [{ age: 42 }, { age: 18 }],
    },
    {
      result: dropRightWhile([{ age: 42 }, { age: 18 }, { age: 16 }], isAtLeast18),
      expected: [{ age: 42 }, { age: 18 }, { age: 16 }],
    },
  ];

  useCases.forEach(({ result, expected }) => {
    expect(result).toEqual(expected);
  });
});

test('returns an empty array if the first argument is an empty array itself', () => {
  const result = dropRightWhile([], includesTheLetterA);

  expect(result).toEqual([]);
});

test('does not mutate the original array', () => {
  dropRightWhile(array, includesTheLetterA);

  expect(array).toEqual(['banana', 'apple', 'peach', 'cherry']);
});
