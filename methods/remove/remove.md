# remove

Extracts items of an array that meet the predicate condition.

This function **does mutate** the original array.

The return array is composed of the **removed** values.

The predicate function accepts three arguments: an item, the index of the item in the array it is taken of, and the array itself.

## Properties

Mutation: `true`

Difficulty: `Hard`

Return type: `unknown[]`

## Arguments

- `array: unknown[]`
- `predicate: (item, index, array) => boolean`

## Example

```typescript
const array = ['banana', 'apple', 'cherry', 'peach'];
const has5Characters = (item) => item.length === 5;

remove(array, has5Characters); // => ['apple', 'peach']
array; // => ['banana', 'peach']
```
