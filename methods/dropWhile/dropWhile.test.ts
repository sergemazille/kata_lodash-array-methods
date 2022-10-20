import { expect, test } from 'vitest';
import { dropWhile } from './dropWhile';

const array = ['banana', 'apple', 'peach', 'cherry'];

const includesTheLetterA = (item: string) => item.includes('a');
const hasIndexLessThan1 = (_item: string, index: number) => index < 2;
const isUnder18 = (item: { age: number }) => item.age < 18;
const isAtLeast18 = (item: { age: number }) => item.age >= 18;

test('behaves as expected', () => {
  const useCases = [
    {
      result: dropWhile(array, includesTheLetterA),
      expected: ['cherry'],
    },
    {
      result: dropWhile(array, hasIndexLessThan1),
      expected: ['peach', 'cherry'],
    },
    {
      result: dropWhile([{ age: 42 }, { age: 18 }, { age: 16 }], isUnder18),
      expected: [{ age: 42 }, { age: 18 }, { age: 16 }],
    },
    {
      result: dropWhile([{ age: 42 }, { age: 18 }, { age: 16 }], isAtLeast18),
      expected: [{ age: 16 }],
    },
  ];

  useCases.forEach(({ result, expected }) => {
    expect(result).toEqual(expected);
  });
});

test('returns an empty array if the first argument is an empty array itself', () => {
  const result = dropWhile([], includesTheLetterA);

  expect(result).toEqual([]);
});

test('does not mutate the original array', () => {
  dropWhile(array, includesTheLetterA);

  expect(array).toEqual(['banana', 'apple', 'peach', 'cherry']);
});
