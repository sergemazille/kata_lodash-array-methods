import { expect, test } from 'vitest';
import { pullAllWith } from './pullAllWith';

function getFreshArray() {
  return [
    { firstname: 'John', age: 42 },
    { firstname: 'Jane', age: 24 },
    { firstname: 'Jim', age: 24 },
  ];
}

const comparisonArray = [
  { firstname: 'John', age: 24 },
  { firstname: 'Jane', age: 36 },
];

type Arg = Partial<{ firstname: number }>;
const hasSameFirstname = (obj: Arg, comparisonObj: Arg) => obj.firstname === comparisonObj.firstname;

test('behaves as expected', () => {
  const array = getFreshArray();

  const result = pullAllWith(array, comparisonArray, hasSameFirstname);
  const expected = [{ firstname: 'Jim', age: 24 }];

  expect(result).toEqual(expected);
});

test('keeps duplicates', () => {
  const array = [
    { firstname: 'Jim', age: 42 },
    { firstname: 'Jim', age: 42 },
    { firstname: 'John', age: 24 },
  ];

  const result = pullAllWith(array, comparisonArray, hasSameFirstname);
  const expected = [
    { firstname: 'Jim', age: 42 },
    { firstname: 'Jim', age: 42 },
  ];

  expect(result).toEqual(expected);
});

test('does mutate the original array', () => {
  const array = getFreshArray();
  pullAllWith(array, comparisonArray, hasSameFirstname);
  const expected = [{ firstname: 'Jim', age: 24 }];

  expect(array).not.toEqual(getFreshArray());
  expect(array).toEqual(expected);
});
