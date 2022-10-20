import { expect, test } from 'vitest';
import { intersection } from './intersection';

test('behaves as expected', () => {
  const array1 = ['cherry', 'apple', { age: 42 }];
  const array2 = ['apple', { age: 42 }, 'banana'];
  const array3 = ['banana', 'cherry', { age: 42 }, 'apple'];

  const result = intersection(array1, array2, array3);
  const expected = ['apple', { age: 42 }];

  expect(result).toEqual(expected);
});

test('does not mutate original arguments', () => {
  const array1 = ['apple', 'banana', 'cherry'];
  const array2 = ['apricots', 'clementine'];

  intersection(array1, array2);

  expect(array1).toEqual(['apple', 'banana', 'cherry']);
  expect(array2).toEqual(['apricots', 'clementine']);
});
