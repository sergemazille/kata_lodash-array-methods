# takeWhile

Returns all the items for which the provided predicate function returns true, **until** the first time it returns false.

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
takeWhile(array, includesTheLetterA); // => ['banana', 'apple', 'peach']

const array = ['banana', 'apple', 'peach', 'cherry'];
const hasIndexLessThan1 = (_item, index) => index < 2;
takeWhile(array, hasIndexLessThan1); // => ['banana', 'apple']

const array = [{ age: 42 }, { age: 18 }, { age: 16 }];
const isUnder18 = (item) => item.age < 18;
takeWhile(array, isUnder18); // => [] (the very first value is falsy...)
```
