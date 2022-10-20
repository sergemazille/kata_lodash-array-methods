import { expect, test } from 'vitest';
import { pullAllBy } from './pullAllBy';

function getFreshArray() {
  return [
    { firstname: 'John', age: 42 },
    { firstname: 'Jane', age: 24 },
    { firstname: 'John', age: 24 },
  ];
}

const comparisonArray = [
  { firstname: 'John', age: 24 },
  { firstname: 'Jane', age: 36 },
];

const extractAge = (obj: Partial<{ age: number }>) => obj.age;

test('behaves as expected', () => {
  const array = getFreshArray();

  const result = pullAllBy(array, comparisonArray, extractAge);
  const expected = [{ firstname: 'John', age: 42 }];

  expect(result).toEqual(expected);
});

test('keeps duplicates', () => {
  const array = [
    { firstname: 'John', age: 42 },
    { firstname: 'John', age: 42 },
    { firstname: 'John', age: 24 },
  ];

  const result = pullAllBy(array, comparisonArray, extractAge);
  const expected = [
    { firstname: 'John', age: 42 },
    { firstname: 'John', age: 42 },
  ];

  expect(result).toEqual(expected);
});

test('does mutate the original array', () => {
  const array = getFreshArray();
  pullAllBy(array, comparisonArray, extractAge);
  const expected = [{ firstname: 'John', age: 42 }];

  expect(array).not.toEqual(getFreshArray());
  expect(array).toEqual(expected);
});
