import { expect, test } from 'vitest';
import { nth } from './nth';

test('behaves as expected', () => {
  const array = ['banana', 'apple', 'peach', 'apple'];

  const useCases = [
    {
      result: nth(array, 2),
      expected: 'peach',
    },
    {
      result: nth(array, -3),
      expected: 'apple',
    },
  ];
  {
    const result = nth(array, 2);
    const expected = 'peach';

    expect(result).toEqual(expected);
  }

  useCases.forEach(({ result, expected }) => {
    expect(result).toEqual(expected);
  });
});
