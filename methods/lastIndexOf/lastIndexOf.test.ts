import { expect, test } from 'vitest';
import { lastIndexOf } from './lastIndexOf';

test('behaves as expected', () => {
  const array = ['banana', 'apple', 'peach', 'apple', 'cherry'];

  const useCases = [
    {
      result: lastIndexOf(array, 'apple'),
      expected: 3,
    },
    {
      result: lastIndexOf(array, 'tomato'),
      expected: -1,
    },
    {
      result: lastIndexOf(array, 'cherry', 3),
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
  const result = lastIndexOf(array, value);
  const expected = 2;

  expect(result).toEqual(expected);
});

test('can find index of an array', () => {
  const array = [{ fruit: 'banana' }, [{ fruit: 'apple' }, { fruit: 'peach' }]];
  const value = [{ fruit: 'apple' }, { fruit: 'peach' }];
  const result = lastIndexOf(array, value);
  const expected = 1;

  expect(result).toEqual(expected);
});
