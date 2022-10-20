# takeRightWhile

Returns all the items for which the provided predicate function returns true, **until** the first time it returns false.

The evaluation of the items starts **from the end** of the array.

The predicate function accepts three arguments: an item, the index of the item in the array it is taken of, and the array itself.

## Properties

Mutation: `false`

Difficulty: `Hard`

Return type: `unknown[]`

## Arguments

- `array: unknown[]`
- `predicate: (item, index, array) => boolean`

## Examples

```typescript
const array = ['banana', 'apple', 'peach', 'cherry'];
const includesTheLetterR = (item) => item.includes('r');
takeRightWhile(array, includesTheLetterR); // => ['cherry']

const array = ['banana', 'apple', 'peach', 'cherry'];
const hasIndexGreaterThan1 = (_item, index) => index > 1;
takeRightWhile(array, hasIndexGreaterThan1); // => ['peach', 'cherry']

const array = [{ age: 42 }, { age: 18 }, { age: 16 }];
const isUnder18 = (item) => item.age < 18;
takeRightWhile(array, isUnder18); // => [{ age: 16 }]
```
