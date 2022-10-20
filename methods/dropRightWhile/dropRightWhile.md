# dropRightWhile

Copy the items of an array **but** the last items that resolve to a truthy value while beeing parsed in reverse order by a provided function.

After having found the first falsy value (reminder: starting from the end), all the remaining items are kept in the array copy (regardless of their value).

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
dropRightWhile(array, includesTheLetterR); // => ['banana', 'apple', 'peach']

const array = ['banana', 'apple', 'peach', 'cherry'];
const hasIndexGreaterThan1 = (_item, index) => index > 1;
dropRightWhile(array, hasIndexGreaterThan1); // => ['banana', 'apple']

const array = [{ age: 42 }, { age: 18 }, { age: 16 }];
const isUnder18 = (item) => item.age < 18;
dropRightWhile(array, isUnder18); // => [{ age: 42 }, { age: 18 }]
```
