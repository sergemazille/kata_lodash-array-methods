# dropWhile

Copy the items of an array but the first items that resolve to a truthy value while beeing parsed by a provided predicate function.

After having found the first falsy value, all the remaining items are kept in the array copy (regardless of their value).

The predicate function accepts three arguments: an item, the index of the item in the array it is taken of, and the array itself.

## Properties

Mutation: `false`

Difficulty: `Medium`

Return type: `unknown[]`

## Arguments

- `array: unknown[]`
- `predicate: (item, index, array) => boolean`

## Examples

```typescript
const array = ['banana', 'apple', 'peach', 'cherry'];
const includesTheLetterA = (item) => item.includes('a');
dropWhile(array, includesTheLetterA); // => ['cherry']

const array = ['banana', 'apple', 'peach', 'cherry'];
const hasIndexLessThan1 = (_item, index) => index < 2;
dropWhile(array, hasIndexLessThan1); // => ['peach', 'cherry']

const array = [{ age: 42 }, { age: 18 }, { age: 16 }];
const isUnder18 = (item) => item.age < 18;
dropWhile(array, isUnder18); // => [{ age: 42 }, { age: 18 }, { age: 16 }] (the very first value is falsy...)
```
