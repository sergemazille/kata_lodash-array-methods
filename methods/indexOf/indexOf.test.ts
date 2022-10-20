import { expect, test } from 'vitest';
import { indexOf } from './indexOf';

test('behaves as expected', () => {
  const array = ['banana', 'apple', 'peach', 'cherry'];

  const useCases = [
    {
      result: indexOf(array, 'apple'),
      expected: 1,
    },
    {
      result: indexOf(array, 'tomato'),
      expected: -1,
    },
    {
      result: indexOf(array, 'apple', 2),
      expected: -1,
    },
  ];

  useCases.forEach(({ result, expected }) => {
    expect(result).toEqual(expected);
  });
});

test('can find index of an object', () => {
  const array = [{ fruit: 'banana' }, { fruit: 'apple' }, { fruit: 'peach' }];
  const value = { fruit: 'peach' };
  const result = indexOf(array, value);
  const expected = 2;

  expect(result).toEqual(expected);
});

test('can find index of an array', () => {
  const array = [{ fruit: 'banana' }, [{ fruit: 'apple' }, { fruit: 'peach' }]];
  const value = [{ fruit: 'apple' }, { fruit: 'peach' }];
  const result = indexOf(array, value);
  const expected = 1;

  expect(result).toEqual(expected);
});
